# Transition  
### 过渡类名与状态  
- `[name]-enter`：
- `[name]-enter-active`：
- `[name]-enter-to`：
- `[name]-leave`：
- `[name]-leave-active`：
- `[name]-leave-to`：  
	
示例：  

	.fade-enter-active,
    .fade-leave-active {
        transition: all 2s;
    }
    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

![实例图](/dist/images/vue/transition.png)

### 动画  
和过渡不同的是，动画需要持续  

	.fade-enter-active {
        animation: fade 2s;
    }
    .fade-leave-active {
    	animation: fade 2s reverse;
    }
    @keyframes fade {
    	0% {
    		opacity: 0;
    	}
    	100% {
    		opacity: 1;
    	}
    }

### 自定义类名  
这种在自定义类名优先级高于Vue自带的过渡类名，适合结合第三方动画库使用  

	<transition enter-active-class="..." ...>
	</transition>

### 过渡事件钩子  

    <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"

        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled"
    >
        <!-- ... -->
    </transition>
    
    beforeEnter: function (el) {
        // ...
    },

`enter`和`leave`方法会有`done`方法作为第二个参数，需要手动执行。

### 过渡模式  
`out-in`当前元素先过渡离开，完成之后新元素过渡进入  
`in-out`新元素先过渡进入，完成之后当前元素过渡离开  

	<transition mode="out-in">
		<!-- ... -->
	</transition>

### 组件过渡  

	<transition>
		<component :is="showWhichCmp"></component>
	</transition>

### 过渡组  
`<transition>`只能有一个子节点而且只能渲染一个节点，当需要对多个节点（例如列表）做过渡效果时，需要使用`<transition-group>`组件  

	<transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
	      {{ item }}
	    </span>
    </transition-group>

    .list-item {
        display: inline-block;
        margin-right: 10px;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

但是这种做法会有问题，当 *新元素插入时* 或者 *旧元素完全离开时* ，其他元素会瞬间回流，这会让动画效果看起来比较生硬，为了处理这种情况，Vue提供了`v-move`属性（也可以自定义属性前缀`[name]-move`）：  
在上面的例子的样式中，加入  

	.list-move {
        transition: all 1s;
    }
    .list-leave-active {
    	// 为了让旧元素离开时，让它脱离文档流，其他元素可以开始改变位置
        position: absolute;
    }
