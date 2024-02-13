
const items = [
  [1500, 1],
  [3000, 4],
  [2000, 3],
]
function knapsack(items, capacity) {
  let table = new Array(items.length + 1).fill()
    .map(() => new Array(capacity + 1).fill(0))

  for (let i = 1; i <= items.length; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (items[i - 1][1] > w) {
        table[i][w] = table[i - 1][w]
      } else {
        table[i][w] = Math.max(table[i - 1][w], items[i - 1][0] + table[i - 1][w - items[i - 1][1]]);
      }
    }
  }

  return table

}

console.log(knapsack(items, 4))