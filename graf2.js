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
graph['D'] = ['B', 'F', 'G']
graph['B'] = ['A', 'D', 'E']
graph['C'] = ['A', 'F', 'H']
graph['A'] = ['C', 'B']
graph['E'] = ['B', 'G']
graph['G'] = ['E', 'D', 'F', 'H']
graph['H'] = ['G', 'C']
graph['F'] = ['D', 'G', 'C']

function person_is_seller(name) {
  return name === 'D'
}

function search(name) {
  const search_queue = []
  search_queue.push(...graph[name])
  console.log(search_queue)
  const searched = []
  while (search_queue.length > 0) {
    const person = search_queue.shift()
    if (!searched.includes(person)) {
      if (person_is_seller(person)) {
        console.log('Нашёл', person)
        return true
      } else {
        search_queue.push(...graph[person])
        console.log(search_queue)
        searched.push(person)
      }
    }
  }
  console.log("Не нашёл!")
  return false
}
search('D')
