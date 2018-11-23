## 克隆  
### 简单的克隆  

    Object.assign(obj)
    JSON.parse(JSON.stringify(obj))

### 深克隆  
需要考虑到的点：  

- 环：使用数组把克隆过的对象存起来，在下次再识别到对象时，先去数组中寻找，如果有，则直接使用。  
- 函数和Error：这两种类型无法使用结构化克隆，只能直接复制引用。 *参考[结构化克隆](https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/The_structured_clone_algorithm#%E7%9B%B8%E5%85%B3%E9%93%BE%E6%8E%A5)*  
- RegExp：`reg.source` 和 `reg.flags` *ES6支持flags*  
- Symbol：使用`Object.getOwnPropertySymbols()`遍历`Symbol`属性。  
- 不可枚举属性：使用`Object.getOwnPropertyDescriptors()`来获取属性的配置，为不同类型的对象属性做处理。  
