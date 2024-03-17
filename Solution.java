
public class Solution {

    public int sumOfEncryptedInt(int[] input) {
        int sumOfAllEncryptedValues = 0;

        for (int value : input) {
            int numberOfDigits = findNumberOfDigits(value);
            int maxDigit = findMaxDigit(value);
            sumOfAllEncryptedValues += encryptValue(numberOfDigits, maxDigit);
        }
        return sumOfAllEncryptedValues;
    }

    private int findNumberOfDigits(int value) {
        int numberOfDigits = 0;

        while (value > 0) {
            ++numberOfDigits;
            value /= 10;
        }
        return numberOfDigits != 0 ? numberOfDigits : 1;
    }

    private int findMaxDigit(int value) {
        int maxDigit = 0;

        while (value > 0) {
            maxDigit = Math.max(maxDigit, value % 10);
            value /= 10;
        }
        return maxDigit;
    }

    private int encryptValue(int numberOfDigits, int maxDigit) {
        int encryptedValue = 0;
        int digitPlace = 1;

        while (numberOfDigits-- > 0) {
            encryptedValue = encryptedValue + digitPlace * maxDigit;
            digitPlace *= 10;
        }
        return encryptedValue;
    }
}
