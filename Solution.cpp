
#include <vector>
#include <algorithm>
using namespace std;

class Solution {

public:
    int sumOfEncryptedInt(const vector<int>& input) const {
        int sumOfAllEncryptedValues = 0;

        for (const auto& value : input) {
            int numberOfDigits = findNumberOfDigits(value);
            int maxDigit = findMaxDigit(value);
            sumOfAllEncryptedValues += encryptValue(numberOfDigits, maxDigit);
        }
        return sumOfAllEncryptedValues;
    }

private:
    int findNumberOfDigits(int value) const {
        int numberOfDigits = 0;

        while (value > 0) {
            ++numberOfDigits;
            value /= 10;
        }
        return numberOfDigits != 0 ? numberOfDigits : 1;
    }

    int findMaxDigit(int value) const {
        int maxDigit = 0;

        while (value > 0) {
            maxDigit = max(maxDigit, value % 10);
            value /= 10;
        }
        return maxDigit;
    }

    int encryptValue(int numberOfDigits, int maxDigit) const {
        int encryptedValue = 0;
        int digitPlace = 1;

        while (numberOfDigits-- > 0) {
            encryptedValue = encryptedValue + digitPlace * maxDigit;
            digitPlace *= 10;
        }
        return encryptedValue;
    }
};
