#Linux  
## 常用命令  
`date` 显示日期  

`cd [路径]` 进入某个路径   
`ls` 或 `dir` 查看该目录下的文件  
`touch` 创建新文件  
`mkdir [dir]` 创建目录  

`chmod [777|+x|...]` 配置文件操作权限  

`vim [file]` 或 `vi [file]` 创建文件  
　`i`命令进入insert模式　`ESC`命令退出insert模式  
　　1. `:wq` 保存，退出文件编辑  
　　2. `:w` 保存，不退出  
　　3. `:q!` 退出，不保存  
　　4. `:w [fileName]` 用其他名字保存  
　　5. `:w! [fileName]` 用其他名字保存且覆盖原文件  
`cat [file]` 查看文件  

`rm -f [file]` 删除文件  
`rmdir [dir]` 删除目录  
`rm -rf [dir]` 删除目录并删除其内容  
`mv [oldDir] [newDir]` 重命名或移动一个目录  

`cp [file1] [file2]` 复制一个文件  
`cp [dir/*] .` 复制一个目录下的所有文件到当前工作目录  
`cp -a /tmp/dir1 .` 复制一个目录到当前工作目录  
`cp -a [dir1] [dir2]` 复制一个目录  
  
`ln -s [file] [link]`   创建一个指向file的软链接，可用于配置环境变量  
  
`find [dir] -name [file]` 在指定目录下搜索文件或目录    
`find [dir] -name \*.bin` 在指定目录下搜索带有'.bin' 结尾的文件  
`whereis halt` 显示一个二进制文件、源码或man的位置   
`which halt` 显示一个二进制文件或可执行文件的完整路径  
  
`crontab -e` 编辑定时任务,**用环境变量代替直接使用命令**  
`crontab -l` 列出定时服务的详细内容  
`/etc/init.d/crond [start|restart|reload|stop]` 启动|重启|重新加载|停止服务
[定时任务参考](http://www.blogjava.net/freeman1984/archive/2010/09/23/332715.html)