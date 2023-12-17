class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  enqueue(data) {
    const new_node = new Node(data)

    this.length += 1
    if (this.head === null) {
      this.head = new_node
      this.tail = new_node
    } else {
      this.tail.next = new_node
      this.tail = new_node
    }

  }

  dequeue() {
    if (this.head === null) {
      return null
    } else {
      let head = this.head
      this.head  = this.head.next
      this.length -= 1
      
      if (this.head === null) {
        this.tail = null
      }
      return head.data
    }
  }

  peek() {
    if(this.head === null) {
      return null
    }

    return this.head.data
  }

}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

queue.dequeue()
queue.dequeue()

queue.enqueue(5)
console.log(queue.peek())
