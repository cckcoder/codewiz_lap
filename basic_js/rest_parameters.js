function howManyArgs(...args) {
  console.log(args.length)
}

howManyArgs(1)
howManyArgs(1, 3, 5)

function multiple(multiple, ...arr) {
  for(var i=0; i < arr.length; i++) {
    arr[i] *= multiple
  }
  console.log(arr)
}

multiple(4, 70, 80, 250)
