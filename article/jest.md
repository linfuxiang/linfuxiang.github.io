# Jest

> [安装及入门参考文档](https://facebook.github.io/jest/docs/en/getting-started.html)  
> [Testing Vue with Jest](https://alexjoverm.github.io/series/Unit-Testing-Vue-js-Components-with-the-Official-Vue-Testing-Tools-and-Jest/)

## 使用示例  

	describe('index.js', () => {

	    it('test add', () => {
	        expect(index.add()).toBe(3)
	        expect(index.add(4, 5)).toBe(9)
	    })

	    // test simple timeout
	    it('test simple timeout', done => {
	        index.asyncFunc1((data) => {
	            expect(data).toBe(5)
	            done()
	        })
	    })

	    // test promise
	    it('test promise', () => {
	        expect.assertions(1)
	        // 'return' is neccesary
	        return index.asyncFunc2().then(data => {
	            expect(data).toBe(5)
	        })
	    })
	    // test promise with .resolves/.rejects(available in Jest 20.0.0+)
	    it('test promise with .resolves/.rejects', () => {
	        expect.assertions(1)
	        return expect(index.asyncFunc2()).resolves.toBe(5)
	    })
	    // test promise with async/await
	    it('test promise with async/await', async() => {
	        expect.assertions(1)
	        expect(await index.asyncFunc2()).toBe(5)
	    })
	    // test promise with async/await & .resolves/.rejects(available in Jest 20.0.0+)
	    it('test promise with async/await & .resolves/.rejects', async() => {
	        expect.assertions(1)
	        await expect(index.asyncFunc2()).resolves.toBe(5)
	    })

	    // test async/await, the same as promise
	    it('test async/await', async() => {
	        expect.assertions(1)
	        expect(await index.asyncFunc3()).toBe(10)
	    })

	    it('test mock function', () => {
	        let mockCb = jest.fn()
	        index.firstFunc(mockCb)
	        expect(mockCb.mock.calls.length).toBe(1)
	    })

	    it('fetch sth from API', () => {
	        let mockRes = {
	            code: 1000,
	            data: {
	                name: 'Ronald Cheng'
	            }
	        }
	        axios.get.mockResolvedValue(mockRes)

	        return index.fetch_api('/abc.txt').then(res => {
	            expect(res.code).toBe(1000)
	            expect(res.data.name).toBe('Ronald Cheng')
	        })
	    })
	})

## Setup & Teardown

#### beforeEach和afterEach  
在执行测试前后需要进行某些操作，可以使用`beforeEach`和`afterEach`

	beforeEach(() => {
	  	installSth();
	});

	afterEach(() => {
	  	uninstallSth();
	});

#### beforeAll和afterAll  
一次性安装，只会执行一次

上面四个方法都可以有独立的作用域，放在`describe`块中则能独立安装卸载