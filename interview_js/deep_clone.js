function getTag(value) {
	return Object.prototype.toString.call(value)
}

function isObject(value) {
	const type = typeof value
	return value != null && (type == 'object' || type == 'function')
}

function isFunc(value) {
	return typeof value == 'function'
}

function deepClone(parent) {
	let value = parent

	const isArray = Array.isArray(value)
	const isReg = getTag(value) == '[object RegExp]'

	if (isObject(value)) {
		if (isFunc(value)) {
            return value
		}

		if (isArray) {
			let newV = []
			for (let item of value) {
				newV.push(deepClone(item))
			}
			return newV
		}

		if (isReg) {
			return new RegExp(value.source, value.flags)
		}

		// 对象
		if (value.constructor !== 'Object') {
			// 实例对象
			let ctor = value.constructor
			let newV = new ctor()
			for (let key in value) {
                console.log(key)
				newV[key] = deepClone(parent[key])
			}
			return newV
		} else {
			// 普通对象
			let newV = {}
			for (let key in value) {
				newV[key] = deepClone(parent[key])
			}
			return newV
		}
	} else {
		return value
	}
}
