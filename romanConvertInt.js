const romanConvertInt = (s) => {
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0

  for (let i = 0;  i < s.length; i++) {
    let current = romanNumerals[s[i]]
    let next = romanNumerals[s[i + 1]]

    if (next > current) {
      result += (next - current)
      i++
    } else {
      result += current
    }
  }

  return console.log(result)
}

romanConvertInt('MMMM')

