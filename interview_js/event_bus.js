var BUS = class{
    constructor() {
        this._event = new Map()
    }
    emit(name) {
        var arr = this._event.get(name)
        if(arr) {
            arr.forEach(fn => {
                fn()
            })
        }
    }
    on(name, fn) {
        var arr
        if(arr = this._event.get(name)) {
            arr.push(fn)
            this._event.set(name, arr)
        } else {
            this._event.set(name, [fn])
        }
    }
    off() {

    }
}
var bus = new BUS()
