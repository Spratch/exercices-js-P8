function appendToDisplay(valueToDisplay) {
    document.getElementById("display").value += valueToDisplay;;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}
function calculateResult() {
    if (!isFinite(eval(document.getElementById("display").value))) {
        document.getElementById("display").value = "Division by zero is not allowed";
    } else {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    }
}