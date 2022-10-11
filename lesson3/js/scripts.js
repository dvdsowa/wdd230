const thedatefooter = document.querySelector('#update');
const lastmodification = document.lastModified;

// console.log("It is now " + currentDateAndTime);
thedatefooter.innerHTML = `Last Updated: ${lastmodification}`;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

//navigation-date