let array = [1, 2, 3, 42, 5, 2]

// function sumArray(arr) {
//   if (arr.length === 0) {
//     return 0
//   }
//   let num = arr.splice(0, 1)[0]
//   return num + sumArray(arr)
// }

// console.log(sumArray(array))

// function sum(arr) {
//   if (arr.length === 0) {
//     return  0
//   }
//   return arr[0] + sum(arr.slice(1))
// }

// console.log(sum(array))


// function countingElements(arr) {
//   if (arr.length === 0) {
//     return 0
//   }

//   return 1 + countingElements(arr.slice(1))
// }

// console.log(countingElements(array))

// function maxNumber(arr) {
//   if (arr.length === 0) return 0
//   if (arr.length === 1) {
//     return arr[0]
//   }
  
//   if (arr[0] > maxNumber(arr.slice(1))) {
//     return arr[0]
//   }

//   return maxNumber(arr.slice(1))
// }

// console.log(maxNumber(array))

// const binarySearch = item => {
//   const recursion = (low, high) => {
//     if (low <= high) {
//       let mid = Math.floor((low + high) / 2)
//       let guess = array[mid]

//       if (guess === item)  return item

//       if (guess > item) {
//         return recursion(low, mid - 1)
//       } else {
//         return recursion(mid + 1, high)
//       }
//     }
//     return "нету такого элемента"
//   }
//    return recursion(0, array.length - 1);
// }

// console.log(binarySearch(1))
// for (let i = 0; i < 1000000; i++) {
//   array.push(Math.floor(Math.random() * 1000)); // измените 1000 на максимальное значение по вашему усмотрению
// }
// function quickSort(arr) {
//   if (arr.length < 2) return arr

//   let pivot = arr[0]
//   let less = []
//   let great = []

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < pivot) {
//       less.push(arr[i])
//     } else {
//       great.push(arr[i])
//     }
//   }

//   return quickSort(less).concat([pivot], quickSort(great))
// }

// console.log(quickSort(array))

D

