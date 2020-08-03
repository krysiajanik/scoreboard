const flatpickr = require("flatpickr");
require("flatpickr/dist/themes/airbnb.css");



const displayCalendar = document.querySelector('.flatpickr--js')
const calendar = flatpickr(displayCalendar, {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
});

console.log(displayCalendar);
console.log(calendar);

