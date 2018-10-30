const child_process = require('child_process')
const fs = require('fs')
const path = require('path')
const util = require('../lib/utils')

require('../lib/console')

const QINIU_ROOT = path.resolve(process.cwd(), '../../ycf_qiniu')

let isQiniuOriginHasBranch = true,
    BRANCH = ''

/**
 * 设置exec进程方法的参数
 * @param {Boolean} isQiniu 是否qiniu
 */
function setExecOptions(isQiniu = false) {
    return isQiniu ? {
        cwd: QINIU_ROOT,
        encoding: 'utf8'
    } : {
        encoding: 'utf8'
    }
}

/**
 * 获取当前分支
 * @param  {Boolean} isQiniu 是否需要获取qiniu分支
 * @return {[type]}          [description]
 */
function getCurrentBranch(isQiniu = false) {
    let branch = null
    // try {
    branch = child_process.execSync(
        'git rev-parse --abbrev-ref HEAD',
        setExecOptions(isQiniu)
    )
    // } catch (err) {
    //     // console.log(err)
    // }
    return branch.replace(' ', '').replace('\n', '').replace('\r', '')
}

/**
 * 检查项目的本地分支是否干净
 * @param  {Boolean} isQiniu 是否qiniu项目
 * @return {[type]}          [description]
 */
function checkBranchIfClean(isQiniu = false) {
    let status = child_process.execSync(
        'git status',
        setExecOptions(isQiniu)
    )
    let diff = child_process.execSync(
        'git diff',
        setExecOptions(isQiniu)
    )
    // 判断分支是否干净
    if (
        (typeof diff === 'string' && diff === '') &&
        (typeof status === 'string' && !/Changes to be committed/.test(status))
    ) {
        return true
    } else {
        return false
    }
}

/**
 * 切换分支
 * @param  {[type]}  targetBranch 目标分支
 * @param  {Boolean} isQiniu      是否qiniu目录，默认是
 * @return {[type]}               [description]
 * @备注：
 */
function checkoutBranch(targetBranch, isQiniu = true) {
    console.blue(`开始切换${isQiniu ? 'qiniu' : 'www'}分支`)
    console.blue('正在fetch远程...')
    child_process.execSync(
        `git fetch`,
        setExecOptions(true)
    )
    console.green('fetch远程完成')
    let branch_str = child_process.execSync(
        'git branch',
        setExecOptions(isQiniu)
    )
    // 把本地分支转化成数组
    let branch = JSON.stringify(branch_str).match(/  (.*?)\\n/g)

    if (
        branch.find((val) => {
            let reg = new RegExp(`^  ${targetBranch}\\\\n$`)
            return reg.test(val)
        })
    ) {
        // 如果本地分支已存在
        child_process.execSync(
            `git checkout ${targetBranch}`,
            setExecOptions(isQiniu)
        )
    } else {
        // 这里强行尝试从远程同名分支创建本地分支，省去检索远程分支的操作
        // 如果不成功则代表没有该远程分支，从远程ucloud直接创建
        // 这里有一个hack：先切换到ucloud分支并更新，以防执行下面的命令时
        // git checkout -b ${targetBranch} remotes/origin/${targetBranch}
        // 会从该分支进行打新分支
        child_process.execSync(
            `git checkout ucloud`,
            setExecOptions(isQiniu)
        )
        child_process.execSync(
            `git pull origin ucloud`,
            setExecOptions(isQiniu)
        )
        try {
            child_process.execSync(
                `git checkout -b ${targetBranch} remotes/origin/${targetBranch}`,
                setExecOptions(isQiniu)
            )
        } catch (err) {
            if (new RegExp(`\'remotes/origin/${targetBranch}\' is not a commit`).test(err.stderr)) {
                // 没有这个远程分支，从远程ucloud直接创建
                child_process.execSync(
                    `git checkout -b ${targetBranch} remotes/origin/ucloud`,
                    setExecOptions(isQiniu)
                )
            } else {
                // 其他报错，提示手动创建
                console.red('创建qiniu新分支出错，请手动创建：')
                console.red(err.stderr)
                process.exit()
            }
        }
    }
    // 尝试从qiniu远程该分支更新一次代码，如果成功则代表有该远程分支
    try {
        if (isQiniu) {
            console.log('正在检查是否存qiniu远程分支')
            child_process.execSync(
                `git pull origin ${BRANCH}`,
                setExecOptions(true)
            )
        }
    } catch (err) {
        if (/find remote ref/.test(err.stderr)) {
            isQiniuOriginHasBranch = false
        }
    }
    console.green('切换qiniu分支成功')
}

