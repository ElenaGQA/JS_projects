const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const rating = document.querySelector('#rating');
const submitBtn = document.querySelector('#submitBtn');
const message = document.querySelector('#message');
const feedbackBtn = document.querySelector("#feedbackBtn");
const adminModal = document.querySelector("#adminModal");
const closeModal = document.querySelector("#closeModal");
const submitPassword = document.querySelector("#submitPassword");
const adminPasswordInput = document.querySelector("#adminPassword");
const passwordMessage = document.querySelector("#passwordMessage");

const ADMIN_PASSWORD = "admin123"


form.addEventListener('submit', (event) => {
    event.preventDefault();  // prevents default action of the form when submiting to clear the form and all data is lost
    let nameValue = name.value;
    let emailValue = email.value;
    let ratingValue = rating.value;
    if (!nameValue || !emailValue || !ratingValue) {
        message.innerHTML = "Please, fill out all fields!";
        message.style.color = "red";
        message.style.textAlign = "center";
    }


    if (ratingValue == "excellent") {
        message.style.color = "darkgreen";
    }
    else if (ratingValue == "good") {
        message.style.color = "blue";
    }
    else if (ratingValue == "normal") {
        message.style.color = "orange";
    }
    else if (ratingValue == "poor") {
        message.style.color = "red";
    }
    message.innerHTML = `Thank you for your feedback, ${nameValue}! You answered ${ratingValue}`;
    message.style.textAlign = "center";
    form.reset();

})

feedbackBtn.addEventListener('click', () => {
    adminModal.style.display = "block";
    submitPassword.addEventListener('click', () => {
        console.log(adminPasswordInput.value)
        if (adminPasswordInput.value == "admin123") {
            passwordMessage.innerHTML = "Success";
            passwordMessage.style.color = "green";
            setTimeout(() => window.location.href = "./reviews.html", 1000)
        }
        else {
            passwordMessage.innerHTML = "Incorrect password";
            passwordMessage.style.color = "red";
            setTimeout(() => adminModal.style.display = "none", 1000)
        }
    })

})

closeModal.addEventListener('click', () => {
    adminModal.style.display = "none";
})
