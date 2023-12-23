// function mergesArrays(first, second) {
//     const result = [];

//     for(const item of first) {
//         result.push(item)
//     }

//     for(const item of second) {
//         result.push(item)
//     }

//     return result
// }

// const firstArray = [1, 3, 5, 6];
// const secondArray = [2, 56, 61, 2];

// let sum = 0;

// const sumOfArray = mergesArrays(firstArray, secondArray).forEach(item => {
//     if (item === undefined) {
//         return
//     }
//     return sum += item
// })

// console.log(sum)

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }

//   let originalString = 'Hello';
//   let reversedString = reverseString(originalString);

//   console.log(reversedString);

// let originalString = 'Hello, world!';
// let reversed = '';

// for (let char in originalString) {
//   reversed = reversed + char;
// }

// console.log(reversed)

// let number = [1, 4, 6, 8, 9 ];


// function isPrime(number) {

//   let notEasyNum = [];

//   for(let num of number) {
//     if (num <= 1) {
//       notEasyNum.push(num)
//     }

//     for (let i = 2; i <= num / 2; i++) {
//       if (num % i === 0) {
//         if(!notEasyNum.includes(num)) {
//           notEasyNum.push(num)
//         }
//       }
//     }
//   }

//   return notEasyNum;
// }

// for(let num of isPrime(number)) {
//   console.log(num + ' не являются простым числом')
// }

// for (let i = 1; i <= 100; i ++) {
//   console.log(i);
// }

// const numbers = [40, 1, 1];


// function addition(numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(`Сумма чисел: ${addition(numbers)}`, );

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// let number = 4;

// if (number <= 1) {
//   return console.log('не простое число');
// }

// for (let i = 2; i <= number / 2; i++) {
//   if (number % i === 0) {
//     return console.log('не простое число');
//   }
// }

// console.log('простое число')

// const myArray = [64, 34, 25, 12, 22, 11, 90];


// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - 1 - i; j++) {
//           if (arr[j] > arr[j + 1]) {
//               let temp = arr[j];
//               arr[j] = arr[j + 1];
//               arr[j + 1] = temp;
//           }
//       }
//   }
// }
// bubbleSort(myArray)

// function selectionSort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       const temp = arr[i];
//       arr[i] = arr[minIndex];
//       arr[minIndex] = temp;
//     }
//   }
// }

// selectionSort(myArray)


