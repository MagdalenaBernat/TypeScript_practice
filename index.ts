export const myFunc = (a: number, b: number, isAdult: boolean) => {
    if (isAdult) return a - b;

    return a + b
}

let age = 10
myFunc(5, 2, true)
