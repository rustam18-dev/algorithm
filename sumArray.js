let array = [2, 4, 6]

function sumArray(arr) {
  if (arr.length === 0) {
    return 0
  }
  let num = arr.splice(0, 1)[0]
  return num + sumArray(arr)
}

function sum(arr) {
  if (arr.length === 0) {
    return  0
  }
  return arr[0] + sum(arr.slice(1))
}

console.log(sum(array))

// console.log(sumArray(array))
