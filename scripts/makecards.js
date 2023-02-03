const cards = document.querySelector('#cards');

async function getLinkData() {
    const response = await fetch("https://dvdsowa.github.io/wdd230/scripts/learning-activities.json");
    const data = await response.json();
    keys = Object.keys(data);
    displayLinkData(data,keys); 
}

function displayLinkData(data,keys) {
    keys.forEach((key) => {
        const li = document.createElement('li');  
        li.textContent = key + ": ";
        data[key].forEach(activity => {
            const a = document.createElement('a');
            a.setAttribute('href', activity.link);
            a.setAttribute('target', '_blank');
            a.textContent = activity.name + ' | ';;
            li.appendChild(a);
        });  
        cards.appendChild(li);
    });
}

getLinkData();