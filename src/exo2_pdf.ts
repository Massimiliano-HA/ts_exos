export default function filterEvenNumbers(numbers : number[]){
    const evenNumbers = numbers.filter((number) => number % 2 === 0);

    evenNumbers.sort((a, b) => a - b);
    return evenNumbers;
}