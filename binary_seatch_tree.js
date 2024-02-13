// const array = []
//
// for (let i = 1; i <= 100000000; i++) {
//   array.push(i)
// }


// function binary_search(item) {
//   let start = 0
//   let high = array.length - 1
//
//   for(let i = 0; start <= high; i++) {
//     let mid = Math.floor((start + high) / 2)
//     let guess = array[mid]
//
//     if (guess === item) return console.log(array[mid])
//
//     if (guess > item) {
//       high = mid - 1
//     } else {
//       start = mid + 1
//     }
//     console.log( 'шаг ' + (i + 1) + '' + ': ' + guess)
//   }
//
//   return false
// }
//
// binary_search(200)



// const recursionBinarySearch = (item, start, high) => {
//   if (start <= high) {
//     let mid = Math.floor((start + high) / 2)
//     let guess = array[mid]
//
//     if (guess === item) return console.log(array[mid])
//
//     if (guess > item) {
//       high = mid - 1
//       return recursionBinarySearch(item, start, high)
//     } else {
//       start = mid + 1
//       return recursionBinarySearch(item, start, high)
//     }
//   }
//
//   return  -1
// }
//
// recursionBinarySearch(200, 0, array.length - 1)

const arr = [2, 4, 6, 1, 3, 5]



















