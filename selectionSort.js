const array = [10, 12, 14, 3, 5]

const findSmallestIndex = arr => {
  let smallest = arr[0]
  let smallest_index = 0
  
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i]
      smallest_index = i
    }
  }
  return smallest_index
}

const selectionSort = arr => {
  let newArr = []

  for(let i = 0; 0 < arr.length; i++) {
    const smallest_idx = findSmallestIndex(arr)
    let temp = arr.splice(smallest_idx, 1)
    newArr.push(temp[0])
  }
  return newArr
}

console.log(selectionSort(array))