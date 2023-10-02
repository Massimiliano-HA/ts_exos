import filterEvenNumbers from "./exo2_pdf";

describe('filterEvenNumbers function', () => {
    it('should filter and sort even numbers correctly', () => {
        const numbers1: number[] = [3, 6, 1, 8, 5, 2, 7, 4];
        const result1: number[] = filterEvenNumbers(numbers1);
        console.log("Result of Test 1:", result1);

        expect(result1).toEqual([2, 4, 6, 8]);

        const numbers2: number[] = [9, 12, 15, 18, 22, 27];
        const result2: number[] = filterEvenNumbers(numbers2);
        console.log("Result of Test 2:", result2);

        expect(result2).toEqual([12, 18, 22]);
    });

    it('should handle an empty input array', () => {
        const numbers: number[] = [];
        const result: number[] = filterEvenNumbers(numbers);
        console.log("Result of Empty Array Test:", result);

        expect(result).toEqual([]);
    });
});
