let userInput = document.querySelector("#userInput");
let searchBtn = document.querySelector("#searchButton");
let iframe = document.querySelector("#wikiIFrame");

searchBtn.addEventListener('click', searchFunction)

function searchFunction() {
    if (!userInput.value) {
        alert("Please, enter search article")
        return
    }
    iframe["src"] = `https://en.wikipedia.org/wiki/${encodeURIComponent(userInput.value)}`
}

userInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        searchFunction()
    }
})

