var mapTag = "[object Map]";
var setTag = "[object Set]";
var arrayTag = "[object Array]";
var objectTag = "[object Object]";

var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var numberTag = "[object Number]";
var regexpTag = "[object RegExp]";
var stringTag = "[object String]";
var symbolTag = "[object Symbol]";

function getType(value) {
	return Object.prototype.toString.call(value);
}

function isObject(obj) {
	const type = typeof obj;
	return obj !== null && (type === "object" || type === "function");
}

function getInit(target) {
	const Ctor = target.constructor;
	return new Ctor();
}

function cloneReg(targe) {
	const result = new targe.constructor(targe.source, target.flags);
	result.lastIndex = targe.lastIndex;
	return result;
}

function cloneOtherType(targe, type) {
	const Ctor = targe.constructor;
	switch (type) {
		case boolTag:
		case numberTag:
		case stringTag:
		case errorTag:
		case dateTag:
			return new Ctor(targe);
		case regexpTag:
			return cloneReg(targe);
		case symbolTag:
			return cloneSymbol(targe);
		default:
			return null;
	}
}

function clone(target, map = new WeakMap()) {
	if (!isObject(target)) return target;

	const type = getType(target);
	let cloneTarget;

	if (map.get(target)) {
		return map.get(target);
	}
	map.set(target, cloneTarget);

	if (deepTag.includes(type)) {
		cloneTarget = getInit(target);
	} else {
		return cloneOtherType(target, type);
	}

	// 克隆set
	if (type === setTag) {
		target.forEach((value) => {
			cloneTarget.add(clone(value));
		});
		return cloneTarget;
	}

	// 克隆map
	if (type === mapTag) {
		target.forEach((value, key) => {
			cloneTarget.set(key, clone(value));
		});
		return cloneTarget;
	}

	for (let key in target) {
		cloneTarget[key] = clone(target[key], map);
	}

	return cloneTarget;
}
