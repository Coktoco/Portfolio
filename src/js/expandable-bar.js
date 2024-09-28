document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.getElementById('accordionProject1');
    const accordion2 = document.getElementById('accordionProject2');
    const accordion3 = document.getElementById('accordionProject3');
    const accordionAbout = document.getElementById('accordionAboutMe');

    // ACCORDION ABOUT ME SECTION

    accordionAbout.addEventListener('mouseover', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '20%'; 
            }
            ScrollTrigger.refresh();
        }
    });

    accordionAbout.addEventListener('mouseout', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '10%'; 
            }
            ScrollTrigger.refresh();
        }
    });

    // ACCORDION PROJECT MATEMATYCZNA LINIA

    accordion.addEventListener('mouseover', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '20%'; 
            }
        }
    });

    accordion.addEventListener('mouseout', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '10%'; 
            }
        }
    });

    // ACCORDION PROJECT GITHUB ANALYSIS STATS

    accordion2.addEventListener('mouseover', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '20%'; 
            }
        }
    });

    accordion2.addEventListener('mouseout', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '10%'; 
            }
        }
    });

    // ACCORDION PROJECT BUG TRACKER

    accordion3.addEventListener('mouseover', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '20%'; 
            }
        }
    });

    accordion3.addEventListener('mouseout', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '10%'; 
            }
        }
    });
});