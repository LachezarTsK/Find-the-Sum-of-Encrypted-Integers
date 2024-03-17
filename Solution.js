
/**
 * @param {number[]} input
 * @return {number}
 */
var sumOfEncryptedInt = function (input) {
    let sumOfAllEncryptedValues = 0;
    for (let value of input) {
        let numberOfDigits = findNumberOfDigits(value);
        let maxDigit = findMaxDigit(value);
        sumOfAllEncryptedValues += encryptValue(numberOfDigits, maxDigit);
    }
    return sumOfAllEncryptedValues;
};

/**
 * @param {number} value
 * @return {number}
 */
function findNumberOfDigits(value) {
    let numberOfDigits = 0;

    while (value > 0) {
        ++numberOfDigits;
        value = Math.floor(value / 10);
    }
    return numberOfDigits !== 0 ? numberOfDigits : 1;
}

/**
 * @param {number} value
 * @return {number}
 */
function findMaxDigit(value) {
    let maxDigit = 0;

    while (value > 0) {
        maxDigit = Math.max(maxDigit, value % 10);
        value = Math.floor(value / 10);
    }
    return maxDigit;
}

/**
 * @param {number} numberOfDigits
 * @param {number} maxDigit
 * @return {number}
 */
function encryptValue(numberOfDigits, maxDigit) {
    let encryptedValue = 0;
    let digitPlace = 1;

    while (numberOfDigits-- > 0) {
        encryptedValue = encryptedValue + digitPlace * maxDigit;
        digitPlace *= 10;
    }
    return encryptedValue;
}
