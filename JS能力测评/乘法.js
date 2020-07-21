/**
 * @method multiply
 * @param {number} a
 * @param {number} b
 * @description 进行不损失精度的乘法
 */
function multiply(a, b) {
    
    //将a，b两个数字转换成字符串
    var a1 = a.toString();
    var b1 = b.toString();
    
    //获取小数点后位数，若无小数点可能会报错，故使用try...catch
    
    var len = 0;
    
    try{
        var ta = a1.split('.');
        len += ta[1].length;
    }catch(e){}
    
    try{
        var tb = b1.split('.');
        len += tb[1].length;
    }catch(e){}
    
    return (Number(a1.replace('.',''))*Number(b1.replace('.','')))/Math.pow(10,len);  
    
}    