class User {
  constructor(username, name, email) {
    this.username = username
    this.name = name
    this.email = email
  }
}


class UserDatabase {
    constructor() {
      this.users = []
    }

  insert(user) {
    for(let i = 0; i < this.users.length; i++) {
      if (this.users[i].username === user.username) {
        return console.log(`Пользователь с таким ${this.users[i].username} именнем уже существует`)
      }
    }

    this.users.push(user)
  }
  find(username) {
    for (let i = 0; i <= this.users.length; i++) {
      if(this.users[i].username === username) {
        return this.users[i]
      }
    }
    console.log(`Такого пользователя не существует!`)
    return null
  }
  update(username, name, email) {
    const user = this.find(username)
    if(user === null) {
      return console.log('Такого пользователя не существует!')
    }

    user.username = username
    user.name = name || user.name
    user.email = email || user.email

    return console.log('Данные успешна обновлены!')
  }
  list_all() {
    this.bubbleSort()

     if (!this.users) {
      return console.log('В хранилище данных пусто!')
     }

     return console.log(this.users)
  }

  bubbleSort() {
    for(let i = 0; i < this.users.length; i++) {
      for(let j = 0; j < this.users.length - i - 1; j++) {
        if(this.users[j].username > this.users[j + 1].username) {
          let temp = this.users[j].username
          this.users[j].username = this.users[j + 1].username
          this.users[j + 1].username = temp
        }
      }
    }
    return this.users
  }
}
// const userDatabase = new UserDatabase();
// const newUser = new User('b_rustam19', 'рустам', 'rustam.radzabov8410@gmail.com');
// const oldUser = new User('a_nasim', 'насим', 'nasimov.nasim@gmail.com');

// userDatabase.insert(newUser);
// userDatabase.insert(oldUser);


// userDatabase.update('rustam19', 'РУСТАМ', 'radzabov.rustam8410@gmail.com')
// console.log(userDatabase.list_all())



class BinarySearchTree {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function insert(node, user) {
  if (node === null) {
    node = new BinarySearchTree(user.username, node);
  } else if (node.key > user.username) {
    node.left = insert(node.left, user);
    node.left.parent = node;
  } else if (node.key < user.username) {
    node.right = insert(node.right, user);
    node.right.parent = node;
  }

  return node;
}

function displayKeys(node, space = '\t', level = 0) {
  if (node === null) {  2
    console.log(space.repeat(level) + '∅');
    return;
  }
  if (node.left === null && node.right === null) {
    console.log(space.repeat(level) + node.key);
    return;
  }

  displayKeys(node.right, space, level + 1);
  console.log(space.repeat(level) + node.key);
  displayKeys(node.left, space, level + 1);
}

let root = null;

let hasan = new User('hasan', '123', '123123');
let aziza = new User('aziza', '123', '12330');
let anisa = new User('anisa', '123', '12330');
let mubin = new User('mubin', '123', '12330');
let behruz = new User('behruz', '123', '12330');
let jonibek = new User('jonibek', '123', '12330');
let zarina = new User('zarina', '123', '12330');
let users = [aziza, anisa, behruz, hasan, mubin, jonibek, zarina];

for (let user of users) {
  root = insert(root, user);
}

function inorder(node) {
  if (node !== null) {
    inorder(node.left);
    console.log(node.key);
    inorder(node.right);
  }
}

function search(root, target) {
  if (root === null || root.key === target) {
    return root;
  }

  if (root.key > target) {
    return search(root.left, target);
  }

  return search(root.right, target);
}

let result = search(root, 'jonibek');

if (result !== null) {
  console.log(`Найден пользователь: ${result.key}`);
} else {
  console.log('Пользователь не найден');
}

function update(node, key, user) {
  let target = search(node, key)
  if (target !== null) {
    target.name = user.name
    target.email = user.email
  }

  console.log(target.name, target.email)
}


function isBalanced(node) {
  if (node === null) {
    return [true, 0]
  }

  let [balancedLeft, heightLeft] = isBalanced(node.left)
  let [balancedRight, heightRight] = isBalanced(node.left)

  let balanced = balancedLeft && balancedRight && (Math.abs(heightLeft - heightRight) <= 1)

  let height = 1 + Math.max(heightLeft, heightRight)

  console.log([balanced, height])
  return [balanced, height]

}

function makeBalancedBST(data, low = 0, high = null, parent = null) {
  if (high === null) {
    high = data.length - 1
  }

  if (low > high) {
    return null
  }

  let mid = Math.floor((low + high) / 2)

  let key = data[mid].key
  let value = data[mid].value

  let root = new BinarySearchTree(key, value)
  root.parent = parent
  root.left = makeBalancedBST(data, low, mid - 1, root)
  root.right = makeBalancedBST(data, mid + 1, high, root)

  return root
}

// def list_all(node): # list all elements
// if node is None:
//   return []
// left = list_all(node.left)
// right = list_all(node.right)
// return (left + [node] + right)

function list_all(node) {
  if (node === null) {
    return []
  }

  let left = list_all(node.left)
  let right = list_all(node.right)
  return [left + [node] + right]
}

let users1 = list_all(root)
let new_hasan = new User('hasan', 'hasan hasanov', 'email')
update(root, "hasan", new_hasan)
// inorder(root)
displayKeys(root);

// isBalanced(root)
makeBalancedBST(root)

displayKeys(users1);
