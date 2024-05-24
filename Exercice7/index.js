function convertToBinary() {
    const valueToConvert = document.getElementById("decimalInput").value;

    if (!isNaN(valueToConvert)) {
        let value = parseInt(valueToConvert);
        let convertedValue = "";
        
        while (value > 0) {
            convertedValue = (value % 2) + convertedValue;
            value = Math.floor(value / 2);
        }

        if (convertedValue === "") {
            convertedValue = "0";
        }
    
        document.getElementById("binaryResult").textContent = convertedValue;
    } else {
        document.getElementById("binaryResult").textContent = ""
    }
}