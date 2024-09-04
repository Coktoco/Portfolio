document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.getElementById('accordionProject1'); 
    const expandableBars = document.querySelectorAll('.text-spacer'); 

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

    accordion.addEventListener('click', function (event) {
        if (event.target && event.target.tagName === 'H4') {
            const targetCollapse = document.querySelector(event.target.getAttribute('data-bs-target')); 
            setTimeout(function () {
                if (!targetCollapse.classList.contains('show')) {
                    const correspondingBar = event.target.nextElementSibling; 
                    if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                        correspondingBar.style.width = '10%'; 
                    }
                }
            }, 350);  
        }
    });
});