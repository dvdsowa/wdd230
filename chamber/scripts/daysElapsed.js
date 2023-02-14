const todayDisplay = document.querySelector(".visits");
//days between
let today = new Date().getTime();
let lastvisit = Number(window.localStorage.getItem("lastvisit"));
window.localStorage.setItem("lastvisit", today);
let difference = today - lastvisit;
let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
todayDisplay.innerHTML = `${TotalDays}`;
