/**
 * initialize your data structure here.
 */
var MinStack = function() {
    // top指针
    this.topIndex = -1;
    
    // 最大值栈
    this.minStack = [];
    // 要求栈
    this.arr = [];
};

/** 
 * 入栈
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // top指针上移
    this.topIndex++;

    // 将新的top指针赋给newTop变量
    let newTop = this.topIndex;

    // 将元素放到newTop指向的位置
    this.arr[newTop] = x;

    // 给最小值栈赋值
    if(newTop === 0 || this.minStack[newTop-1] >= x){
        this.minStack[newTop] = this.arr[newTop];
    }else if(this.minStack[newTop-1] < x){
         this.minStack[newTop] =  this.minStack[newTop-1];
    }
    // 返回新增的元素
    return x;
};

/**
 * 出栈
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.arr[this.topIndex];
    this.topIndex--;
    this.arr.length--;
    this.minStack.length--;

    // 返回删除元素值
    return val;
};

/**
 * 返回top元素
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.topIndex];
};

/**
 * 获取最小值
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    /* 笨办法：
    var min = null;
    for(var i = 0;i < this.arr.length;i++){
        if(min === null){
           min = this.arr[i];
        }else{
            if(this.arr[i] < min){
                min = this.arr[i];
            }
        }
    } */

    //JS Math函数： var min = Math.min.apply(this,this.arr);（写法简便，但是较为耗时）

    // 定义最小值栈获取最小值，只需要取最小值栈的顶部元素即可
    
    return this.minStack[this.topIndex];

};

// 测试用例
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