// console.log(myArray);


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const maxPropertyInArray = arr => {
//     let max = 0;

//     for(let i = 1; i < arr.length; i++) {
//       if (arr[i] > max) {
//         max = arr[i]
//       }
//     }

//     return max
// }

// console.log(maxPropertyInArray(arr))


// console.log(array.length - 1)

// const searchMethods = item => {
//   let s = 0;
//   let h = array.length - 1;  



//   for (let i = 0; s <= h; i++) {
//     let mid = Math.floor((s + h) / 2);
//     let guess = array[mid];
    
//     if (guess === item) {
//       return mid + 1; 
//     }

//     if (guess > item) {
//       h = mid - 1; 
//     } else {
//       s = mid + 1; 
//     }
//     console.log(`Step ${i + 1}: s=${s}, h=${h}, mid=${mid}, guess=${guess}`)
//   }
// }

// const array = [];

// for (let i = 1; i <= 100; i++) {
//   array.push({
//     property: i
//   })
// }

// const searchMethods = item => {
//   let s = 0;
//   let h = array.length - 1;  
//   for (let i = 0; s <= h; i++) {
//     let m = Math.floor((s + h) / 2);
//     let guess = array[m];

//     if (guess.property === item) {
//       return m + 1; 
//     }

//     if (guess.property > item) {
//       h = m - 1; 
//     } else {
//       s = m + 1; 
//     }
//     console.log(`Step ${i + 1}: s=${s}, h=${h}, m=${m}, guess=${guess.property}, item=${item}`)
//   }

//   return false; 
// };

// console.log(searchMethods(56));
// имютибл стринг

// const array = [];

// for (let i = 100; i >= 0; i--) {
//   array.push(i)
// }

// const searchMethods = item => {
//   let s = 0;
//   let h = array.length - 1;  
//   let mid = Math.floor((s + h) / 2);



//   for (let i = 0; s >= h; i++) {
//     let guess = array[mid];
  
//     if (guess === item) return mid; 

//     if (guess < item) {
//       h = mid - 1; 
//     } else {
//       s = mid + 1; 
//     }
//     console.log(`Step ${i + 1}: s=${s}, h=${h}, mid=${mid}, guess=${guess}`)

//     return false
//   }
// }

// console.log(searchMethods(51));

// const array = [];

// for (let i = 0; i <= 40000000; i++) {
//   array.push(i)
// }

// const binarySearch = item => {
//   let s = 0;
//   let h = array.length - 1;

//   for (let i = 0; s <= h; i++) {
//     let m = Math.floor((s + h) / 2);
//     let guess = array[m];

//     if (guess === item)  return item 
//     if (guess > item) {
//       h = m - 1; 
//     } else {
//       s = m + 1; 
//     }
//     console.log(`Шаг ${i + 1}, ${guess}`)
//   }

//   return false; 
// };

// console.log(binarySearch(500000000000))



// const array = [];

// for (let i = 1; i <= 100; i++) {
//   array.push(i)
// }

// const binaryAliceSearch = (item, low, high) => {
 
//   if (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     let guess = array[mid];

//     if (guess === item) return mid; 

//     if (guess > item) {
//       high = mid - 1
//       return binaryAliceSearch(item, high, mid - 1)
//     } else {
//       low = mid + 1
//       return binaryAliceSearch(item, low, mid + 1)
//     }
//   }
 
//   return -1; 
// };

// console.log(binaryAliceSearch(25, 0, array.length - 1))

// const array = [];

// for (let i = 1; i <= 400000; i++) {
//   array.push(i)
// }

// const binarySearch = item => {
//   const recursion = (low, high) => {
//     if (low <= high) {
//       let mid = Math.floor((low + high) / 2)
//       let guess = array[mid]

//       if (guess === item)  return mid

//       if (guess > item) {
//         return recursion(low, mid - 1)
//       } else {
//         return recursion(mid + 1, high)
//       }
//     }
//     return -1
//   }
//    return recursion(0, array.length - 1);
// }

// console.log(binarySearch(28))

// const array = [1, 2, 3, 3, 3, 3, 4, 5, 5, 5, 5, 5, 6, 7, 8, 9, 10];

// const search = query => {
//   let counter = 0
//   for (item of array) {
//     if (item === query) {
//       counter++
//     }
//   }
//   return counter
// }

// console.log(search(3))


// const array = [1, 2, 3, 3, 3, 3, 3, 3, 4, 5, 5,];

// const binarySearchLeft = query => {
//   let low = 0;
//   let high = array.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (array[mid] === query) {
//       high = mid - 1; 
//     } else if (array[mid] < query) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return low; 
// }

// const binarySearchRight = query => {
//   let low = 0;
//   let high = array.length - 1;

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (array[mid] === query) {
//       low = mid + 1; 
//     } else if (array[mid] < query) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return high;
// }

// console.log([binarySearchLeft(3), binarySearchRight(3)])

// const findRotationCount = item => {
//   let low = 0;
//   let high = array.length - 1; 

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2); 
//     let guess = array[mid]; 

//     if (mid < array.length - 1 && guess > array[mid + 1]) {
//       return mid + 1;
//     }

//     if (array[low] <= guess) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   return 0;
// };

// const array = [10, 20, 30, 40, 0, 50, 60, 70, 100];
// console.log("Минимальное количество вращений:", findRotationCount(array));



// const find_first_indexes = query => {
//   let low = 0
//   let high = array.length - 1

//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2)
//     let guess = array[mid]

//     if (guess === query) return mid

//     if (guess < query) {

//     }
//   }
// }


// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }

//   peek() {
//     if(this.head === null) {
//       return null
//     } else {
//       return this.head.data
//     }
//   }
// }

// class LinkedList {
//   constructor(key) {
//     this.key = key;
//     this.left = null;
//     this.left = null;
//   }

  
// }

// const linkedListInstance = new LinkedList(50);

// linkedListInstance.left = new LinkedList(30)
// linkedListInstance.right = new LinkedList(70)
// linkedListInstance.left.left = new LinkedList(20)
// linkedListInstance.left.right = new LinkedList(40)
// linkedListInstance.right.left = new LinkedList(60)
// linkedListInstance.right.right = new LinkedList(80)
// console.log(linkedListInstance)


// function sum_num(n) {
//   if (n === 1) {
//     return 1
//   }
//   return n + sum_num(n - 1)
// }

// console.log(sum_num(10))

// function factorial(n) {
//   if (n === 1) return 1
//   if (n === 0) return 1

//   return n * factorial(n - 1)
// }

// console.log(factorial(5))


// function palindrome(str) {
//   let check = '';
//   for (let i = str.length - 1; i >= 0; --i) {
//     check = str[i] + check
//   }
//   return str == check;
// }


// console.log(palindrome('racecar'))

// function palindrome(str) {
//   str = String(str).toLowerCase().replace(" ", "");

//   if (str.length <= 1) {
//     return true
//   }

//   if (str[0] != str[str.length - 1]) {
//     return false
//   }

//   return palindrome(str.substring(1, str.length - 1))
// }

// console.log(palindrome('racecar'))


// class Node {
//   constructor(data) {
//     this.data = data
//     this.next = null
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }

