// Elements
const envelopeContainer = document.getElementById("envelope-container");
const letterContainer = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn"); // Simplified selector

const title = document.getElementById("letter-tittle"); // Fixed spelling from HTML
const catImg = document.getElementById("letter-cat");
const buttonsDiv = document.querySelector(".buttons"); // Fixed selector
const finalText = document.getElementById("final-text");

// 1. Click envelope to open
envelopeContainer.addEventListener("click", () => {
    envelopeContainer.style.display = "none";
    letterContainer.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add('open');
    }, 50);
});


noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// 3. Yes clicked
yesBtn.addEventListener("click", () => {
    title.textContent = "YAYYYYYYYYYYYYY! ❤️ I LOVE YOU";
    catImg.src = "cat_heart.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttonsDiv.style.display = "none";
    finalText.style.display = "block";

    // SHOW PHOTOS
    const photoStack = document.querySelector(".photo-stack");
    photoStack.classList.add("show");

    const images = document.querySelectorAll(".pop-img");
    images.forEach((img, index) => {
        setTimeout(() => {
            img.classList.add("show");
        }, index * 300); // each image pops 0.3s after the previous
    });
});