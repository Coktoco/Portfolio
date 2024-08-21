// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    // gsap.to(".box", {
    //     scrollTrigger: {
    //         trigger: ".box",
    //         start: "top center",
    //         markers: true,
    //     pin: true,
    //         scrub: 1,
    //         toggleActions: "restart pause reverse pause"
    //     },
    //     x: 400,
    //     rotation: 360,
    //     duration: 3
    // })

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            start: "-140px",
            // markers: true,
            trigger: ".panel-containment",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".panel-containment").offsetWidth
        }
    })

});
