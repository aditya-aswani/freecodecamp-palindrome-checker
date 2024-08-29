const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const outputText = document.getElementById("result");
const resultContainer = document.getElementById("result_container");
const outputTextPartTwo = document.getElementById("result_part_two");

const successOutput = " is a palindrome.";
const failOutput = " is not a palindrome.";

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
    const cleanedString = text.replace(/[^a-zA-Z0-9]/g, "");
    const cleanedStringLowerCased = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (cleanedString === "") {

        alert("Please input a value that contains letters or numbers.")
        input.value = "";

    };

    if (cleanedString.length === 1) {

        outputText.innerText = cleanedString;
        outputTextPartTwo.innerText = successOutput;
        resultContainer.classList.remove("hidden_element");
        input.value = "";

    } else {

        const halfCleanedStringLength = Math.floor(cleanedString.length / 2);
        const firstHalfOfCleanedString = cleanedStringLowerCased.slice(0,halfCleanedStringLength);

        // if there is an odd number of characters, the additional character will come in the second half
        let secondHalfOfCleanedString = cleanedStringLowerCased.slice(halfCleanedStringLength);

        if (cleanedString.length % 2 === 1) {
            secondHalfOfCleanedString = secondHalfOfCleanedString.slice(1);
        }

        const secondHalfReversed = secondHalfOfCleanedString.split('').reverse().join('');

        input.value = "";
        outputText.innerText = text;
        resultContainer.classList.remove("hidden_element");

        if (firstHalfOfCleanedString === secondHalfReversed) {
            outputTextPartTwo.innerText = successOutput;
        } else {
            outputTextPartTwo.innerText = failOutput;
        };
    };
}