# mongoDB

## mongoDB特性：  
1. 面向集合存储，易于存储对象类型的数据
2. 模式自由
3. 支持动态查询
4. 支持完全索引、包含内部对象
5. 支持复制和故障恢复
6. 使用高效的二进制数据存储，包括大型对象(如视频等)
7. 自动处理碎片、以支持云计算层次的扩展性
8. 文件存储格式为BSON(一种Json的扩展)

## 在linux下安装 
#### 利用yum安装
在`/etc/yum.repos.d/`目录下创建mongodb.repo文件，内容如下

	[mongodb]  
	name=MongoDB Repository  
	baseurl=http://downloads-distro.mongodb.org/repo/redhat/os/x86_64/  
	gpgcheck=0  
	enabled=1  

#### 执行安装命令

	yum -y install mongodb-org

## 创建数据库目录

	mkdir mongo_test
	cd mongo_test
	mkdir bin
	mkdir data
	mkdir log
	mkdir conf

## 创建配置文件

	cd conf
	vim mongod.conf

`mongod.conf`内容如下：

	port = ...  	//端口
	dbpath = data 		//数据库路径
	logpath = log/mongod.log 	//日志文件路径
	fork = true			//后台运行
	smallfiles = true		//内存不够时添加此配置

## 启动mongoDB服务

	mongod -f conf/mongod.conf

ps:如果数据库未正常关闭，需删除`data`目录下`mongod.lock`文件，并使用`mongod --repair`命令修复，再重新启动

## 连接数据库

	mongo --port [端口号] 

ps:如果连接时直接使用`hostname:port`，会导致关闭服务的时候无权限

## 关闭数据库服务
在连接上数据库后，在命令行中键入

	> use admin
	> db.shutdownServer()

## 基本操作

	show dbs	//查看所有数据库
	use [数据库名] 	//切换数据库，若没有，则创建
	db.dropDatabase() 	//删除当前数据库
	db.[表].insert({}) 	//写入
	db.[表].find({}) 	//查询，可配合skip()和limit()和sort()方法
	db.[表].updata({},{}) 	//更新
	db.[表].remove({}) 	//删除
	db.[表].drop() 		//删除表