// ==========================
// Mobile Menu
// ==========================

const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ==========================
// Navbar Background on Scroll
// ==========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10,20,40,0.95)";
        navbar.style.transition = "0.4s";
    } else {
        navbar.style.background = "rgba(0,0,0,0.25)";
    }

});

// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// ==========================
// Button Hover Animation
// ==========================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});

// ==========================
// Card Animation on Scroll
// ==========================

const cards = document.querySelectorAll(".card,.team-card,.box,.testimonial-card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.8s";

    observer.observe(card);

});