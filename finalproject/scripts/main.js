// final/scripts/main.js
const data = [
  { name: "Casual Leather", price: "$80", color: "Brown", image: "images/casual1.webp" },
  { name: "Formal Black", price: "$95", color: "Black", image: "images/formal1.webp" },
  { name: "White Sneaker", price: "$75", color: "White", image: "images/sneakers1.webp" }
];

const container = document.getElementById("dynamic-container");

data.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("shoe-card");
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.color} | ${item.price}</p>
  `;
  container.appendChild(card);
});



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

