// stringCalculator.js
function add(numbers) {
    if (!numbers) return 0;

    const delimiters = getDelimiters(numbers);
    const numberArray = splitNumbers(numbers, delimiters);
    validateNumbers(numberArray);

    return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
}

// Know Delimiters in string
function getDelimiters(numbers) {
    const customDelimiterMatch = numbers.match(/\/\/(.*?)\n/);
    if (customDelimiterMatch) {
        const delimiterString = customDelimiterMatch[1];
        // This will escape special regex characters in delimiters
        const escapedDelimiters = delimiterString.split(/[\[\]]+/).filter(Boolean).map(delimiter => delimiter.trim().replace(/[-\/\\^$.*+?()[\]{}|]/g, '\\$&'));
        return escapedDelimiters;
    }
    return [',', '\n']; 
}

function splitNumbers(numbers, delimiters) {
    const cleanNumbers = numbers.replace(/\/\/.*\n/, ''); // Remove custom delimiter line
    const regex = new RegExp(delimiters.join('|'), 'g'); // Create regex from delimiters
    return cleanNumbers.split(regex)
        .filter(num => !isNaN(num) && num.trim() !== ''); // Remove non-numeric values
}

function validateNumbers(numberArray) {
    const negatives = numberArray.filter(num => parseInt(num, 10) < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
}

// Export the add function for testing purpose
module.exports = { add };