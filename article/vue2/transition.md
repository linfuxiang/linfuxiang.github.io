# Transition  
### 过渡类名与状态  
1. [name]-enter：
2. [name]-enter-active：
3. [name]-enter-to：
4. [name]-leave：
5. [name]-leave-active：
6. [name]-leave-to：  
	
示例：  

	.slide-enter-active,
    .slide-leave-active {
        transition: all 2s;
    }
    .slide-enter,
    .slide-leave-to {
        opacity: 0;
    }

![实例图](/dist/images/vue/transition.png)

### 动画  
和