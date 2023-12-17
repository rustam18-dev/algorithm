function palindrome(str) {
  str = String(str).toLowerCase().replace(" ", "");

  if (str.length <= 1) {
    return true
  }

  if (str[0] != str[str.length - 1]) {
    return false
  }

  return palindrome(str.substring(1, str.length - 1))
}

console.log(palindrome('racecar'))