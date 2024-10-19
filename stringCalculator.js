// stringCalculator.js
function add(numbers) {
    if (!numbers) return 0;

    validateNumbers(numberArray);

    return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}


function validateNumbers(numberArray) {
    const negatives = numberArray.filter(num => parseInt(num, 10) < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
}

// Export the add function for testing purpose
module.exports = { add };