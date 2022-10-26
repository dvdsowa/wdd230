const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const todayDisplay = document.querySelector(".visits");
const currentDateAndTime = new Date();
const copyrightyear = document.querySelector('#copyrightyear');
const thedatefooter = document.querySelector('#update');
const thedatenav = document.querySelector('#navigation-date');
const lastmodification = document.lastModified;

let day = days[currentDateAndTime.getDay()];
let day_number = currentDateAndTime.getDate();
let month = months[currentDateAndTime.getMonth()];
let year_number = currentDateAndTime.getFullYear();

//days between
let today = new Date().getTime();
let lastvisit = Number(window.localStorage.getItem("lastvisit"));
window.localStorage.setItem("lastvisit", today);
let difference = today - lastvisit;
let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
todayDisplay.innerHTML = `Days since last visit: ${TotalDays}`;

copyrightyear.textContent = currentDateAndTime.getFullYear();
// console.log("It is now " + currentDateAndTime);
thedatenav.innerHTML = `${day}, ${day_number} ${month} ${year_number}`;
thedatefooter.innerHTML = `Updated ${lastmodification}`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

//navigation-date