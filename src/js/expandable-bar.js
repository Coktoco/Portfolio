document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.getElementById('accordionProject1');
    const accordion2 = document.getElementById('accordionProject2');
    const accordion3 = document.getElementById('accordionProject3');
    const accordion4 = document.getElementById('accordionProject4');
    const accordion5 = document.getElementById('accordionProject5');
    const accordion6 = document.getElementById('accordionProject6');

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

    // ACCORDION PROJECT OLD PORTFOLIO

    accordion4.addEventListener('mouseover', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '20%'; 
            }
        }
    });

    accordion4.addEventListener('mouseout', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '10%'; 
            }
        }
    });

    // ACCORDION PROJECT BLENDER

    accordion5.addEventListener('mouseover', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '20%'; 
            }
        }
    });

    accordion5.addEventListener('mouseout', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '10%'; 
            }
        }
    });


    // ACCORDION PROJECT PHOTOGRAPHY

    accordion6.addEventListener('mouseover', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '20%'; 
            }
        }
    });

    accordion6.addEventListener('mouseout', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const correspondingBar = event.target.nextElementSibling; 
            if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                correspondingBar.style.width = '10%'; 
            }
        }
    });
});