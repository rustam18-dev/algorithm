function multiplyPolynomials(poly1, poly2) {

  if (poly1.length === 0 || poly2.length === 0) {
    return []
  }
  const k = poly1.length + poly2.length - 1

  let result = []

  for (let i = 0; i < k; i++) {
    result.push(0)
  }

  // const result = new Array(poly1.length + poly2.length - 1).fill(0)
  //
  for (let i = 0; i < poly1.length; i++) {
    for (let j = 0; j < poly2.length; j++) {
      let k = i + j
      result[k] = result[k] + poly1[i] * poly2[j]
      // result[i + j] += poly1[i] * poly2[j];
    }
  }

  return result;
}

const poly1 = [1, 2, 3];
const poly2 = [4, 5, 6];

const result = multiplyPolynomials(poly1, poly2);
console.log(result);
// console.log(new Array(4096).fill(null))