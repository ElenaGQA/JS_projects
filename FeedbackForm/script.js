const form = document.querySelector('#form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const rating = document.querySelector('#rating');
const submitBtn = document.querySelector('#submitBtn');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault();  // prevents default action of the form when submiting to clear the form and all data is lost
    let nameValue = name.value;
    let emailValue = email.value;
    let ratingValue = rating.value;
    if (nameValue == "" || emailValue == "" || ratingValue == "") {
        message.innerHTML = "Please, fill out all fields!";
        message.style.color = "red";
        message.style.textAlign = "center";
    }


    if (ratingValue == "excellent") {
        message.innerHTML = `Thank you for your feedback, ${nameValue}! You answered Excelent`;
        message.style.color = "darkgreen";
        message.style.textAlign = "center";
        form.reset();
    }
    else if (ratingValue == "good") {
        message.innerHTML = `Thank you for your feedback, ${nameValue}! You answered Good`;
        message.style.color = "blue";
        message.style.textAlign = "center";
        form.reset();

    }
    else if (ratingValue == "normal") {
        message.innerHTML = `Thank you for your feedback, ${nameValue}! You answered Normal`;
        message.style.color = "orange";
        message.style.textAlign = "center";
        form.reset();

    }
    else if (ratingValue == "poor") {
        message.innerHTML = `Thank you for your feedback, ${nameValue}! You answered Poor`;
        message.style.color = "red";
        message.style.textAlign = "center";
        form.reset();

    }

})

