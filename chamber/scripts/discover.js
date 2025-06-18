const container = document.getElementById('card-container');
const messageBox = document.getElementById('visit-message');

async function loadCards() {
  const response = await fetch('./data/places.json');
  const places = await response.json();

  places.forEach((place, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.gridArea = `card${index + 1}`;
    card.innerHTML = `
      <h2>${place.title}</h2>
      <figure>
      
      <img src="${place.img}" alt="${place.title}" width="300" height="200" loading="lazy">
      </figure>
      <address>${place.address}</address>
      <p>${place.description}</p>
      <button>Learn more</button>
    `;
    container.appendChild(card);
  });
}

function checkVisitMessage() {
  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();
  const oneDay = 1000 * 60 * 60 * 24;

  if (!lastVisit) {
    messageBox.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const daysAgo = Math.floor((now - Number(lastVisit)) / oneDay);
    if (daysAgo === 0) {
      messageBox.textContent = "Back so soon! Awesome!";
    } else if (daysAgo === 1) {
      messageBox.textContent = "You last visited 1 day ago.";
    } else {
      messageBox.textContent = `You last visited ${daysAgo} days ago.`;
    }
  }

  localStorage.setItem('lastVisit', now);
}

loadCards();
checkVisitMessage();





// -----------JavaScript for Toggle Menu----------
    var navLinks = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.right = "-100px"
    }
    function hideMenu(){
        navLinks.style.right = "-800px"
    }



//Getting the Dates
var currentYear = new Date().getFullYear();

var copyrightParagraph = document.getElementById("copyright");
copyrightParagraph.innerHTML = + currentYear;

var lastModifiedParagraph = document.getElementById('lastModified');
var lastModifiedDate = document.lastModified;
lastModifiedParagraph.innerHTML = 'Last Modification: ' + lastModifiedDate;




