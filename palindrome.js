// function palindrome(str) {
//   str = String(str).toLowerCase().replace(" ", "");
//
//   if (str.length <= 1) {
//     return true
//   }
//
//   if (str[0] != str[str.length - 1]) {
//     return false
//   }
//
//   return palindrome(str.substring(1, str.length - 1))
// }
//
// console.log(palindrome('racecar'))

// const isPalindrome = function(x) {
//   const convertToPositiveNumber =  Math.abs(x)
//   const str = convertToPositiveNumber.toString()
//
//   if (str.length === 1) {
//     return true
//   }
//
//   if (str[0] === str[str.length - 1]) {
//     return  isPalindrome(str.substring(0, str[str.length - 1]))
//   }
//
//   return false
// }
// console.log(isPalindrome(-123212))

const isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  let temp = x;
  let reverse = 0;

  while (temp !== 0) {
    const remainder = temp % 10;
    reverse = reverse * 10 + remainder;
    temp = Math.floor(temp / 10);
  }

  return reverse === x;
};
console.log(isPalindrome(1211))

