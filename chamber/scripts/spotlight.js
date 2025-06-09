async function loadSpotlight() {
  const response = await fetch('data/members.json'); // Adjust path if needed
  const data = await response.json();

  // Filter only Gold (3) and Silver (2) members
  const spotlightMembers = data.members.filter(member => 
    member.membership === 3 || member.membership === 2
  );

  // Shuffle and pick 2–3 random members
  const selected = spotlightMembers.sort(() => 0.5 - Math.random()).slice(0, 3);

  const container = document.getElementById('spotlight-container');

  selected.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    container.appendChild(card);
  });
}

loadSpotlight();



// -----------JavaScript for Toggle Menu----------
    var navLinks = document.getElementById("navLinks");

    function showMenu(){
        navLinks.style.right = "0"
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




