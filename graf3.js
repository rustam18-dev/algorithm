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

graph['A'] = ['B']
graph['B'] = ['A', 'D']
graph['D'] = ['B']

graph['E'] = ['G']
graph['G'] = ['E', 'F', 'H']
graph['F'] = ['C', 'G', 'I']
graph['C'] = ['F']
graph['I'] = ['F', 'H']

function person_is_seller(name) {
  return name === 'D'
}

function findNearestWay(start, end) {
  const search_queue = []
  search_queue.push(...graph[start])

  const searched = {}

  while (search_queue.length > 0) {
    const person = search_queue.shift()
    if (!searched.includes(person)) {
      if (person === end) {
      console.log('Нашёл')
        return true
      } else {
        search_queue.push(...graph[person])
        console.log(person)
 
        searched['person'].push(person)
        searched.push(start)
      }
    }
  }
  console.log("Не нашёл!")
  return false
}
findNearestWay('A', 'D')



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
        console.log(search_queue)
        searched.push(person)
      }
    }
  }
  console.log("Не нашёл!")
  return false
}
// search('D')
