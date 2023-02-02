// Initialize elements and some variables
const currentDateAndTime = new Date();
const copyrightyear = document.querySelector('#copyrightyear');
const thedate = document.querySelector('#lastModified');
const total = document.querySelector('#total');
const lastmodification = document.lastModified;

copyrightyear.textContent = currentDateAndTime.getFullYear();
// console.log("It is now " + currentDateAndTime);
thedate.innerHTML = `Last Updated: ${lastmodification}`;

//  ctrl. + slash with text highlighted turns lines into comments.