// 在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组
function insert(arr, item, index) {
    var result = [];
    result = arr.slice(0,index).concat(item).concat(arr.slice(index));
    return result;
}

var result = insert([1, 2, 3, 4], 'z', 2);
console.log(result);

// 合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组
// 可以直接return arr1.concat(arr2);
function concat(arr1, arr2) {
    var arr = [];
    arr = arr1.slice(0);
    [].push.apply(arr,arr2);
    return arr;
}

var result2 = concat([1, 2, 3, 4], ['a', 'b', 'c', 1]);
console.log(result2);

// 删除数组 arr 第一个元素。不要直接修改数组 arr，结果返回新的数组
// 可以直接return arr.slice(1);
function curtail(arr) {
    var newA = [];
    [].push.apply(newA,arr);
    newA.splice(0,1);
    return newA;
}

function prepend(arr, item) {
    var newA = arr.slice(0);
    newA.unshift(item);
    console.log(arr);
    return newA;
}

var result4 = prepend([1, 2, 3, 4], 10);
console.log(result4);

// 移除数组中的指定元素
// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回

// 思路一： 倒着遍历，遇到相同的元素就删除，可以防止正序遍历删除导致的位置问题
function removeWithoutCopy(arr, item) {

   /*  for(var i = (arr.length-1);i > 0 ; i--){
        // 思路一
        // arr[i] != item || arr.splice(i,1);

        
    } */
    var i = arr.length;
    // 思路二：
    while(i > 0){
        console.log(i);
        arr[0] == item || arr.push(arr[0]);
        arr.shift();
        i--;
    }
    return arr;
}

var result5 = removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2);
console.log(result5);



