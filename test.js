// 编写一个程序将数组、对象扁平化并去重（值相同即为重复），最终得到一个升序的数组（不允许使用 Array.flat() ）。
// 输入以下值
let arr = [15, { a: 3, b: [4, 7, 8] }, [6, 7, 8, 9, [11, 12, [12, 13, [14]]]]]
// 返回下面的值
//[1, 2, 3, 4, 6, 7, 8, 9, 10，11, 12, 13, 14, 15]
// let arr = [1, 2, 4, [5, 6]]
let newArr = []
function flatten(arr) {
    if (typeof (arr) === 'number') {
      newArr.push(arr)
    } else if(Array.isArray(arr)) {
      for (let i = 0; i < arr.length; i++) {
        newArr.push(flatten(arr[i]))
      }
    } else {
      Object.keys(arr).forEach(k => {
        newArr.push(flatten(arr[k]))
      })
    }
    return newArr
}
// function flatten(arr) {
//     return arr.reduce((pre, cur) => {
//         return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
//     }, [])
// }
// console.log(, 'new')
console.log(flatten(arr));
