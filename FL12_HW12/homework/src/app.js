function showHeader(){
  let element = document.getElementById('root');
  element.classList.add('container');
  let elmh3 = document.createElement('h3');
  elmh3.innerHTML = 'Sets of terms';
  element.appendChild(elmh3);
  let p = document.createElement('p');
  p.innerHTML = 'constructor...';
  element.appendChild(p);
}

function loadMainPage() {
  showHeader();
  let element = document.getElementById('root');
  let button = document.createElement('button');
  button.innerHTML = 'Add new set';
  element.classList.add('addset');
  button.addEventListener('click', addNewElement);
  element.appendChild(button);
  const sets = JSON.parse(localStorage.getItem('sets'));
  let i = 0;
  sets.forEach(function(set){
    element.appendChild(showItem(set,i));
    i++;
  });
  }

function showItem(set,i){
  let div = document.createElement('div');
  div.classList.add('sets-cart');
  let h5 = document.createElement('h5');
  div.classList.add('studied');
  set.studied === false ? h5.innerHTML = 'unread': h5.innerHTML = 'studied';
  div.appendChild(h5);
  let p1 = document.createElement('p');
  div.classList.add('sets-term');
  p1.innerHTML = set.term;
  div.appendChild(p1);
  let p2 = document.createElement('p');
  div.classList.add('definition');
  p2.innerHTML = set.definition;
  div.appendChild(p2);
  let divb = document.createElement('div');
  let buttonEdit = document.createElement('button');
  buttonEdit.innerHTML = 'Edit';
  buttonEdit.classList.add('btEdit');
  buttonEdit.setAttribute('type', 'submit');
  buttonEdit.addEventListener('click', function(e){
    window.location.hash = '/modify/:'+i;
    window.location.reload();
  });
  divb.appendChild(buttonEdit);
  let buttonRemove = document.createElement('button');
  buttonRemove.innerHTML = 'Remove';
  buttonRemove.setAttribute('type', 'submit');
  buttonRemove.classList.add('btRemove');
  buttonRemove.addEventListener('click', function(e){
    let sets = JSON.parse(localStorage.getItem('sets'));
    sets.splice(i, 1);
    localStorage.setItem('sets', JSON.stringify(sets));
    location.hash = '';
    window.location.reload();
  });
  divb.appendChild(buttonRemove);
  div.appendChild(divb);
  p2.addEventListener('click', function(e){
  set.studied = 'studied';
  h5.innerHTML = set.studied;
  let sets = JSON.parse(localStorage.getItem('sets'));
  sets.splice(i, 1);
  sets.push(set);
  localStorage.setItem('sets', JSON.stringify(sets));
  location.hash = '';
  window.location.reload();
  });
  return div;
}

function addNewSetPage() {
  showHeader();
  let element = document.getElementById('root');
  let form = document.createElement('form');
  let input1 = document.createElement('input');
  input1.setAttribute('id', 'term');
  input1.setAttribute('placeholder', 'Enter term');
  form.appendChild(input1);
  let input2 = document.createElement('input');
  input2.setAttribute('id', 'definition');
  input2.setAttribute('placeholder', 'Enter definition');
  form.appendChild(input2);
  let button1 = document.createElement('button');
  button1.innerHTML = 'Save changes';
  button1.classList.add('btSave');
  button1.setAttribute('type', 'submit');
  form.appendChild(button1);
  button1.addEventListener('click', function(e){
  let set = {
          'term': input1.value,
          'studied': false,
          'definition':input2.value
          }
  let sets;
  if(localStorage.getItem('sets') === null){
  sets=[];
  } else {
  sets = JSON.parse(localStorage.getItem('sets'));
  }
  sets.push(set);
  localStorage.setItem('sets', JSON.stringify(sets));
  location.hash = '';
  window.location.reload();
  });
  let button2 = document.createElement('button');
  button2.innerHTML = 'Cancel';
  button2.setAttribute('type', 'submit');
  button2.classList.add('btCancel');
  button2.addEventListener('click', function(e){
    location.hash = '';
    window.location.reload();
  });
  form.appendChild(button2);
  element.appendChild(form);
  }

function modifySetPage(i) {
  showHeader();
  let sets = JSON.parse(localStorage.getItem('sets'));
  let set = sets[i];
  console.log(set);
  let element = document.getElementById('root');
  let form = document.createElement('form');
  let input1 = document.createElement('input');
  input1.setAttribute('id', 'term');
  input1.setAttribute('placeholder', 'Enter term');
  form.appendChild(input1);
  input1.value = set.term;
  let input2 = document.createElement('input');
  input2.setAttribute('id', 'definition');
  input2.setAttribute('placeholder', 'Enter definition');
  form.appendChild(input2);
  input2.value = set.definition;
  let button1 = document.createElement('button');
  button1.innerHTML = 'Save changes';
  button1.classList.add('btSave');
  button1.setAttribute('type', 'submit');
  form.appendChild(button1);
  button1.addEventListener('click', function(e){
  let setNew = {
          'term': input1.value,
          'studied': false,
          'definition':input2.value
          }
  let sets = JSON.parse(localStorage.getItem('sets'));
  sets[i] = setNew;
  localStorage.setItem('sets', JSON.stringify(sets));
  location.hash = '';
  window.location.reload();
  });
  let button2 = document.createElement('button');
  button2.innerHTML = 'Cancel';
  button2.setAttribute('type', 'submit');
  button2.classList.add('btCancel');
  button2.addEventListener('click', function(e){
    location.hash = '';
    window.location.reload();
  });
  form.appendChild(button2);
  element.appendChild(form);
  }

function addNewElement(){
  window.location.hash = '/add';
  window.location.reload();
}

function doSomethingWithChangeFunction() {
let urlParam = window.location.hash;
let a=-1;
let b=0;
let index = urlParam.slice(a);
let url = urlParam.slice(b,a);
switch (url) {
  case '':
    loadMainPage();
    break;
  case '#/ad':
  addNewSetPage();
    break;
  case '#/modify/:':
    modifySetPage(index);
      break;
  default:
  loadMainPage();
  break;
}
}

window.addEventListener('hashchange', doSomethingWithChangeFunction());
