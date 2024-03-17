
function sumOfEncryptedInt(input: number[]): number {
    let sumOfAllEncryptedValues = 0;

    for (let value of input) {
        let numberOfDigits = findNumberOfDigits(value);
        let maxDigit = findMaxDigit(value);
        sumOfAllEncryptedValues += encryptValue(numberOfDigits, maxDigit);
    }
    return sumOfAllEncryptedValues;
};


function findNumberOfDigits(value: number): number {
    let numberOfDigits = 0;

    while (value > 0) {
        ++numberOfDigits;
        value = Math.floor(value / 10);
    }
    return numberOfDigits !== 0 ? numberOfDigits : 1;
}


function findMaxDigit(value: number): number {
    let maxDigit = 0;

    while (value > 0) {
        maxDigit = Math.max(maxDigit, value % 10);
        value = Math.floor(value / 10);
    }
    return maxDigit;
}

function encryptValue(numberOfDigits: number, maxDigit: number): number {
    let encryptedValue = 0;
    let digitPlace = 1;

    while (numberOfDigits-- > 0) {
        encryptedValue = encryptedValue + digitPlace * maxDigit;
        digitPlace *= 10;
    }
    return encryptedValue;
}
