class ListNode<T = number> {
  val: T
  next: ListNode<T> | null
  constructor(val: T) {
    this.val = val
    this.next = null
  }
}

class LinkList {
  head: ListNode | null
  constructor(list: number[]) {
    this.head = null
    if (Array.isArray(list)) {
      list.forEach(item => this.insert(item))
    }
  }

  public insert(val: number) {
    const newNode = new ListNode(val)
    if (!this.head) {
      this.head = newNode
    } else {
      this.insertNode(this.head, newNode)
    }
  }

  private insertNode(node: ListNode, newNode: ListNode) {
    let cur = node
    while (cur.next != null) {
      cur = cur.next
    }
    cur.next = newNode
  }
}

export {
  LinkList,
  ListNode
}