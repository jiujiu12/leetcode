function callIt(fn) {

    //将arguments转为数组，并取除了第一个参数fn的其余参数
    var args = Array.prototype.slice.apply(arguments,[1]);
    console.log(args)
    return fn.apply(null,args);

}

function fn() {
    console.log(arguments)
    return 1+2;
}

var result = callIt(fn,3,4);
console.log(result);