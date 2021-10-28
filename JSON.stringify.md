JSON.stringify() 第一大特性总结

    undefined、任意的函数以及 symbol 作为对象属性值时 JSON.stringify() 对跳过（忽略）它们进行序列化


    undefined、任意的函数以及 symbol 作为数组元素值时，JSON.stringify() 将会将它们序列化为 null


    undefined、任意的函数以及 symbol 被 JSON.stringify() 作为单独的值进行序列化时，都会返回 undefined
JSON.stringify() 第二大特性
    非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
JSON.stringify() 第三大特性
    转换值如果有 toJSON() 函数，该函数返回什么值，序列化结果就是什么值，并且忽略其他属性的值。
JSON.stringify()第四大特性
    JSON.stringify() 将会正常序列化 Date 的值。
JSON.stringify() 第五大特性
    NaN 和 Infinity 格式的数值及 null 都会被当做 null。
JSON.stringify() 第六大特性
    布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值。
JSON.stringify() 第七大特性
    其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。
JSON.stringify() 第八大特性
    对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误。
JSON.stringify() 第九大特性
    所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。