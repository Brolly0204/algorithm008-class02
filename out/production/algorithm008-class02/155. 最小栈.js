// class MinStack {
//   constructor() {
//     this.stack = []
//     this.minStack = []
//   }

//   push(x) {
//     this.stack.push(x)
//     if (
//       this.minStack.length === 0 ||
//       x <= this.minStack[this.minStack.length - 1]
//     ) {
//       this.minStack.push(x)
//     }
//   }

//   pop() {
//     const val = this.stack.pop()
//     if (val === this.minStack[this.minStack.length - 1]) {
//       this.minStack.pop()
//     }
//   }

//   top() {
//     return this.stack[this.stack.length - 1]
//   }

//   getMin() {
//     return this.minStack[this.minStack.length - 1]
//   }
// }

// class MinStack {
//   constructor() {
//     this.stack = []
//     this.min = Number.MAX_SAFE_INTEGER
//   }

//   push(x) {
//     if (x <= this.min) {
//       this.stack.push(this.min)
//       this.min = x
//     }
//     this.stack.push(x)
//   }

//   pop() {
//     if (this.stack.pop() === this.min) {
//       this.min = this.stack.pop()
//     }
//   }

//   top() {
//     return this.stack[this.stack.length - 1]
//   }

//   getMin() {
//     return this.min
//   }
// }

// class MinStack {
//   constructor() {
//     this.stack = []
//     this.min = Number.MAX_SAFE_INTEGER
//   }

//   push(x) {
//     if (x <= this.min) {
//       this.stack.push(this.min)
//       this.min = x
//     }
//     this.stack.push(x)
//   }

//   pop() {
//     if (this.stack.pop() === this.min) {
//       this.min = this.stack.pop()
//     }
//   }

//   top() {
//     return this.stack[this.stack.length - 1]
//   }

//   getMin() {
//     return this.min
//   }
// }

// 链表解法
class Node {
  constructor(val, min) {
    this.value = val
    this.min = min
    this.next = null
  }
}

class MinStack {
  constructor() {
    this.head = null
  }

  push(x) {
    if (this.head == null) {
      this.head = new Node(x, x)
    } else {
      const node = new Node(x, Math.min(x, this.head.min))
      node.next = this.head
      this.head = node
    }
  }

  pop() {
    if (this.head) {
      this.head = this.head.next
    }
  }

  top() {
    if (this.head) {
      return this.head.value
    }
    return -1
  }

  getMin() {
    if (this.head) {
      return this.head.min
    }
    return -1
  }
}

const minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
// console.log(minStack.stack)
console.log(minStack.getMin()) // --> 返回 0.
minStack.pop()
console.log(minStack.getMin()) // --> 返回 0.
