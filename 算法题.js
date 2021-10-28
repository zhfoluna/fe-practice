
// 求字符串中出现的次数
// let str = 'adsasdfasfasdfasfd';
// let o = {};
// for (let i = 0; i < str.length; i++) {
//     let char = str.charAt(i); 
//     if(o[char]){
//         o[char] ++;
//     } else {
//         o[char] = 1;
//     }
// }
let o = {}
for (let i = 0; i < str.length; i++) {
    let char = str.charAt[i];
    if(o[char]) {
        o[char] ++;
    } else {
        o[char] = 1
    }
    
}
function deepClone(a) {
    const b = Array.isArray(a) ? [] : {}
    for(const key of Object.keys(a)) {
        if (typeof a[key] !== 'object' || typeof a[key] !== null) {
            b[key] = a[key]
        } else {
            b[key] = deepClone(a[key]);
        }
    }
}
// console.log(o);
// 深拷贝
// 2、function simpleDeepClone(a) {
//     const b = Array.isArray(a) ? [] : {}
//     for (const key of Object.keys(a)) {
//         const type = typeof a[key];
//         if (type !== 'object' || a[key] === null) {
//             b[key] = a[key];
//         } else {
//             b[key] = simpleDeepClone(a[key]);
//         }
//     }
//     return b;
// }
// 数组扁平化
let arr = [[1, 2], [0, 3, 5], [-1, 4], 10];

function flatten(arr) {
    let res = [];
    res = arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, [])
    return res;
}
console.log(flatten(arr));

// 冒泡排序
    function bubbleSort(arr) {
        var len = arr.length;
        for (let i = 0; i < len -1; i++) {
            for (let j = 0; j < len - 1; j++) {
                if(arr[j] > arr[j+1]) {
                    let temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        return arr;
    }
    function bubbleSort2(arr) {
        for (let i = 0; i < arr.length -1; i++) {
            for (let j = i+1; j <i; j++) {
                if(arr[i] > arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            } 
        }
        return arr;
    }
//斐波那契数列，又称黄金分割数列，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34
    function Fibonacci(n) {
        let fibArr = [];
        let i = 0;
        while (i < n) {
            if(i <= 1) {
                fibArr.push(i);
            } else {
                fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
            }
            i++;
        }
        return fibArr;
    }
// 数组的最大差值
    function getMaxProfit(arr) {
        let min = arr[0];
        let maxProfit = 0;
        for (let i = 0; i < arr.length; i++) {
            min = Math.min(min, arr[i]);
            cha = arr[i] - min;
            maxProfit = Math.max(cha, maxProfit);
        }
        return maxProfit;
    }
// 防抖和截流
    function debounce(func, time) {
        let timer = null;
        return () => {
            clearInterval(timer);
            timer = setTimeout(() => {
                func.apply(this, arguments)
            }, time);
        }
    }
    const task = () => {console.log('run task')};
    debounce(task, 1000)    
    function debounce(func, time) {
        let timer = null;
        
        return () => {
            timer = setTimeout(() => {
                func.apply(this)
            }, time);
        }
    }
