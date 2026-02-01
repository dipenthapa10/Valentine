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


// noBtn.addEventListener("mouseover", () => {
//     const min = 100;
//     const max = 100;

//     const distance = Math.random() * (max - min) + min;
//     const angle = Math.random() * Math.PI * 2;

//     const moveX = Math.cos(angle) * distance;
//     const moveY = Math.sin(angle) * distance;

//     noBtn.style.transition = "transform 0.3s ease";
//     noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
// });

noBtn.addEventListener("mouseover", () => {
    const btnRect = noBtn.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const minDistance = 100;
    const maxDistance = 100;

    // Calculate maximum allowed movement based on button position and viewport
    const maxLeft = viewportWidth - btnRect.width - 10; // 10px padding from right edge
    const maxRight = 10; // 10px padding from left edge
    const maxTop = viewportHeight - btnRect.height - 10; // 10px padding from bottom
    const maxBottom = 10; // 10px padding from top

    // Get current position
    const currentLeft = btnRect.left;
    const currentTop = btnRect.top;

    // Generate random angle and distance
    const distance = Math.random() * (maxDistance - minDistance) + minDistance;
    const angle = Math.random() * Math.PI * 2;

    // Calculate proposed movement
    let moveX = Math.cos(angle) * distance;
    let moveY = Math.sin(angle) * distance;

    // Calculate new position
    const newLeft = currentLeft + moveX;
    const newTop = currentTop + moveY;

    // Adjust if new position would go out of bounds
    if (newLeft < maxRight) {
        moveX = maxRight - currentLeft;
    } else if (newLeft > maxLeft) {
        moveX = maxLeft - currentLeft;
    }

    if (newTop < maxBottom) {
        moveY = maxBottom - currentTop;
    } else if (newTop > maxTop) {
        moveY = maxTop - currentTop;
    }

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