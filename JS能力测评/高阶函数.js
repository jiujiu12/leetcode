function indexOf(arr, item) {
    var flag = false;
    var temp;
   for (let i = 0; i < arr.length; i++) {
       if(arr[i] == item ) {flag = true;temp = i;}
   }
   if (flag) {
     return  temp;
    }
    return -1;
}

var result = indexOf([ 1, 2, 3, 4 ], 3);
console.log(result);

function curryIt(fn) {
    return a = function(length1){
        return b = function(length2){
            return c = function(length3){
                return fn.call(null,length1,length2,length3)
            } 
        }  
    }
}

var fn = function (a, b, c) {return a + b + c}; 
var result2 = curryIt(fn)(1)(2)(3);
console.log(result2);

function partialUsingArguments(fn) {
    var args = [].slice.call(arguments,1);
    console.log(args);
    return result = function(){
        args = args.concat([].slice.call(arguments,0));
        console.log(args);
        return fn.apply(null,args);
    }
}
var result3 = partialUsingArguments(fn,1,2)(3);
console.log(result3);
