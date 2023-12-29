import { getUniqueKey, isNumber, roundNumber } from "../common";

describe("utils/common", () => {
  describe("getUniqueKey()", () => {
    test("should always return a new and unique 'UUID' as key", () => {
      const uniqueKeys = Array.from({ length: 10 }, () => getUniqueKey());

      uniqueKeys.forEach((key) => {
        // Key should be of type 'string'.
        expectTypeOf(key).toBeString();

        // Key should be of version 'v4', i.e. 'GUID'.
        expect(key.length).toBeGreaterThanOrEqual(35);
      });

      // All keys should be unique, i.e. no duplicates.
      const { size = 0 } = new Set(uniqueKeys);
      expect(size).toEqual(uniqueKeys.length);
    });
  });

  describe("isNumber()", () => {
    test("should return 'false' if the 'value' is not a number", () => {
      const invalidNumbers = [undefined, null, false, NaN, "", "N", "0"];

      invalidNumbers.forEach((value) => {
        expect(isNumber(value)).toBeFalsy();
      });
    });

    test("should return 'true' if the given 'value' is a number", () => {
      const validNumbers = [0, -10, parseInt("100"), parseFloat("1000.0")];

      validNumbers.forEach((value) => {
        expect(isNumber(value)).toBeTruthy();
      });
    });
  });

  describe("roundNumber()", () => {
    test("should return '0' if the given 'value' is not a 'number'", () => {
      expect(roundNumber()).toEqual(0);
      expect(roundNumber(undefined, 1)).toEqual(0);
      expect(roundNumber(parseInt("N"), 2)).toEqual(0);
    });

    test("should return the given 'value' if the no. of decimal points is <= required 'decimals'", () => {
      expect(roundNumber(9, 1)).toEqual(9);
      expect(roundNumber(9.8, 2)).toEqual(9.8);
      expect(roundNumber(-10.001, 3)).toEqual(-10.001);
    });

    test("should round the 'value' up / down if the no. of decimal points is > required 'decimals'", () => {
      expect(roundNumber(10.53, 0)).toEqual(11);
      expect(roundNumber(10.66, 1)).toEqual(10.7);
      expect(roundNumber(-9.8765, 2)).toEqual(-9.88);
    });

    test("should round the 'value' up / down to '0' decimal points when 'decimals' provided is -ve", () => {
      expect(roundNumber(10.0, -1)).toEqual(10);
      expect(roundNumber(10.76, -2)).toEqual(11);
      expect(roundNumber(-9.8754, -3)).toEqual(-10);
    });

    test("should round the 'value' up / down to '2' decimal points when 'decimals' is not provided", () => {
      expect(roundNumber(10.0)).toEqual(10);
      expect(roundNumber(10.76)).toEqual(10.76);
      expect(roundNumber(-9.8754)).toEqual(-9.88);
    });
  });
});
