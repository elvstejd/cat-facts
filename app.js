// random cat images -> https://aws.random.cat/meow
// random cat facts -> https://cat-fact.herokuapp.com/facts

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.getElementById('load-more');
DisplayCats();

loadMoreBtn.addEventListener('click', () => {
    DisplayCats();
});


async function DisplayCats() {

    const imagesArray = [];

    // get 5 cat images (should probably read the docs and request 5 directly)
    for (let i = 0; i < 5; i++) {
        const imageResponse = await fetch('https://aws.random.cat/meow', {method: 'GET'});
        const catImage = await imageResponse.json();
        imagesArray.push(catImage.file);
    }
    
    // get quotes
    const factResponse = await fetch('https://cat-fact.herokuapp.com/facts/random?amount=5', {method: 'GET'});
    const catFacts = await factResponse.json();

    for (let i = 0; i < 5; i++) {
        const catCard = makeCard(imagesArray[i], catFacts[i].text);
        gallery.appendChild(catCard);
    }
}

function makeCard(image, fact) {
    // creating the elements
    const card = document.createElement('div');
    card.className = 'card';
    const cardImageDiv = document.createElement('div');
    cardImageDiv.className = 'card-image';
    const img = document.createElement('img');
    img.src = image;
    const catFactDiv = document.createElement('div');
    catFactDiv.className = 'cat-fact';
    catFactDiv.textContent = fact;

    // assembling
    cardImageDiv.appendChild(img);
    card.appendChild(cardImageDiv);
    card.appendChild(catFactDiv);

    return card;
}
