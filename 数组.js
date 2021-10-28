Array
    let a = [1, 2, 3, 4];
    let b = a.map(item => {
        return item * 2;
    })
    1、map: 遍历数组，返回回调返回值组成的新数组
        let a = [1,2,3,4];
        let b = a.map(item => {
            return item * 2;
        })
        // a --> [1,2,3,4]
        // b --> [2,4,6,8]
    2、forEach: 无法break，可以使用try/catch 中throw new Error 来停止。
        // a --> [1,2,3,4]
        // b --> undefined
    3、filter: 过滤
        // a --> [1,2,3,4]
        // b --> [2,3,4]
    4、some: 有一项返回true，则整体为true
        // a --> [1,2,3,4]
        // b --> true
    5、every: 有一项返回false，则整体为true
        // a --> [1,2,3,4]
        // b --> false
    6、jion: 通过指定连接符生成字符串。
    7、push/pop：末尾推入和弹出，改变愿数组，返回最后一项
        // a --> [1,2,3,4,5]
        // b --> 5
    8、unshift/shift：头部推入和弹出，改变愿数组，返回数组长度
        // a --> [1,2,3,4,6]
        // b --> 5
    9、sort/reverse: 排序与反转，改变原数组。
        // a --> [1,2,3,4,6]
        // b --> [1,2,3,4,6]
    10、 concat：连接数组，不影响愿数组，浅拷贝
        // a --> [1,2,3,4,6]
        // b --> [1,2,3,4,6,7,8]
    11、slice(start, end): 返回截断后的新数组，不改变原数组。
        // a --> [1,2,3,4,6]
        // b --> [3,4,6]
    12、splice(start, number, value...): 返回删除元素组成的数组，value为插入项，改变原数组。
    13、indexOf/lastIndexOf(value, formIndex): 查找数据项，返回对应的下标。

    14、find: 过滤
        // a --> [1,2,3,4]
        // b --> 2
    15、reduce/reduceRight(fn(pre, cur, index, arrya), defaultPre): 两两执行，pre 为上次化简函数的return值，cur为当前值。
        当未传入时从第一项开始
        当传入defaultPre时，从第二项开始；