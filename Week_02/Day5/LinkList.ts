class ListNode<T = any> {
  val: T
  next: ListNode<T> | null
  constructor(val: T) {
    this.val = val
    this.next = null
  }
}

export default ListNode