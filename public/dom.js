const userInput = document.querySelector(".user-input")
const datalist = document.querySelector("#json-datalist");

function createOption(arr) {
    for (b = 0; b < arr.length; b++) {
        const options = document.createElement("option");
        options.value = arr[b]
        options.textContent = arr[b]
        datalist.appendChild(options)
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

const plantCall  = () => {
    const plantRequest = new XMLHttpRequest();
    let plantUrl = "/query" + value;

    plantRequest.onreadystatechange = function() {
        if (plantRequest.readyState === 4 && plantRequest.status === 200) {
            
        }
    }
}