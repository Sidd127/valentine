const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const moreBtn = document.getElementById("more-btn");
const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next");
const form = document.getElementById("date-form");
const finalMessage = document.getElementById("final-message");

let yesSize = 16;
let noClickCount = 0;

const noTexts = [
    "Are you sure?",
    "Really sure?",
    "Think again?",
    "I’ll wait...",
    "Last chance?",
    "You don’t mean that."
];

noBtn.addEventListener("click", () => {
    yesSize += 4;
    yesBtn.style.fontSize = yesSize + "px";

    if (noClickCount < noTexts.length) {
        noBtn.innerText = noTexts[noClickCount];
        noClickCount++;
    }
});

yesBtn.addEventListener("click", () => {

    // CONFETTI
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
    });

    page1.classList.add("hidden");
    page2.classList.remove("hidden");
});

moreBtn.addEventListener("click", () => {
    page2.classList.add("hidden");
    page3.classList.remove("hidden");
    steps[0].classList.add("active");
});

let currentStep = 0;

nextBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const select = steps[currentStep].querySelector("select");
        if (!select.value) {
            alert("Please choose an option.");
            return;
        }
        steps[currentStep].classList.remove("active");
        currentStep++;
        steps[currentStep].classList.add("active");
    });
});

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        form.classList.add("hidden");
        finalMessage.classList.remove("hidden");
    } else {
        alert("Something went wrong.");
    }
});

// PARTICLES
tsParticles.load("particles-js", {
    particles: {
        number: { value: 50 },
        shape: { type: "char", character: { value: ["❤","💕","💖"] } },
        size: { value: 20 },
        move: { speed: 1 },
        opacity: { value: 0.4 }
    }
});
