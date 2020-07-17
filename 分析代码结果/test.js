function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12


var test = (function (a) {
    this.a = a;
    return function (b) {
        return this.a + b;
    }
}(function (a,b) {
    return b;
}(3,5)))

var result = test(7);
//12
console.log(result);


var add = function(x) { 
    var sum = 1; 
    var tmp = function(x) { 
        sum = sum + x; 
        return tmp;    
    } 
    tmp.toString = function() { 
        return sum; 
    }
    return tmp; 
  } 
 console.log(add(1)(2)(3).toString());     //6