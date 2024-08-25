const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");

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
    if (text === "") {
        alert("Please input a value.")
    };

    if (text.length === 1) {

    }
}