// ===============================
// STICKY NAVBAR
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        navbar.style.background = "#000";
        navbar.style.padding = "15px 10%";
        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.4)";

    } else {

        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.padding = "18px 10%";
        navbar.style.boxShadow = "none";

    }

});

// ===============================
// HERO BUTTONS
// ===============================

const exploreBtn = document.querySelector(".btn1");
const videoBtn = document.querySelector(".btn2");

if (exploreBtn) {

    exploreBtn.addEventListener("click", () => {

        document.querySelector("#cars").scrollIntoView({

            behavior: "smooth"

        });

    });

}

if (videoBtn) {

    videoBtn.addEventListener("click", () => {

        alert("Luxury Car Promo Video Coming Soon!");

    });

}

// ===============================
// CARD HOVER EFFECT
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-15px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".stat h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    let count = 0;

    const update = () => {

        const increment = target / 80;

        if (count < target) {

            count += increment;

            counter.innerText = Math.ceil(count) + "+";

            requestAnimationFrame(update);

        } else {

            counter.innerText = target + "+";

        }

    };

    update();

});

// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
".card,.box,.stat,.left,.right,.hero-content");

const reveal = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(70px)";
    element.style.transition = "1s";

});

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const size = Math.max(this.clientWidth,this.clientHeight);

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left =
        e.clientX - this.offsetLeft - size/2 + "px";

        circle.style.top =
        e.clientY - this.offsetTop - size/2 + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(()=>{

            circle.remove();

        },600);

    });

});

// ===============================
// SIMPLE IMAGE LIGHTBOX
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img=>{

    img.addEventListener("click",()=>{

        const popup=document.createElement("div");

        popup.style.position="fixed";
        popup.style.top="0";
        popup.style.left="0";
        popup.style.width="100%";
        popup.style.height="100%";
        popup.style.background="rgba(0,0,0,.9)";
        popup.style.display="flex";
        popup.style.justifyContent="center";
        popup.style.alignItems="center";
        popup.style.cursor="pointer";
        popup.style.zIndex="9999";

        const image=document.createElement("img");

        image.src=img.src;
        image.style.maxWidth="80%";
        image.style.borderRadius="20px";

        popup.appendChild(image);

        document.body.appendChild(popup);

        popup.addEventListener("click",()=>{

            popup.remove();

        });

    });

});

// ===============================
// PAGE LOADER
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="1s";
        document.body.style.opacity="1";

    },200);

});

console.log("Luxury Cars Website Loaded Successfully 🚗");