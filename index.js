document.addEventListener("DOMContentLoaded", () => {
    const inputElement = document.getElementById("text-input");
    const buttonElement = document.getElementById("check-btn");
    const resultElement = document.getElementById("result");

    buttonElement.addEventListener("click", () => {
        const inputValue = inputElement.value.trim();
        if (!inputValue) {
            alert("Please input a value");
            return;
        }

        const processedValue = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        const reversedValue = processedValue.split("").reverse().join("");

        if (processedValue === reversedValue) {
            resultElement.textContent = `${inputValue} is a palindrome`;
            resultElement.style.color = "#4CAF50";
        } else {
            resultElement.textContent = `${inputValue} is not a palindrome`;
            resultElement.style.color = "#f44336";
        }
    });
});
