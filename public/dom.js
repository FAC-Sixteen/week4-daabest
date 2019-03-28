const userInput = document.querySelector(".user-input")

function updateInputValue() {
    const userInputValue = userInput.value;
    console.log(userInputValue)
}

userInput.addEventListener("input", updateInputValue)