const flatpickr = require("flatpickr");
require("flatpickr/dist/themes/airbnb.css");


const viewCalendar = document.querySelector('.flatpickr--js')
const calendar = flatpickr(viewCalendar, {
  altInput: true,
  altFormat: "F j, Y",
  dateFormat: "Y-m-d",
});


// viewCalendar.addEventListener('click', () => {
//   viewActionVisible.classList.toggle('view--visible')
//   if (addActionVisible.classList.contains('insert--visible')) {
//     addActionVisible.classList.remove('insert--visible')
//   }
// });