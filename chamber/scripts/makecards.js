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
            const p4 = document.createElement('p');
            const p5 = document.createElement('p');
            const p6 = document.createElement('p');
            //a.setAttribute('href', activity.link);
            //a.setAttribute('target', '_blank');
            span.textContent = `${business.name}`;
            p.textContent =  `Address: ${business.address}`;
            p2.textContent = `Phone Number: ${business.phonenumber}`;
            p3.textContent = `Website: ${business.url}`;
            p4.textContent = `Logo: ${business.image}`;
            p5.textContent = `Membership Level: ${business.membershiplevel}`;
            p6.textContent = `Other: ${business.other}`;
            li.appendChild(span);
            li.appendChild(p);
            li.appendChild(p2);
            li.appendChild(p3);
            li.appendChild(p4);
            li.appendChild(p5);
            li.appendChild(p6);
        });  
        cards.appendChild(li);
    });
}

getLinkData();