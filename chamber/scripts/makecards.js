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
        data[key].forEach(activity => {
            const p = document.createElement('p');
            //a.setAttribute('href', activity.link);
            //a.setAttribute('target', '_blank');
            p.textContent = `${activity.name}; ${activity.address}; ${activity.phonenumber}; ${activity.url}; ${activity.image}; ${activity.membershiplevel}; ${activity.other}`;;
            li.appendChild(p);
        });  
        cards.appendChild(li);
    });
}

getLinkData();