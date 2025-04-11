document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById('site-header');
    if (!header) return; // safety check

    const checkScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Run once on load
    checkScroll();

    // Run on scroll
    window.addEventListener('scroll', checkScroll);
});

const slider = document.getElementById("cardSlider");

if (slider) {
    let isDown = false;
    let startX;
    let scrollLeft;

    // Mouse down
    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("grabbing");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    // Mouse leave
    slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("grabbing");
    });

    // Mouse up
    slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("grabbing");
    });

    // Mouse move
    slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1.5; // scroll speed multiplier
        slider.scrollLeft = scrollLeft - walk;
    });
}


const questions = document.querySelectorAll(".faq__question");

// Only run if there are FAQ questions on the page
if (questions.length > 0) {
    questions.forEach((question) => {
        question.addEventListener("click", () => {
            const isExpanded = question.getAttribute("aria-expanded") === "true";

            // Collapse all questions
            questions.forEach((q) => {
                q.setAttribute("aria-expanded", "false");
            });

            // If the clicked one wasn't open, expand it
            if (!isExpanded) {
                question.setAttribute("aria-expanded", "true");
            }
        });
    });
}


const navToggle = document.querySelector('.open__nav--toggle');
const siteNav = document.getElementById('site__nav');
const body = document.body;

if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
        siteNav.classList.toggle('nav--open');
        navToggle.classList.toggle('active');
        body.classList.toggle('body--hidden');
    });

    // Close nav when clicking any nav__menu item
    const navMenus = siteNav.querySelectorAll('.nav__menu');
    navMenus.forEach(menu => {
        menu.addEventListener('click', () => {
            siteNav.classList.remove('nav--open');
            navToggle.classList.remove('active');
            body.classList.remove('body--hidden');
        });
    });
}
