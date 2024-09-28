document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".scroll-section ", 
            start: "top 50vh",
            // markers: true,
            pin: ".panel-containment", 
            scrub: 1, 
            // snap: 1 / (sections.length - 1),
            end: () => "+=" + 3*document.querySelector(".panel-containment").offsetWidth 
        }
    });
    
    
    // Accordion causes the ScrollTrigger to refresh
    $('#accordionAboutMe').on('shown.bs.collapse hidden.bs.collapse', function () {
        ScrollTrigger.refresh(); // Odświeżenie ScrollTrigger po każdej zmianie
    });
    
    // ScrollTrigger.normalizeScroll(true)
    // ScrollTrigger.config({ ignoreMobileResize: true})
});