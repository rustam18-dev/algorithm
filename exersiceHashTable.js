const MAX_HASH_SIZE = 4096
let list = []

for (let i = 0; i < MAX_HASH_SIZE; i++) {
  list.push(null)
}

function get_index(list, a_string) {
  let result = 0;

  for (let i = 0; i < a_string.length; i++) {
    let a_number = a_string.charCodeAt(i);
    result += a_number;
  }

  return result % list.length;
}


class HashTable {
  constructor() {
    this.data_list = []
    for (let i = 0; i < 4096; i++) {
      this.data_list.push(null)
    }
  }

  insert(key, value) {
    let idx = get_index(this.data_list, 'Hasan')
    this.data_list[idx] = value
  }

  find(key) {
    let idx = get_index(this.data_list, key)
    let kv = this.data_list[idx]

    if (kv === null) {
      return null
    }
    console.log('Вы нашли')
    return kv
  }

  update(key, value) {
    let idx = get_index(this.data_list, 'Hasan')
    this.data_list[idx] = value
  }

  list_all() {
   console.log(this.data_list)
  }
}

const hashTable = new HashTable()

hashTable.insert('Hasan', '+992928887777')
hashTable.find('Hasan')
hashTable.list_all()





// console.log(get_index(data_list, 'Hasan') === 492)
// console.log(get_index(data_list, 'Something else') === 1399)


