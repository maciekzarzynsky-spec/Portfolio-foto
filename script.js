// Smooth scroll tylko dla linków prowadzących do sekcji na TEJ SAMEJ stronie.
// Dzięki temu menu przewija płynnie, ale powrót z galerii przez index.html#portfolio robi zwykły skok bez animacji.
const samePageLinks = document.querySelectorAll('a[href^="#"]');

samePageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Pobieramy wszystkie zdjęcia z galerii.
const galleryImages = document.querySelectorAll(".gallery img");

// Pobieramy elementy lightboxa, czyli okna do powiększania zdjęć.
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const prevButton = document.querySelector("#lightbox-prev");
const nextButton = document.querySelector("#lightbox-next");

// Zmienna zapamiętująca numer aktualnie otwartego zdjęcia.
let currentIndex = 0;

// Ten kod uruchamiamy tylko wtedy, kiedy dana strona naprawdę ma lightbox.
if (lightbox && lightboxImg) {

    galleryImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index;
            lightbox.classList.add("active");
            lightboxImg.src = image.src;
        });
    });

    function showImage(index) {
        if (index < 0) {
            currentIndex = galleryImages.length - 1;
        } else if (index >= galleryImages.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        lightboxImg.src = galleryImages[currentIndex].src;
    }

    if (prevButton) {
        prevButton.addEventListener("click", (event) => {
            event.stopPropagation();
            showImage(currentIndex - 1);
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", (event) => {
            event.stopPropagation();
            showImage(currentIndex + 1);
        });
    }

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
}

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// Navbar istnieje tylko na stronie głównej, więc najpierw sprawdzamy czy został znaleziony.
const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}