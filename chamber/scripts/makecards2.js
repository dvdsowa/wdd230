const cards = document.querySelector('#cards');
//
const numberOfItems = 3;
const containedNumbers = [];

//
async function getLinkData() {
    const response = await fetch("https://dvdsowa.github.io/wdd230/chamber/data/members.json");
    const data = await response.json();
    keys = Object.keys(data);
    filteredArray = transform(data);
    //console.log(filteredArray);
    displayRandomLinkData(filteredArray,keys); 
}

function transform(data) {
    function filterByMembership(record) {
    return record.membershiplevel.includes('Gold') || record.membershiplevel.includes('Silver');
} 
data = data.Businesses.filter(filterByMembership);
return data;
}

function generateUniqueRandom(maxNr) {
    //Generate random number
    let random = (Math.random() * maxNr).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if(!containedNumbers.includes(random)) {
        containedNumbers.push(random);
        return random;
    } else {
        if(containedNumbers.length < maxNr) {
          //Recursively generate number
         return  generateUniqueRandom(maxNr);
        } else {
          console.log('No more numbers available.')
          return false;
        }
    }
}



function displayRandomLinkData(data,keys) {
    let indexTracker = [];
    let selections = 0;
    while (selections < numberOfItems) {
        let randomIndex = generateUniqueRandom(data.length-1);
        //console.log(randomIndex)
        let randomIndex2 = generateUniqueRandom(data.length-1);
        //console.log(randomIndex2)
        let randomIndex3 = generateUniqueRandom(data.length-1);
        //console.log(randomIndex3)
        if (!indexTracker.includes(randomIndex) && !indexTracker.includes(randomIndex2) && !indexTracker.includes(randomIndex3)) {
        keys.forEach(key => {
                let li = document.createElement('li');
                let li2 = document.createElement('li');
                let li3 = document.createElement('li');
                let span = document.createElement('span');
                let span2 = document.createElement('span');
                let span3 = document.createElement('span');
                let p = document.createElement('p');
                let p_2 = document.createElement('p');
                let p_3 = document.createElement('p');
                let p2 = document.createElement('p');
                let p2_2 = document.createElement('p');
                let p2_3 = document.createElement('p');
                let p3 = document.createElement('p');
                let p3_2 = document.createElement('p');
                let p3_3 = document.createElement('p');
                let image = document.createElement('img');
                let image_2 = document.createElement('img');
                let image_3 = document.createElement('img');
                let p5 = document.createElement('p');
                let p5_2 = document.createElement('p');
                let p5_3 = document.createElement('p');
                let p6 = document.createElement('p');
                let p6_2 = document.createElement('p');
                let p6_3 = document.createElement('p');
                data.forEach(business => {
                span.textContent = `${data[randomIndex].name}`;
                span2.textContent = `${data[randomIndex2].name}`;
                span3.textContent = `${data[randomIndex3].name}`;
                p.textContent =  `Address: ${data[randomIndex].address}`;
                p_2.textContent =  `Address: ${data[randomIndex2].address}`;
                p_3.textContent =  `Address: ${data[randomIndex3].address}`;
                p2.textContent = `Phone Number: ${data[randomIndex].phonenumber}`;
                p2_2.textContent = `Phone Number: ${data[randomIndex2].phonenumber}`;
                p2_3.textContent = `Phone Number: ${data[randomIndex3].phonenumber}`;
                p3.textContent = `Website: ${data[randomIndex].url}`;
                p3_2.textContent = `Website: ${data[randomIndex2].url}`;
                p3_3.textContent = `Website: ${data[randomIndex3].url}`;
                image.setAttribute('src', data[randomIndex].image);
                image.setAttribute('alt', `${data[randomIndex].name} icon; original image url: ${data[randomIndex].image}`);
                image.setAttribute('loading', 'lazy');
                image.setAttribute('width', '75');
                image.setAttribute('height', '20');
                image_2.setAttribute('src', data[randomIndex2].image);
                image_2.setAttribute('alt', `${data[randomIndex2].name} icon; original image url: ${data[randomIndex2].image}`);
                image_2.setAttribute('loading', 'lazy');
                image_2.setAttribute('width', '75');
                image_2.setAttribute('height', '20');
                image_3.setAttribute('src', data[randomIndex3].image);
                image_3.setAttribute('alt', `${data[randomIndex3].name} icon; original image url: ${data[randomIndex3].image}`);
                image_3.setAttribute('loading', 'lazy');
                image_3.setAttribute('width', '75');
                image_3.setAttribute('height', '20');
                p5.textContent = `Membership Level: ${data[randomIndex].membershiplevel}`;
                p5_2.textContent = `Membership Level: ${data[randomIndex2].membershiplevel}`;
                p5_3.textContent = `Membership Level: ${data[randomIndex3].membershiplevel}`;
                p6.textContent = `Other: ${data[randomIndex].other}`;
                p6_2.textContent = `Other: ${data[randomIndex2].other}`;
                p6_3.textContent = `Other: ${data[randomIndex3].other}`;
                p6.setAttribute('class', 'last');
                li.appendChild(image);
                li.appendChild(span);
                li.appendChild(p);
                li.appendChild(p2);
                li.appendChild(p3);
                li.appendChild(p5);
                li.appendChild(p6);
                li2.appendChild(image_2);
                li2.appendChild(span2);
                li2.appendChild(p_2);
                li2.appendChild(p2_2);
                li2.appendChild(p3_2);
                li2.appendChild(p5_2);
                li2.appendChild(p6_2);
                li3.appendChild(image_3);
                li3.appendChild(span3);
                li3.appendChild(p_3);
                li3.appendChild(p2_3);
                li3.appendChild(p3_3);
                li3.appendChild(p5_3);
                li3.appendChild(p6_3);
                selections++;
                indexTracker.push(randomIndex);
        });  
        cards.appendChild(li);
        cards.appendChild(li2);
        cards.appendChild(li3);
    });
}}
}

getLinkData();