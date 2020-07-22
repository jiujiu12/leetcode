function count(start, end) {
    console.log(start++);
    //建立定时器
    var timer = setInterval(function(){
        if(start <= end){
            console.log(start++);
        }else{
            clearInterval(timer);
        }
    },100);

    //返回cancel方法，停止定时器
    return {
        cancel : function(){
            clearInterval(timer);
        }
    }
}

var result = count(0,20);
console.log(result);