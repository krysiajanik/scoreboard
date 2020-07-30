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



function nowPlus() {
  let nowP = (date) => { 
    let result = moment(date).add(1, 'd');
    sessionStorage.setItem('selectedDate', result);
    return result;
  };
  
  if (sessionStorage.getItem('selectedDate') == true) {
    let selectedDate = sessionStorage.getItem('selectedDate');
    now = nowP(selectedDate);
  } else {
    now = nowP(now);
  }
}

const buttonFollowing = document.querySelector(".date__following--js");

buttonFollowing.addEventListener('click', nowPlus)



