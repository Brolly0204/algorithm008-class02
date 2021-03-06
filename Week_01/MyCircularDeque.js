const MyCircularDeque = function(k) {
  this.k = k
  this.deque = []
}

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.deque.length < this.k) {
    this.deque.unshift(value)
    return true
  }
  return false
}

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.deque.length < this.k) {
    this.deque.push(value)
    return true
  }
  return false
}

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  const result = this.deque.shift()
  return result != undefined
}

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  const result = this.deque.pop()
  return result != undefined
}

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  if (this.deque.length) {
    return this.deque[0]
  }
  return -1
}

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  if (this.deque.length) {
    return this.deque[this.deque.length - 1]
  }
  return -1
}

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return !this.deque.length
}

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.deque.length === this.k
}

const circularDeque = new MyCircularDeque(3) // 设置容量大小为3
console.log(circularDeque.insertLast(1)) // 返回 true
console.log(circularDeque.insertLast(2)) // 返回 true
console.log(circularDeque.insertFront(3)) // 返回 true
console.log(circularDeque.insertFront(4)) // 已经满了，返回 false
console.log(circularDeque.getRear()) // 返回 2
console.log(circularDeque.isFull()) // 返回 true
console.log(circularDeque.deleteLast()) // 返回 true
console.log(circularDeque.insertFront(4)) // 返回 true
console.log(circularDeque.getFront()) // 返回 4
