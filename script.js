const galleryImages = document.querySelectorAll(".gallery img");

const lightbox = document.querySelector("#lightbox");

const lightboxImg = document.querySelector("#lightbox-img");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = image.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

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

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});