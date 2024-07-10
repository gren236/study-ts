let userName: string = 'Jack'
let hasLoggedIn: boolean = true

userName += ' Smith'

console.log(userName)

let myNumber: number = 10

let myRegex: RegExp = /foo/

const names: string[] = userName.split(' ')
console.log(names)

const myValues: Array<number> = [1, 2, 3]
console.log(myValues)

// Objects
interface Person {
    last: string;
    first: string
}

const person: Person = {
    first: 'Jack',
    last: 'Smith',
}

const ids: Record<number, string> = {10: 'a', 20: 'b'}
ids[30] = 'c'

// Conditionals
if (ids[30] === 'c') {
    console.log(ids)
}

[1, 2, 3].forEach((v) => console.log(v))
