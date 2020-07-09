/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.topIndex = -1;
    this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.topIndex++;
    this.arr[this.topIndex] = x;
    return x;
    // console.log(this.arr[this.topIndex]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.arr[this.topIndex];
    this.topIndex--;
    this.arr.length--;
    return val;
    // console.log(this.topIndex);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // console.log(this.arr[this.topIndex]);
    return this.arr[this.topIndex];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // var min = null;
    // for(var i = 0;i < this.arr.length;i++){
    //     if(min === null){
    //        min = this.arr[i];
    //     }else{
    //         if(this.arr[i] < min){
    //             min = this.arr[i];
    //         }
    //     }
    // }
    var min = Math.min.apply(this,this.arr);

    return min;
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
var min1 = minStack.getMin();   // 返回 -3.
minStack.pop();
var top = minStack.top();      // 返回 0.
var min2 = minStack.getMin();   // 返回 -2.

console.log(min1);
console.log(top);
console.log(min2);

