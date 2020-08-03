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


// let moveLeft = [
//   { transform: 'translate(-100%, 0%)' },
//   { opacity: '0', easing: 'ease-out' }
// ];

// let moveSelected= [
//   // { transform: 'translate(-100%, 0%)' },
//   // { color: '#deecf1' },
//   { scale: '1.3' },
// ]

// let moveDuration = {
//   duration: 500,
// }


//plug the date into html
let nowDest = (date) => {

  let dateHTML = (date) => {
    let { day, month, year } = nowO(date);
    const dateFormat = `<p class="date__year">${year}</p>
      <p class="date__month">${month}</p>
      <p class="date__day">${day}</p>`
    return dateFormat;
  }

  // let dateHTMLSelected = (date) => {
  //   let { day, month, year } = nowO(date);
  //   const dateFormat = `<p class="date__year">${year}</p>
  //     <p class="date__month">${month}</p>
  //     <p class="date__day"><input class="flatpickr flatpickr--js" type="text" placeholder="${day}"></p>`
  //   return dateFormat;
  // }

  let highlightDay = document.querySelector(".date__selected--js");
  highlightDay.innerHTML = dateHTML(date);
  // highlightDay.animate(moveSelected, moveDuration);
  // highlightDay.animate ([
  //   {scale: 1.4}
  // ], 500);


  let dayMinusTwo = document.querySelector(".date__minus-two--js");
  nowM2 = nowM(date, 2);
  dayMinusTwo.innerHTML = dateHTML(nowM2);

  let dayMinusOne = document.querySelector(".date__minus-one--js");
  nowM1 = nowM(date, 1);
  dayMinusOne.innerHTML = dateHTML(nowM1);

  let dayPlusOne = document.querySelector(".date__plus-one--js");
  nowP1 = nowP(date, 1);
  dayPlusOne.innerHTML = dateHTML(nowP1);


  let dayPlusTwo = document.querySelector(".date__plus-two--js");
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
    now = nowM(now, 1);
    sessionStorage.setItem('selectedDate', now);
    nowDest(now)
  }
}

//get the button and add event listener
const buttonPrevious = document.querySelector(".date__previous--js");
buttonPrevious.addEventListener('click', nowMinus);



//toggling visible elements in the add view
const viewActionVisible = document.querySelector(".view--js")
const addActionVisible = document.querySelector(".insert--js")
const viewCalendarVisible = document.querySelector(".calendar--js")

//show the fields for adding action
const addAction = document.querySelector(".actions__add--js")
addAction.addEventListener('click', () => {
  addActionVisible.classList.toggle('insert--visible')
  if (viewActionVisible.classList.contains('view--visible')) {
    viewActionVisible.classList.remove('view--visible')
  }
  if (viewCalendarVisible.classList.contains('calendar--visible')) {
    viewCalendarVisible.classList.remove('calendar--visible')
  }
});

//show the fields for viewing history
const viewAction = document.querySelector(".actions__view--js")
viewAction.addEventListener('click', () => {
  viewActionVisible.classList.toggle('view--visible')
  if (addActionVisible.classList.contains('insert--visible')) {
    addActionVisible.classList.remove('insert--visible')
  }
  if (viewCalendarVisible.classList.contains('calendar--visible')) {
    viewCalendarVisible.classList.remove('calendar--visible')
  }
});

//show the calendar to go to date
const viewCalendar = document.querySelector('.actions__calendar--js')
viewCalendar.addEventListener('click', () => {
  viewCalendarVisible.classList.toggle('calendar--visible')
  if (addActionVisible.classList.contains('insert--visible')) {
    addActionVisible.classList.remove('insert--visible')
  }
  if (viewActionVisible.classList.contains('view--visible')) {
    viewActionVisible.classList.remove('view--visible')
  }
});