let isLeapYear = (data) => {
  let year = new Date(data).getFullYear();
  const d = 29;
  if(isNaN(year)){
    console.log('Invalid Date');
  } else if(new Date(year, 1, d).getDate() === d) {
    console.log(year + ' is a leap year');
  } else {
    console.log(year + ' is not a leap year');
  }
};

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
let ms1 = 1213131313135465656654564646542132132131;
let ms2 = 1213131313;
isLeapYear(ms1);
isLeapYear(ms2);
