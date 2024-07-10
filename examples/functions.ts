function addNumbers(a: number, b: number) {
    return a + b
}

export default addNumbers;

export const addStrings = (a:string, b: string = ''): string => {
    return `${a} ${b}`
}

export const format = (title: string, param: string | number): string => {
    return `${title} ${param}`
}

export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param))
}

// export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(' ')}`
}