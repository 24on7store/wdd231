
    const buttons = document.querySelectorAll('.filter-buttons button');
    const courses = document.querySelectorAll('.course');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            courses.forEach(course => {
                if (filter === 'all') {
                    course.style.display = 'block';
                } else {
                    if (course.classList.contains(filter)) {
                        course.style.display = 'block';
                    } else {
                        course.style.display = 'none';
                    }
                }
            });
        });
    });



    var currentYear = new Date().getFullYear();

var copyrightParagraph = document.getElementById("copyright");
copyrightParagraph.innerHTML = + currentYear;

var lastModifiedParagraph = document.getElementById('lastModified');
var lastModifiedDate = document.lastModified;
lastModifiedParagraph.innerHTML = 'Last Modified' + lastModifiedDate;

