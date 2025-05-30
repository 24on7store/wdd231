const membersContainer = document.querySelector('#members');

async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error fetching members:', error);
  }
}

function displayMembers(members) {
  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    card.innerHTML = `
      <h3>${member.name}</h3> <hr>
      <img src="images/${member.image}" alt="${member.name} logo">
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><a href="${member.website}" target="_blank">Visit Website</a></p>
      <p><strong>Membership:</strong> ${member.membership}</p>
    `;

    membersContainer.appendChild(card);
  });
}

getMembers();



const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');
const directory = document.querySelector('.directory');

// Always use grid layout — we only toggle the images
gridBtn.addEventListener('click', () => {
directory.classList.remove('hide-images');
});

listBtn.addEventListener('click', () => {
directory.classList.add('hide-images');
});


async function loadMembers() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  const container = document.querySelector('.directory');
  container.innerHTML = '';

  members.forEach(member => {
    const section = document.createElement('section');
    section.classList.add('card');

    section.innerHTML = `
      <img src="${member.image}" alt="${member.name} Logo">
      <h3>${member.name}</h3>
      <p>Address: ${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <p>Website: <a href="${member.website}" target="_blank">Visit</a></p>
    `;

    container.appendChild(section);
  });
}

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




