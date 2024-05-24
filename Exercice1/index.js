function pairNumbers(minNumber, maxNumber) {
    let result = "";
    for (let i = minNumber; i <= maxNumber; i++) {
        if (i % 2 === 0) {
            if (!result) {
                result = result + i;
            } else {
                result = result + "," + i;
            }
        }
        
    }
    return result;
}

export default pairNumbers
