function convertToBinary(num) {
    // 将数字转为二进制表示
    var str = num.toString(2);

    // 不满足8位是用0补齐
    var len = str.length;

    if (len <= 8) {
        var add = '00000000';
        var s1 = add.split('',(8-len)).join();
        console.log(s1);
        return s1+str;
    }
}

// 测试用例
var bi = convertToBinary(65);
console.log(bi)

/**
 * @description 获取数字 num 二进制形式第 bit 位的值。第一种解法
 * @param {Number} num 数字
 * @param {Number} bit 位值
 * @returns {String} 参数num二进制第bit位的值
 */
function valueAtBit(num, bit) {
    var arr = num.toString(2).split('');
    console.log(arr.length);
    if(bit>arr.length){
       return 
    }
    return arr[bit-1];
    
}
var vAB = valueAtBit(128,8);
console.log(vAB);

/* 

另一种解法： 使用位运算符
function valueAtBit(num, bit) {
    return num >> (bit-1) & 1;
}
 */