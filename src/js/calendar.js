var moment = require('moment');
moment().format();


// let highlightDay = document.querySelector(".date__selected--js");

// let dayMinusOne = document.querySelector(".date__minus-one--js");

// let dayMinusTwo = document.querySelector(".date__minus-two--js");

// let dayPlusOne = document.querySelector(".date__plus-one--js");

// let dayPlusTwo = document.querySelector(".date__plus-two--js");



const nowObj = { day: moment().format("D"), month: moment().format("MMMM"), year: moment().format("YYYY") };
let now = moment().format("D, MMMM, YYYY");
console.log(now);


//Function for increasing the date by one day
function nowPlus() {
  let nowP = (date) => {
    let newDate = moment(date).add(1, 'd');
    sessionStorage.setItem('selectedDate', newDate);
    return newDate;
  };

  if (sessionStorage.getItem('selectedDate') == true) {
    let selectedDate = sessionStorage.getItem('selectedDate');
    now = nowP(selectedDate);
  } else {
    now = nowP(now);
  }
}

//get the button and add event listener
const buttonFollowing = document.querySelector(".date__following--js");

buttonFollowing.addEventListener('click', nowPlus);

//Function for decreasing the date by one day
function nowMinus() {
  let nowM = (date) => {
    let newDate = moment(date).subtract(1, 'd');
    sessionStorage.setItem('selectedDate', newDate);
    return newDate;
  };

  if (sessionStorage.getItem('selectedDate') == true) {
    let selectedDate = sessionStorage.getItem('selectedDate');
    now = nowM(selectedDate);
  } else {
    now = nowM(now);
  }
}


//get the button and add event listener
const buttonPrevious = document.querySelector(".date__previous--js");

buttonPrevious.addEventListener('click', nowMinus);

