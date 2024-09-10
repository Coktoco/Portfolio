document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.config({ 
        ignoreMobileResize: true
      });
    
    ScrollTrigger.normalizeScroll(true)

    

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            start: "top top",
            // markers: true,
            trigger: ".panel-containment",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=1" + document.querySelector(".panel-containment").offsetWidth
        }
    })
    ScrollTrigger.refresh();
});
