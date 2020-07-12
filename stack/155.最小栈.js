/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.topIndex = -1;

    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.topIndex++;

    let topIndex = this.topIndex;
    this.stack[topIndex] = x;
    
    if (topIndex == 0 || this.stack[topIndex] < this.minStack[topIndex-1]) {
        this.minStack[topIndex] = this.stack[topIndex];
    }else{
        this.minStack[topIndex] = this.minStack[topIndex-1];
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // let val = this.stack[this.topIndex];
    this.topIndex--;

    this.stack.length--;
    this.minStack.length--;
    // return val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.topIndex];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.topIndex];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

