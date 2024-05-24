function calculateAverage(numbersArray) {
    if (!numbersArray) {
        return 'No numbers to calculate average'
    } else {
        let sum = 0;
        for (const number of numbersArray) {
            sum = sum + number;
        }
        return sum / numbersArray.length;
    }
}
// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
