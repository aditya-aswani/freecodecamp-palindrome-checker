const checkBtn = document.getElementById("check-btn");

checkBtn.addEventListener("click", () => {
    const inputText = document.getElementById("text-input").value;

    checkIfPalindrome(inputText);
});

const checkIfPalindrome = (text) => {
    console.log(text);
}