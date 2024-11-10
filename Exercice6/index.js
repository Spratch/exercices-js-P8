let input = document.getElementById("display");

function appendToDisplay(valueToDisplay) {
    input.value += valueToDisplay;
}
function clearDisplay() {
    input.value = "";
}
function calculateResult() {
    if (!isFinite(eval(input.value))) {
        input.value = "Division by zero is not allowed";
    } else {
        input.value = eval(input.value);
    }
}