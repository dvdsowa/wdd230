const cards = document.querySelector('#cards');

async function getLinkData() {
    const response = await fetch("https://dvdsowa.github.io/wdd230/chamber/data/members.json");
    const data = await response.json();
    keys = Object.keys(data);
    displayLinkData(data,keys); 
}

function displayLinkData(data,keys) {
    keys.forEach((key) => {
        const li = document.createElement('li');
        data[key].forEach(business => {
            const span = document.createElement('span');
            const p = document.createElement('p');
            const p2 = document.createElement('p');
            const p3 = document.createElement('p');
            const image = document.createElement('img');
            const p5 = document.createElement('p');
            const p6 = document.createElement('p');
            //a.setAttribute('href', activity.link);
            //a.setAttribute('target', '_blank');
            span.textContent = `${business.name}`;
            p.textContent =  `Address: ${business.address}`;
            p2.textContent = `Phone Number: ${business.phonenumber}`;
            p3.textContent = `Website: ${business.url}`;
            image.setAttribute('src', business.image);
            image.setAttribute('alt', `${business.name} icon; original image url: ${business.image}`);
            image.setAttribute('loading', 'lazy');
            image.setAttribute('width', '75');
            image.setAttribute('height', '20');
            p5.textContent = `Membership Level: ${business.membershiplevel}`;
            p6.textContent = `Other: ${business.other}`;
            p6.setAttribute('class', 'last');
            li.appendChild(image);
            li.appendChild(span);
            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);
            li.appendChild(p5);
            li.appendChild(p6);
        });  
        cards.appendChild(li);
    });
}

getLinkData();