const userInput = document.querySelector(".user-input")
const select = document.getElementsByTagName("select")[0];

function createOption(arr) {
    for (b = 0; b < arr.length; b++) {
        const options = document.createElement("option");
        options.value = arr[b]
        options.textContent = arr[b]
        select.appendChild(options)
    }
}

function updateInputValue() {
    const userInputValue = userInput.value;
    console.log("The input value is:", userInputValue)
    searchArr(userInputValue)
}

function searchArr(userInputValue) {
    const arr = ["Apple", "Asparagus", "Cassava", "Cherry", "Grape", "Indian pea", "Kidney bean or common bean", "Lima bean or butter bean", "Lemon", "Mango tree", "Nutmeg", "Onions and garlic", "Potato"]
    const matches = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].includes(userInputValue)) {
            matches.push(arr[i])
        }
    }
    console.log("Matched:", matches)
    createOption(matches)
    return matches
}

userInput.addEventListener("input", function () {
    updateInputValue()
})