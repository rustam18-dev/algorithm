let graph = {}
// graph['you'] = ['alice', 'bob', 'claire']
// // first depth
// graph['bob'] = ['anuj', 'peggy'];
// graph['alice'] = ['peggy']
// graph['claire'] = ['tommy', 'jonny']
// //second depth
// graph['anuj'] = []
// graph['peggy'] = []
// graph['tommy'] = []
// graph['jonny'] = []
graph['G'] = ['A']
graph['A'] = ['B', 'C', 'G']
graph['B'] = ['A', 'E', 'D']
graph['C'] = ['A', 'F']
graph['D'] = ['B', 'F']
graph['E'] = ['B', 'F']
graph['F'] = ['E', 'C', 'D']


function person_is_seller(name) {
  return name === 'D'
}

function search(name) {
  const search_queue = []
  search_queue.push(...graph[name])
  const searched = []
  while (search_queue.length > 0) {
    const person = search_queue.shift()
    if (!searched.includes(person)) {
      if (person_is_seller(person)) {
        console.log('Нашёл', person)
        return true
      } else {
        search_queue.push(...graph[person])
        searched.push(person)
      }
    }
  }
  console.log("Не нашёл!")
  return false
}
search('D')