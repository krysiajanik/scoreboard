var moment = require('moment');
moment().format();

//get today's date
let now = moment().format("D, MMMM, YYYY");

//create the object with today's date
let nowO = (date) => {
  let nowObj = { day: moment(date).format("D"), month: moment(date).format("MMMM"), year: moment(date).format("YYYY") };
  return nowObj
}
//Function for increasing the date by one day
let nowP = (date, n) => {
  let newDate = moment(date).add(n, 'd');
  return newDate;
};
//Function for decreasing the date by one day
let nowM = (date, n) => {
  let newDate = moment(date).subtract(n, 'd');
  return newDate;
};

//plug the date into html
let highlightDay = document.querySelector(".date__selected--js");
let dayMinusOne = document.querySelector(".date__minus-one--js");
let dayMinusTwo = document.querySelector(".date__minus-two--js");
let dayPlusOne = document.querySelector(".date__plus-one--js");
let dayPlusTwo = document.querySelector(".date__plus-two--js");

let nowDest = (date) => {
  
  let dateHTML = (date) => {
    let { day, month, year } = nowO(date);
    const dateFormat = `<p class="date__year">${year}</p>
      <p class="date__month">${month}</p>
      <p class="date__day">${day}</p>`
      return dateFormat;
  }
  
  highlightDay.innerHTML = dateHTML(date);

  nowM2 = nowM(date, 2);
  dayMinusTwo.innerHTML = dateHTML(nowM2);

  nowM1 = nowM(date, 1);
  dayMinusOne.innerHTML = dateHTML(nowM1);

  nowP1 = nowP(date, 1);
  dayPlusOne.innerHTML = dateHTML(nowP1);

  nowP2 = nowP(date, 2);
  dayPlusTwo.innerHTML = dateHTML(nowP2);
}

//set the date to today when opening the app
nowDest(now);



//Function for changing the html view and adding storage item
function nowPlus() {
  if (sessionStorage.getItem('selectedDate') == true) {
    let savedDate = sessionStorage.getItem('selectedDate');
    now = nowP(savedDate, 1);
    sessionStorage.setItem('selectedDate', now);
    nowDest(now)
  } else {
    now = nowP(now, 1);
    sessionStorage.setItem('selectedDate', now);
    nowDest(now)
  }
}

//get the button and add event listener
const buttonFollowing = document.querySelector(".date__following--js");
buttonFollowing.addEventListener('click', nowPlus);


//Function for changing the html view and adding storage item
function nowMinus() {
  if (sessionStorage.getItem('selectedDate') == true) {
    let savedDate = sessionStorage.getItem('selectedDate');
    now = nowM(savedDate, 1);
    sessionStorage.setItem('selectedDate', now);
    nowDest(now)
  } else {
    now = nowM(now,1);
    sessionStorage.setItem('selectedDate', now);
    nowDest(now)
  }
}

//get the button and add event listener
const buttonPrevious = document.querySelector(".date__previous--js");
buttonPrevious.addEventListener('click', nowMinus);
