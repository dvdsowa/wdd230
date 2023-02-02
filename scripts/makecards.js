const url = "https://dvdsowa.github.io/wdd230/scripts/learning-activities.json"
const cards = document.querySelector('#cards');

const displayProphets = (activities) => {
    activities.forEach((activity) => {
        let card = document.createElement('section');
        let fullName = document.createElement('li');
        let portrait = document.createElement('a');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

fetch(url)
    .then((results) => results)
    .then((data) => console.log(data));