/**
 * 更新分支
 * @param  {Boolean}  isQiniu 是否更新qiniu，默认false
 * @return {[type]} [description]
 */
function updateBranch(isQiniu = false) {
    if (isQiniu) {
        console.blue('qiniu`git pull`开始执行')
        // qiniu的更新
        if (isQiniuOriginHasBranch) {
            child_process.execSync(
                `git pull origin ${BRANCH}`,
                setExecOptions(true)
            )
            child_process.execSync(
                `git pull origin ucloud`,
                setExecOptions(true)
            )
            console.green('qiniu`git pull`完成')
        } else {
            console.green('qiniu无远程分支，跳过更新')
        }
    } else {
        console.blue('www`git pull`开始执行')
        // www的更新
        child_process.execSync(
            `git pull origin ${BRANCH}`,
            setExecOptions(false)
        )
        // TODO:此处可能存在问题，如果冲突，不确定结果res是怎样的
        var res = child_process.execSync(
            `git pull origin ucloud`,
            setExecOptions(false)
        )
        console.log('www合并ucloud:', res)
        console.green('www`git pull`完成')
    }
}

function commitAndPushBranch(isQiniu = true) {
    // 需要先添加以下全局配置，否则会出现换行报错
    // git config --global core.autocrlf false

    child_process.execSync(
        `git add .`,
        setExecOptions(isQiniu)
    )
    console.green('`git add .`完成')

    // 如果没修改，则忽略commit流程
    if (!checkBranchIfClean(true)) {
        child_process.execSync(
            `git commit -m 打包`,
            setExecOptions(isQiniu)
        )
        console.green('`git commit`完成')
    } else {
        console.green('分支没修改，跳过`commit`')
    }

    return new Promise((resolve, reject) => {
        console.blue('`git push`开始执行...')
        // 需要使用异步exec方法才能成功push和接收到结果
        child_process.exec(
            `git push${isQiniuOriginHasBranch ? '' : ' --set-upstream origin ' + BRANCH}`,
            setExecOptions(isQiniu),
            (err, stdout, stderr) => {
                if (err) {
                    console.log(err)
                    console.red('`git push`失败了')
                    reject()
                    return
                }
                console.log(stdout)
                console.green('`git push`完成')
                resolve()
            }
        )
    })
}

function moveDist() {
    return new Promise((res, rej) => {
        const WWW_DIST = path.resolve(process.cwd(), '../public/yunkezan'),
            QINIU_DIST = path.resolve(QINIU_ROOT, 'yunkezan')

        util.deleteFolder(QINIU_DIST, true)

        // 在删除目录后马上创建，需要设置延迟才能成功，不明原因
        setTimeout(() => {
            fs.mkdirSync(QINIU_DIST)

            // let c = 0

            function copyToQiniu(root, rPath) {
                return new Promise(async (resolve) => {
                    let obj = {
                        files: [],
                        folders: []
                    }
                    let paths = fs.readdirSync(root)
                    for (var i of paths) {
                        // 当前遍历的目录
                        let p = path.resolve(root, i)
                        let st = fs.statSync(p)
                        // qiniu的相对路径，用于与qiniu根目录`QINIU_DIST`拼接
                        let rP = `${rPath}${rPath ? '/' : ''}${i}`

                        if (st.isFile()) {
                            // console.log(++c)
                            await util.moveWithStream(p, path.resolve(QINIU_DIST, rP))
                        } else if (st.isDirectory()) {
                            // 拼接出打包资源的qiniu绝对目录
                            let dstP = path.resolve(QINIU_DIST, rP)
                            if (!fs.existsSync(dstP)) {
                                fs.mkdirSync(dstP)
                            }
                            await copyToQiniu(path.resolve(root, p), rP)
                        }
                    }
                    resolve()
                })
            }

            copyToQiniu(WWW_DIST, '').then(() => {
                res()
            })

        }, 500)
    })
}

