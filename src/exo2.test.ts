import { randomInt, randomBytes } from 'crypto'

import sortByDate from "./exo2";

interface Subject {
    id: number,
    name?: string,
    created_at?: string | Date,
}

interface Obj {
    [key: string]: Subject
}

const generateTestObj = (n: number) => {
    const testObj: Obj = {}
    for (let i = 0; i < n; i++) {
        const isoTime = new Date(randomInt(1691102965811, 1696102965811)).toISOString()
        testObj[isoTime] = {
            id: i,
            name: randomBytes(5).toString('hex')
        }
    }
    return testObj
}

describe('sortByDate', () => {
    it('should sort objects by date in ascending order', () => {
        const testObj = generateTestObj(4);
        console.log(testObj);
        const sorted = sortByDate(testObj);
        console.log(sorted);
    });

    it('should sort objects by date in descending order', () => {
        const testObj = generateTestObj(4);
        console.log(testObj);
        const sorted = sortByDate(testObj, true);
        console.log(sorted);
    });
});
