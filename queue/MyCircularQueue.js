/** 
 * 循环队列的实现
 * 
 * MyCircularQueue(k): 构造器，设置队列长度为 k 。
 * Front: 从队首获取元素。如果队列为空，返回 -1 。
 * Rear: 获取队尾元素。如果队列为空，返回 -1 。
 * enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
 * deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
 * isEmpty(): 检查循环队列是否为空。
 * isFull(): 检查循环队列是否已满。
*/

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
// 构造器，队列长度为k
var MyCircularQueue = function(k) {
    let tail = -1,
        head = -1;
    let queue = new Array(k);

    this.tail = tail;
    this.head = head;
    this.length = k;
    this.queue = queue;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()){
        return false;
    }
    if(this.head < 0){
        this.head = 0;
    }
    this.tail = (this.tail+1)%(this.length);
    this.queue[this.tail] = value;
    console.log("入队后tail指向index："+this.tail)
    return true;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()){
        console.log("错误，队列中没有数据！");
        return false;
    }
    if(this.head == this.tail){
        this.head = -1;
        this.tail = -1;
        console.log("队列中只有一个元素啦，已被删除，重置head的index："+this.head);
        return true;
    }
    this.head = (this.head+1)%(this.length);
    console.log("出队后head指向index："+this.head);
    return true;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if(this.isEmpty()){
        return -1;
    }
    return this.queue[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if(this.isEmpty()){
        return -1;
    }
    return this.queue[this.tail];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head == -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.head)%this.length == (this.tail+1)%this.length;
}


//   Your MyCircularQueue object will be instantiated and called as such:

var circularQueue = new MyCircularQueue(3); // 设置长度为 3
var en1 = circularQueue.enQueue(1);  // 返回 true
var en2 = circularQueue.enQueue(2);  // 返回 true
var en3 = circularQueue.enQueue(3);  // 返回 true
var en4 = circularQueue.enQueue(4);  // 返回 false，队列已满
var rear1 = circularQueue.Rear();  // 返回 3
var full = circularQueue.isFull();  // 返回 true
var del = circularQueue.deQueue();  // 返回 true
var en5 = circularQueue.enQueue(4);  // 返回 true
var rear2 = circularQueue.Rear();  // 返回 4

console.log(en1);
console.log(en2);
console.log(en3);
console.log(en4);
console.log(rear1);
console.log(full);
console.log(del);
console.log(en5);
console.log(rear2);