function parse2Int(num) {
    return parseInt(num,10);
}

//测试用例
var result1 = parse2Int(12);
var result2 = parse2Int('12px');
var result3 = parse2Int('0x12');

console.log(result1);
console.log(result2);
console.log(result3);