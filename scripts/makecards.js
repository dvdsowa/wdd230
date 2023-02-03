const url = "https://dvdsowa.github.io/wdd230/scripts/learning-activities.json"
const cards = document.querySelector('#cards');

async function getLinkData() {
    const response = await fetch(url);
    const data = await response.json();
    keys = Object.keys(data);
    displayLinkData(data.keys); 
}

function displayLinkData(data,keys) {
    keys.forEach((key) => {
        let li = document.createElement('li');  
        li.textContent = key + ": ";
        data[key].forEach(link => {
            let a = document.createElement('a');
            a.setAttribute('href', link.link);
            a.setAttribute('target', '_blank');
            a.textContent = link.name + ' | ';;
            li.appendChild(a);
        });  
        cards.appendChild(li);
    });
}

getLinkData();