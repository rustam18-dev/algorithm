class Node {
  constructor(data) {
    this.data = data
    this.prev = null
  }
}

class Stack {
  constructor() {
    this.head = null
    this.length = 0
  }

  push(data) {
    const new_node = new Node(data)
    this.length += 1

    if (this.head === null) {
      this.head = new_node
    } else {
      new_node.prev = this.head
      this.head = new_node
    }
  }

  pop() {
    if (this.head === null) {
      return null
    } else {
      let head = this.head
      this.head = this.head.prev
      this.length -= 1
      return this.head
    }
  }

  peek() {
    if(this.head === null) {
      return null
    }

    return this.head.data
  }

}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)

stack.pop()
stack.pop()
stack.pop()

console.log(stack.peek())