// Default Parameter
function howAreYou(mood = 'happy') {
  console.log(mood)
}
/*
howAreYou()
howAreYou("Soso")

let [x, y] = [1, 2]
console.log('1:', x, y)

let [x1, y1] = [1]
console.log('2:', x1, y1)

let [x2, y2 = 3] = [1]
console.log('3:', x2, y2)

let [x3 = 4, y3 = 5] = []
console.log('4:', x3, y3)
*/


const [{ prop: x1 = 10 }] = [{ prop: undefined }]
console.log('1:', x1)

const [{ prop: x2 = 10 } = {}] = []
console.log('2:', x2)
