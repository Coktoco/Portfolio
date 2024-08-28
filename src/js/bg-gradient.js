// Adjust the gradient rotation based on scroll position
window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const gradientBackground = document.querySelector('.gradient-background');

    // Calculate new degree values based on scroll
    const startDegree = 105 + (scrollY * 0.1); // Increase start degree as you scroll
    const midDegree = 80 + (scrollY * 0.02);  // Adjust the second color's position
    const endDegree = 360 + (scrollY * 0.02);  // Adjust the final color's position

    // Apply the new gradient with dynamic degrees
    gradientBackground.style.background = `conic-gradient(
        from ${startDegree}deg,
        #101020,
        #0a0615 ${midDegree}deg,
        #333080,
        #f0e8ff ${endDegree}deg
    )`;
});