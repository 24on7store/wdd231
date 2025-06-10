// Add timestamp on form load
document.addEventListener("DOMContentLoaded", () => {
        
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        timestampInput.value = new Date().toISOString();
    }

    // Modal functionality
    const modals = document.querySelectorAll(".modal");
    const links = document.querySelectorAll("[data-modal]");
    const closeButtons = document.querySelectorAll(".close");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
        e.preventDefault();
        const modalId = link.dataset.modal;
        document.getElementById(modalId).style.display = "block";
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
        btn.parentElement.parentElement.style.display = "none";
        });
    });

    window.addEventListener("click", (e) => {
        modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
        });
    });

    // Animate membership cards on load
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        card.style.opacity = 0;
        setTimeout(() => {
        card.style.transition = "opacity 1s ease";
        card.style.opacity = 1;
        }, index * 200); // staggered appearance
    });
});






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




