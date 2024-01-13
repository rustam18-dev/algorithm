let graph = {}
graph['you'] = ['alice', 'bob', 'claire']
// first depth
// graph['bob'] = ['anuj', 'peggy1'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy']
graph['claire'] = ['tommy', 'jonny']
//second depth
graph['anuj'] = []
graph['peggy'] = []
graph['tommy'] = []
graph['jonny'] = []
console.log(Object.keys(graph['bob']))
// function person_is_seller(name) {
//   return name[0] === 't2'
// }
//
// function search(name) {
//   const search_queue = []
//   search_queue.push(...graph[name])
//   const searched = []
//   while (search_queue.length > 0) {
//     const person = search_queue.shift()
//     if (!searched.includes(person)) {
//       if (person_is_seller(person)) {
//         console.log(person + " продовец манго!")
//         return true
//       } else {
//         search_queue.push(...graph[person])
//         console.log(search_queue)
//         searched.push(person)
//       }
//     }
//   }
//   console.log("Нету продавца манго!")
//   return false
// }
// search('you')

// a 8
// b 32
// c 3