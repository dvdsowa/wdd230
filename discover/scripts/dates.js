const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDateAndTime = new Date();
const copyrightyear = document.querySelector('#copyrightyear');
const thedatefooter = document.querySelector('#update');
const thedatenav = document.querySelector('#navigation-date');
const lastmodification = document.lastModified;

let day = days[currentDateAndTime.getDay()];
let day_number = currentDateAndTime.getDate();
let month = months[currentDateAndTime.getMonth()];
let year_number = currentDateAndTime.getFullYear();

copyrightyear.textContent = currentDateAndTime.getFullYear();
// console.log("It is now " + currentDateAndTime);
thedatenav.innerHTML = `${day}, ${day_number} ${month} ${year_number}`;
thedatefooter.innerHTML = `Updated ${lastmodification}`;

//navigation-date