module.exports = (api, options) => {
    api.registerCommand('packup', async (args, rawArgv) => {
        console.log('===============\n')
        console.log('这是个自定义插件，只执行serve')
        console.log('===============\n')
        console.log(process.cwd())
        console.log(__dirname)
        // 获取当前分支
        let www_branch = getCurrentBranch(),
            qiniu_branch = getCurrentBranch(true)
        BRANCH = www_branch
        console.blue(`www项目分支：${www_branch}`)
        console.blue(`qiniu分支：${qiniu_branch}`)
        // 更新www分支
        updateBranch()

        // startof 测试用
        // checkoutBranch(BRANCH)
        // return
        // BRANCH = qiniu_branch
        // await moveDist()
        // await commitAndPushBranch(true)
        // return
        // moveDist()
        // return
        // isQiniuOriginHasBranch = false
        // updateBranch()
        // commitAndPushBranch(true)
        // moveDist()
        // return
        // endof 测试用

        if (www_branch !== qiniu_branch) {
            // 分支名不一致
            util.confirm(
                'www和qiniu分支名不一致，如果继续，将自动切换qiniu分支(y|n)：',
                () => {
                    if (checkBranchIfClean(true)) {
                        // 切换qiniu分支为www同名分支
                        checkoutBranch(BRANCH)

                        // 如果qiniu存在远程分支，更新qiniu分支
                        if (isQiniuOriginHasBranch) {
                            updateBranch(true)
                        }

                        console.blue('开始打包')
                        api.service.commands.build.fn(args, rawArgv).then(async (res) => {
                            console.green('打包完成')
                            console.blue('开始迁移到qiniu')
                            await moveDist()
                            console.green('迁移完成')
                            await commitAndPushBranch(true)
                            process.exit()
                        })
                    } else {
                        console.red('你的qiniu项目分支存在污染，请先手动清理，再重试')
                        process.exit()
                    }
                },
                () => {
                    process.exit()
                }
            )
        } else {
            // 分支名一致
            if (checkBranchIfClean(true)) {
                // 如果qiniu存在远程分支，更新qiniu分支
                if (isQiniuOriginHasBranch) {
                    updateBranch(true)
                }

                api.service.commands.build.fn(args, rawArgv).then(async (res) => {
                    await moveDist()
                    console.log(3333)
                    console.green('迁移完成')
                    await commitAndPushBranch(true)
                    process.exit()
                })
            } else {
                console.red('你的qiniu项目分支存在污染，请先手动清理，再重试')
                process.exit()
            }
        }
    })
}

/**
 * 备用方案
 */
// async function moveDist() {
//     const WWW_DIST = path.resolve(process.cwd(), '../public/yunkezan'),
//         QINIU_DIST = path.resolve(QINIU_ROOT, 'yunkezan')

//     util.deleteFolder(QINIU_DIST, true)

//     await new Promise((resolve) => {
//         setTimeout(async () => {
//             fs.mkdirSync(QINIU_DIST)

//             let obj = {
//                 files: [],
//                 folders: []
//             }

//             function getList(root, qiniuRoot) {
//                 let paths = fs.readdirSync(root)
//                 for (var i of paths) {
//                     // 当前遍历的目录
//                     let p = path.resolve(root, i)
//                     let st = fs.statSync(p)

//                     if (st.isFile()) {
//                         obj.files.push({
//                             src: path.resolve(root, i),
//                             dst: path.resolve(qiniuRoot, i)
//                         })
//                     } else if (st.isDirectory()) {
//                         obj.folders.push(path.resolve(qiniuRoot, i))
//                         getList(p, path.resolve(qiniuRoot, i))
//                     }
//                 }
//             }

//             getList(WWW_DIST, QINIU_DIST)

//             for (let folder of obj.folders) {
//                 if (!fs.existsSync(folder)) {
//                     fs.mkdirSync(folder)
//                 }
//             }

//             for (let file of obj.files) {
//                 await util.moveWithStream(file.src, file.dst)
//             }
//             resolve()
//         }, 50)
//     })
// }