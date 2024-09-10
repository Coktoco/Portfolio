document.addEventListener('DOMContentLoaded', function () {
    const gradientBackground = document.querySelector('.gradient-background');
    let currentGradient = getCookie('gradient') || 'gradient1'; // Odczytaj gradient z cookies lub ustaw domyślny

    // Sprawdź, czy ekran jest mobilny
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    function setGradient(startDegree, midDegree, endDegree) {
        if (isMobile) {
            // Ustaw stałe kolory zamiast gradientów
            if (currentGradient === 'gradient1') {
                gradientBackground.style.background = '#333080'; // Granatowy
            } else if (currentGradient === 'gradient2') {
                gradientBackground.style.background = '#000000'; // Czarny
            } else if (currentGradient === 'gradient3') {
                gradientBackground.style.background = '#ffffff'; // Biały
            }
        } else {
            // Gradient dla większych ekranów
            if (currentGradient === 'gradient1') {
                gradientBackground.style.background = `conic-gradient(
                    from ${startDegree}deg,
                    #101020,
                    #0a0615 ${midDegree}deg,
                    #333080,
                    #f0e8ff ${endDegree}deg
                )`;
            } else if (currentGradient === 'gradient2') {
                gradientBackground.style.background = `conic-gradient(
                    from ${startDegree}deg,
                    #000000 ${midDegree}deg,
                    #ffffff ${endDegree}deg
                )`;
            } else if (currentGradient === 'gradient3') {
                gradientBackground.style.background = `conic-gradient(
                    from ${startDegree}deg,
                    #ffffff ${midDegree}deg,
                    #000000 ${endDegree}deg
                )`;
            }
        }
    }

    function changeGradient(gradientType) {
        currentGradient = gradientType;
        setCookie('gradient', gradientType, 7);
        // Zaktualizuj tło tylko jeśli nie jest to urządzenie mobilne
        if (!isMobile) {
            updateGradientOnScroll(); 
        } else {
            setGradient(); // Ustaw tło na stały kolor
        }
    }

    function updateGradientOnScroll() {
        if (isMobile) return; // Nic nie rób na urządzeniach mobilnych

        const scrollY = window.scrollY;
        const startDegree = 105 + (scrollY * 0.1);
        const midDegree = 80 + (scrollY * 0.02);
        const endDegree = 360 + (scrollY * 0.02);
        setGradient(startDegree, midDegree, endDegree);
    }

    document.getElementById('color1').addEventListener('click', function () {
        changeGradient('gradient1');
    });

    document.getElementById('color2').addEventListener('click', function () {
        changeGradient('gradient2');
    });

    document.getElementById('color3').addEventListener('click', function () {
        changeGradient('gradient3');
    });

    // Dodaj nasłuchiwacz scrollowania tylko na ekranach większych niż mobilne
    if (!isMobile) {
        window.addEventListener('scroll', updateGradientOnScroll);
    }

    // Inicjalizacja początkowego gradientu
    updateGradientOnScroll();
});