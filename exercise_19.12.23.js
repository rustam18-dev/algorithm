// class Node {
//   constructor(data) {
//     this.data = data
//     this.next = null
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null
//     this.tail = null
//     this.length = 0
//   }

//   enqueue(data) {
//     const new_node = new Node(data)

//     this.length += 1
//     if (this.head === null) {
//       this.head = new_node
//       this.tail = new_node
//     } else {
//       this.tail.next = new_node
//       this.tail = new_node
//     }

//   }

//   dequeue() {
//     if (this.head === null) {
//       return null
//     } else {
//       let head = this.head
//       this.head  = this.head.next
//       this.length -= 1

//       if (this.head === null) {
//         this.tail = null
//       }
//       return head.data
//     }
//   }

//   peek() {
//     if(this.head === null) {
//       return null
//     }

//     return this.head.data
//   }

//   print_all() {
//     let current = this.head
//     while(current !== null) {
//       console.log(current.data)
//       current = current.next
//     }
//   }

//   reverse() {
//     let prev = null
//     let current = this.head
//     this.tail = current

//     while(current !== null) {
//       let next_node = current.next
//       current.next = prev
//       prev = current
//       console.log(prev)
//       current = next_node
//     }

//     this.head = prev
//   }


// }

// const queue = new Queue()

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)

// console.log(queue.print_all())
// queue.reverse()
// console.log(queue.print_all())

// class TreeNode {
//     constructor(key, data) {
//       this.key = key;
//       this.left = null;
//       this.right = null;

//       this.data = data;

//       this.parent = null
//     }


//  }
// const root = new TreeNode(3, 'A')
// root.left = new TreeNode(4, 'B')
// root.right = new TreeNode(5, 'C')

// root.left.left = new TreeNode(6, 'D')
// root.right.left = new TreeNode(7, 'E')
// root.right.right = new TreeNode(8, 'F')

// left, root, right
// let tree_tuple = [[6, 4, null], 3, [7, 5, 8]]

// function parse_tuple_tree(data) {
//     if (data.length === 3) {
//         let node = new TreeNode(data[1])
//         node.left = parse_tuple_tree(data[0])
//         node.right = parse_tuple_tree(data[2])
//     } else if (data === null) {
//         node = null
//     } else {
//         node = new TreeNode(data)
//     }

//     return node
// }
// let tree = parse_tuple_tree(tree_tuple)
// console.log(tree.key)

class TreeNode {
  constructor(key, data) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.data = data;
    this.parent = null;
  }
}

// let tree_tuple = [[6, 4, null], 3, [7, 5, 8]];
let tree_tuple = [[1, 3, null], 2, [[null, 3, 4], 5, [6, 7, 8]]];

// function parse_tuple_tree(data) {
//     if (Array.isArray(data) && data.length === 3) {
//         let node = new TreeNode(data[1]);
//         node.left = parse_tuple_tree(data[0]);
//         node.right = parse_tuple_tree(data[2]);
//         return node;
//     } else if (data === null) {
//         return null;
//     } else {
//         return new TreeNode(data);
//     }
// }

// function tree_to_tuple(node) {
//   if (node === null) {
//     return null
//   }

//   if (node.left === null && node.right === null) {
//     return node.key
//   }

//   let left = tree_to_tuple(node.left)
//   let right = tree_to_tuple(node.right)
//   return [left, node.key, right]
// }

// let tree = tree_to_tuple(tree_tuple);
// console.log(tree);

let small_tree_root = [[null, 4, 1], 6, 8]
function traverse_preorder(node) {
  if(node === null) {
    return
  }

  console.log(node.key)
  traverse_preorder(node.left)
  traverse_preorder(node.right)
}

console.log(traverse_preorder(small_tree_root))