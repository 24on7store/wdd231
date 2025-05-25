
const buttons = document.querySelectorAll('.filter-buttons button');
const courses = document.querySelectorAll('.course');
const courseCount = document.getElementById('course-count');

buttons.forEach(button => {
    button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    let visibleCount = 0;

    courses.forEach(course => {
        if (filter === 'all' || course.classList.contains(filter)) {
        course.style.display = 'block';
        visibleCount++;
        } else {
        course.style.display = 'none';
        }
    });

    courseCount.textContent = `The number of courses listed is: ${visibleCount}`;
    });
});






    var currentYear = new Date().getFullYear();

var copyrightParagraph = document.getElementById("copyright");
copyrightParagraph.innerHTML = + currentYear;

var lastModifiedParagraph = document.getElementById('lastModified');
var lastModifiedDate = document.lastModified;
lastModifiedParagraph.innerHTML = 'Last Modified' + lastModifiedDate;

