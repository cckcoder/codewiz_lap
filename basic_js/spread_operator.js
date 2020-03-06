function add(x, y, z) {
  return x + y + z
}

const sum1 = add(1, 2, 3)
console.log('1| ', sum1)

const number = [2, 4, 6]
const sum2 = add(number[0], number[1], number[2])
console.log('Without Spread ', sum2)

const sum3 = add(...number)
console.log('With Spread ', sum3)

const arr = [4, 5, 6]
const append = [1, 2, 3, ...arr]
console.log(append)

// Objece
let obj1 = { foo: 'bar', x: 42 }
let obj2 = { foo: 'baz', y: 57 }

let cloneOjb = {...obj1, ...obj2}
console.log(cloneOjb)

let { foo, x, y } = obj1
console.log(foo, x, y)

let { foo:ff, x:xx, y:yy } = obj1
console.log(ff, xx, yy)
