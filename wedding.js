// ===============================
// OPEN ENVELOPE
// ===============================

const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");

openBtn.addEventListener("click", () => {
    envelope.style.opacity = "0";
    envelope.style.pointerEvents = "none";

    setTimeout(() => {
        envelope.style.display = "none";
    }, 800);
});

// ===============================
// MUSIC
// ===============================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if(isPlaying){

        music.pause();
        musicBtn.innerHTML = "🎵";

    }else{

        music.play();
        musicBtn.innerHTML = "⏸";

    }

    isPlaying = !isPlaying;

});

// ===============================
// COUNTDOWN
// ===============================

const weddingDate = new Date("December 20, 2026 19:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance/(1000*60*60*24));

    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds = Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);

// ===============================
// FLOATING HEARTS
// ===============================

setInterval(()=>{

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (20+Math.random()*20)+"px";

    heart.style.animationDuration = (5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

},500);

// ===============================
// FLOWER PETALS
// ===============================

const flowers = ["🌸","🌺","🌼","🌷"];

setInterval(()=>{

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.innerHTML = flowers[Math.floor(Math.random()*flowers.length)];

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration = (5+Math.random()*5)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },9000);

},350);

// ===============================
// RSVP FORM
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("❤️ Thank You!\n\nYour RSVP has been submitted successfully.");

    form.reset();

});

// ===============================
// CELEBRATE BUTTON
// ===============================

const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click",()=>{

    for(let i=0;i<120;i++){

        const spark=document.createElement("div");

        spark.innerHTML="✨";

        spark.style.position="fixed";

        spark.style.left=Math.random()*100+"vw";

        spark.style.top=Math.random()*100+"vh";

        spark.style.fontSize=(10+Math.random()*25)+"px";

        spark.style.pointerEvents="none";

        spark.style.transition="all 2s";

        document.body.appendChild(spark);

        setTimeout(()=>{

            spark.style.transform="translateY(-120px)";
            spark.style.opacity="0";

        },100);

        setTimeout(()=>{

            spark.remove();

        },2200);

    }

    alert("🎉 Congratulations!\nHave a wonderful wedding celebration!");

});