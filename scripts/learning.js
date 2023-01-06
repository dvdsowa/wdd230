// Initialize elements and some variables
const currentDateAndTime = new Date();
const copyrightyear = document.querySelector('#copyrightyear');
const thedate = document.querySelector('#update');
const total = document.querySelector('#total');
const lastmodification = document.lastModified;

copyrightyear.textContent = currentDateAndTime.getFullYear();
// console.log("It is now " + currentDateAndTime);
thedate.innerHTML = `Last Updated: ${lastmodification}`;

let theTotal = getSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(`The total is ${theTotal}.`);
total.textContent = theTotal;

function getSum(...theNumbers){
    let sum = 0;
    for (let aNumber of theNumbers) {
        sum += aNumber;
    }
    return sum;
}

//  ctrl. + slash with text highlighted turns lines into comments.