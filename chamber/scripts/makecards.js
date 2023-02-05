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
        li.textContent = key + ": ";
        data[key].forEach(business => {
            const p = document.createElement('p');
            //a.setAttribute('href', activity.link);
            //a.setAttribute('target', '_blank');
            p.textContent = `${business.name}; ${business.address}; ${business.phonenumber}; ${business.url}; ${business.image}; ${business.membershiplevel}; ${business.other}`;;
            li.appendChild(p);
        });  
        cards.appendChild(li);
    });
}

getLinkData();