//   enqueue(data) {
//     const new_node = new Node(data)

//     this.length += 1
//     if (this.head === null) {
//       this.head = new_node
//       this.tail = new_node
//     } else {
//       this.tail.next = new_node
//       this.tail = new_node
//     }

//   }

//   dequeue() {
//     if (this.head === null) {
//       return null
//     } else {
//       let head = this.head
//       this.head  = this.head.next
//       this.length -= 1
      
//       if (this.head === null) {
//         this.tail = null
//       }
//       return head.data
//     }
//   }

//   peek() {
//     if(this.head === null) {
//       return null
//     }

//     return this.head.data
//   }

// }

// const queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)

// queue.dequeue()
// queue.dequeue()

// queue.enqueue(5)
// console.log(queue.peek())



// const array = [10, 12, 14, 3, 5]

// const findSmallestIndex = arr => {
//   let smallest = arr[0]
//   let smallest_index = 0
  
//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i]
//       smallest_index = i
//     }
//   }
//   return smallest_index
// }

// const selectionSort = arr => {
//   let newArr = []

//   for(let i = 0; 0 < arr.length; i++) {
//     const smallest_idx = findSmallestIndex(arr)
//     let temp = arr.splice(smallest_idx, 1)
//     newArr.push(temp[0])
//   }
//   return newArr
// }

// console.log(selectionSort(array))

// const array = [12, 2, 5, 1, 6, 9]

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr
// }

// console.log(bubbleSort(array))

// for (var i = 0; i < 10; i++) { 
//     setTimeout(function() { 
//         console.log(i); 
//     }, 1000); 
// }

// new Promise((resolve, reject) => reject())
//         .catch(() => 1)
//         .then(() => { throw new Error(3) })
//         .catch(() => 4)
//         .then((a) => console.log(a))

// let req = {
//     username: "exampleUser",
//     password: "examplePassword"
//   };
// const { username, password } = req;
// console.log(username, password)

// console.log([].reduce(() => { console.log('test'); return 2 }, 0))

// function createVal(){
//     return Math.random()
//   }
  
// function fun(val =  createVal()) {}
  
// console.log(fun())
//  console.log( fun(5))

// function a() { console.log(this) }
// a.bind(1)()

try {
    require('fs').readdir('./', (err, res) => {
      throw new Error('test');
    });
  } catch(e) {
    console.log('error')
  }
  