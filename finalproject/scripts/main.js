// final/scripts/main.js
const data = [
  { name: "Casual Leather", price: "$80", color: "Brown", image: "images/casual1.webp" },
  { name: "Formal Black", price: "$95", color: "Black", image: "images/formal1.webp" },
  { name: "White Sneaker", price: "$75", color: "White", image: "images/sneakers1.webp" },

  { name: "Casual Leather", price: "$99.99", color: "Brown", image: "images/casual2.webp" },
  { name: "Formal Black", price: "$59.99", color: "Black", image: "images/formal2.webp" },
  { name: "White Sneaker", price: "$75.99", color: "White", image: "images/sport2.webp" },

  { name: "Casual Leather", price: "$40", color: "Brown", image: "images/casual3.webp" },
  { name: "Formal Black", price: "$45", color: "Black", image: "images/formal3.webp" },
  { name: "White Sneaker", price: "$105", color: "White", image: "images/sport3.webp" },

  { name: "Casual Leather", price: "$60", color: "Brown", image: "images/casual4.webp" },
  { name: "Formal Black", price: "$45", color: "Black", image: "images/formal4.webp" },
  { name: "White Sneaker", price: "$65", color: "White", image: "images/sport4.webp" },
  

  { name: "Casual Leather", price: "$70", color: "Brown", image: "images/casual5.webp" },
  { name: "Formal Black", price: "$85", color: "Black", image: "images/formal5.webp" },
  { name: "White Sneaker", price: "$55", color: "White", image: "images/sport5.webp" }
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


