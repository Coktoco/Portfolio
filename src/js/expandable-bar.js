document.addEventListener('DOMContentLoaded', function () {
    const accordion = document.getElementById('accordionProject1');
    const accordionAbout = document.getElementById('accordionAboutMe');
    const expandableBars = document.querySelectorAll('.text-spacer'); 

    const accordionElements = [accordion, accordionAbout];

    accordionElements.forEach(accordionElement => {
        accordionElement.addEventListener('mouseover', function (event) {
            if (event.target && event.target.tagName === 'H4') {
                const correspondingBar = event.target.nextElementSibling; 
                if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                    correspondingBar.style.width = '20%'; 
                }
            }
        })
    });

    accordionElements.forEach(accordionElement => {
        accordionElement.addEventListener('mouseout', function (event) {
            if (event.target && event.target.tagName === 'H4') {
                const correspondingBar = event.target.nextElementSibling; 
                if (correspondingBar && correspondingBar.classList.contains('text-spacer')) {
                    correspondingBar.style.width = '10%'; 
                }
            }
        })
    });
    
});