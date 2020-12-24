function Fighter(obj) {
  obj.wins = 0;
  obj.losses = 0;
  obj.totalHP = obj.hp;
  let addLoss = () => ++obj.losses;
  let addWin = () => ++obj.wins;
  return{
    getName: () => obj.name,
    getDamage: () => obj.damage,
    getStrength: () => obj.strength,
    getAgility: () => obj.agility,
    getHealth: () => obj.hp,
    logCombatHistory: () => console.log(`Name: ${obj.name}, Wins: ${obj.wins}, Losses: ${obj.losses}`),
    heal: (healthPoints) => {
      obj.hp + healthPoints > obj.totalHP ? obj.hp = obj.totalHP : obj.hp = obj.hp + healthPoints
    },
    dealDamage: (healthPoints) => {
      obj.hp > healthPoints ? obj.hp = obj.hp - healthPoints : obj.hp = 0
    },
    addLoss: addLoss,
    addWin: addWin,
    attack: (obj2) => {
      const a = 101;
      const b = 100;
      let probability = b - (obj2.getStrength()+obj2.getAgility());
      let success = Math.floor(Math.random() * a);
      if(success > probability){
        obj2.dealDamage(obj.damage);
        addWin();
        obj2.addLoss();
        console.log(`${obj.name} makes ${obj.damage} damage to ${obj2.getName()}`);
       } else {
        console.log(`${obj2.getName()} attack missed`);
       }
       }
       }
}

function buttle(fighter1,fighter2){
  if(fighter1.getHealth() === 0){
    console.log(`warning message: ${fighter1.getName()} is dead  at the start of battle and can't flight`);
  } else if(fighter2.getHealth() === 0){
    console.log(`warning message: ${fighter2.getName()} is dead  at the start of battleand can't flight`);
  } else {
    while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
      fighter1.attack(fighter2);
      if(fighter2.getHealth() > 0) {
        fighter2.attack(fighter1);
      }
      }
      if(fighter1.getHealth() === 0){
        console.log(`${fighter2.getName()} has won`);
        fighter2.logCombatHistory();
      } else {
        console.log(`${fighter1.getName()} has won`);
        fighter1.logCombatHistory();
      }
  }
}
