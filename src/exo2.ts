interface Subject {
    id: number,
    name?: string,
    created_at?: string | Date,
}

interface Obj {
    [key: string]: Subject
}

export default function sortByDate(obj: Obj, desc = false): Subject[] {
    const result: Subject[] = [];
    const keys = Object.keys(obj);
    keys.sort((a, b) => {
        if (desc) {
            return new Date(b).getTime() - new Date(a).getTime()
        }
        return new Date(a).getTime() - new Date(b).getTime()
    });
    keys.forEach(key => {
        result.push(obj[key])
    })
    
    return result
}
