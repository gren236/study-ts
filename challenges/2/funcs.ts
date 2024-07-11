function forEach<T>(items: T[], callback: (item: T) => void): void {
    items.reduce((acc, currentValue) => {
        callback(currentValue)
        return undefined
    }, undefined)
}

function map<T, K>(items: T[], callback: (item: T) => K): K[] {
    let result: K[] = []

    items.reduce((acc, currentValue) => {
        result.push(callback(currentValue))

        return undefined
    }, undefined)

    return result
}

function filter<T>(items: T[], callback: (item: T) => boolean): T[] {
    let result: T[] = []

    items.reduce((acc, currentValue) => {
        if (callback(currentValue)) {
            result.push(currentValue)
        }

        return undefined
    }, undefined)

    return result
}

// Tests
const items = [1, 2, 3]

// Test forEach
forEach(items, (v) => console.log(v))

// Test map
console.log(map(items, (v) => v * 10));

// Test filter
console.log(filter(items, (v) => v != 2));