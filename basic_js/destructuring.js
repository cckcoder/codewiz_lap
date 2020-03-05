// Array
const arr = [1, 2]
// Normal Way
const a = arr[0]
const b = arr[1]

// New Way
const [c, d] = arr 
console.log(d)

const oneToFive = [1, 2, 3, 4, 5]
const [a1, b1, c1] = oneToFive
console.log(c1)

const [a2, b2, ...rest] = oneToFive
console.log(rest)
