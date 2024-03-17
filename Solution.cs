
using System;

public class Solution
{
    public int SumOfEncryptedInt(int[] input)
    {
        int sumOfAllEncryptedValues = 0;

        foreach (int value in input)
        {
            int numberOfDigits = FindNumberOfDigits(value);
            int maxDigit = FindMaxDigit(value);
            sumOfAllEncryptedValues += EncryptValue(numberOfDigits, maxDigit);
        }
        return sumOfAllEncryptedValues;
    }

    private int FindNumberOfDigits(int value)
    {
        int numberOfDigits = 0;

        while (value > 0)
        {
            ++numberOfDigits;
            value /= 10;
        }
        return numberOfDigits != 0 ? numberOfDigits : 1;
    }

    private int FindMaxDigit(int value)
    {
        int maxDigit = 0;

        while (value > 0)
        {
            maxDigit = Math.Max(maxDigit, value % 10);
            value /= 10;
        }
        return maxDigit;
    }

    private int EncryptValue(int numberOfDigits, int maxDigit)
    {
        int encryptedValue = 0;
        int digitPlace = 1;

        while (numberOfDigits-- > 0)
        {
            encryptedValue = encryptedValue + digitPlace * maxDigit;
            digitPlace *= 10;
        }
        return encryptedValue;
    }
}
