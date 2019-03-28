const userInput = document.querySelector(".user-input")

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
    return matches
}

userInput.addEventListener("input", function () {
    updateInputValue()
})