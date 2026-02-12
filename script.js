const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const mainPage = document.getElementById("main-page");
const datePage = document.getElementById("date-page");
const form = document.getElementById("date-form");
const successMessage = document.getElementById("success-message");

let yesSize = 16;

noBtn.addEventListener("click", () => {
    yesSize += 4;
    yesBtn.style.fontSize = yesSize + "px";
});

yesBtn.addEventListener("click", () => {
    mainPage.classList.add("hidden");
    datePage.classList.remove("hidden");
});

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    });

    if (response.ok) {
        form.classList.add("hidden");
        successMessage.classList.remove("hidden");
    } else {
        alert("Something went wrong.");
    }
});
