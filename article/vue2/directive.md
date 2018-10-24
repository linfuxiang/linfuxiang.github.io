# Directive  
### 指令钩子  
- `bind`：第一次绑定时调用（once）
- `inserted`：插入到父节点时调用
- `update`：所在组件的VNode更新时调用
- `componentUpdated`：更新完成时调用
- `unbind`：解绑时调用（once）

### 钩子函数的参数  
- `el`：指令绑定的DOM元素
- `binding`：对象，包含以下属性
    - `name`：指令名，不包含`v-`
    - `value`：指令绑定值
    - `oldValue`：旧的指令绑定值
    - `expression`：指令绑定值表达式
    - `arg`：指令参数，`v-dire:foo`===>`'foo'`
    - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`
- `vnode`：编译生成的虚拟节点
- `oldVnode`：旧的编译生成的虚拟节点