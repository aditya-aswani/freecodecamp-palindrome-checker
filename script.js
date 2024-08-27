const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const outputText = document.getElementById("result");
const resultContainer = document.getElementById("result_container");

checkBtn.addEventListener("click", () => {
    const inputText = document.getElementById("text-input").value;

    checkIfPalindrome(inputText);
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        checkBtn.click();
    }
})

const checkIfPalindrome = (text) => {
    
    resultContainer.classList.add("hidden-element");
    outputText.innerText = "";

    if (text === "") {
        alert("Please input a value.")
    };

    if (text.length === 1) {

        outputText.innerText = text;
        resultContainer.classList.remove("hidden_element");

    } else {
        const cleanedString = text.replace(/[^a-zA-Z0-9]/g, "");

        if 
    }
}