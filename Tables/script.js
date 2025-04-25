const tableBody = document.querySelector("tbody");
const sortButton = document.querySelector("#sortAverage");
const addButton = document.querySelector("#addStudent");


updateAllAverages()

function updateAllAverages() {
    for (let i = 0; i < tableBody.rows.length; i++) {
        calculateAvarage(tableBody.rows[i]);
    }
}

function calculateAvarage(row) {
    let sum = 0;
    for (let i = 1; i <= 3; i++) {
        sum += parseFloat(row.cells[i].innerHTML)
    }
    let avarage = (sum / 3).toFixed(1)
    let avarageCell = row.cells[4]
    let statusCell = row.cells[5]
    if (!avarageCell) {
        avarageCell = row.insertCell(4)
        statusCell = row.insertCell(5)
        avarageCell.innerHTML = avarage
        if (avarage >= 70) {
            statusCell.innerHTML = "&#9989; Pass"
        }
        else { statusCell.innerHTML = "&#10060; Fail" }
    }
}

addButton.addEventListener('click', () => {
    let name = prompt("Student name", '')
    if (!isNaN(name)) {
        alert("Oops! Please enter a name, not a number. ")
        name = prompt("Student name", '')
    }
    else if (!name) {
        alert("This field can’t be left blank — please enter a value.")
        name = prompt("Student name", '')
    }

    let math = promptForGrade("Math")
    let science = promptForGrade("Science")
    let history = promptForGrade("History")

    function promptForGrade(subject) {
        let value = ''
        while (!value || isNaN(value) || +value < 0 || +value > 100) {
            value = prompt(`${subject} grade`, 0)
            if (!value) {
                alert("This field can’t be left blank — please enter a value.")
            } else if (isNaN(value)) {
                alert("Oops! Please enter a grade — it should be a number.")
                value = ''
            }
            else if (+value < 0 || +value > 100) {
                alert("Grade should be a number between 0 and 100.")
                value = ''
            }
        }
        return value
    }

    const row = tableBody.insertRow(-1)
    const nameCell = row.insertCell(0)
    const mathCell = row.insertCell(1)
    const scienceCell = row.insertCell(2)
    const historyCell = row.insertCell(3)

    nameCell.innerHTML = name
    mathCell.innerHTML = math
    scienceCell.innerHTML = science
    historyCell.innerHTML = history
    calculateAvarage(row)
    
})

sortButton.addEventListener('click', () => {
    let tableRows = tableBody.querySelectorAll("tr");
    let tableRowsArr = Array.from(tableRows)
    tableRowsArr.sort((a, b) => {
        return +a.cells[4].innerHTML - +b.cells[4].innerHTML
    })

    tableBody.innerHTML = ""
    tableRowsArr.forEach((el) => {
        tableBody.appendChild(el)
    })
})