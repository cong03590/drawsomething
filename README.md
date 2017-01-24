# FIS3升级说明

>   FIS3的升级是势在必行，FIS3和FIS2使用方式大致相同，这里主要讲一下从FIS2到FIS3要注意的内容

##	FIS3与FIS2的区别

-	FIS2采用配置方式，跟`Grunt`类似，而FIS3采用函数调用方式，跟`Gulp`类似
-	插件基本是通用的，有些不兼容的，已经做了修改
-	FIS3可以支持打相对路径的本地包
-	FIS3打包不再需要输入类似`-ompDd`这种，因为配置文件里已经定义好了
-	FIS3的命令基本与FIS2保持一致，就可能是你需要输入多个`3`
-	FIS3和FIS2可以共存于一台机器上，因为调用的命令不
-	FIS3的定义插件的使用会更合理，可以针对本地、测试、正式等环境调用不同插件与参数

##	项目目录结构(与FIS2一样)

##	项目发布后的结构(与FIS2一样)

##	FIS3相关知识

>	如何安装FIS3，如何使用来开发，如何使用来打包发布等

### 1.安装FIS3的解决方案feg（基于小组的）

-	安装Nodejs，直接到官网下载安装[http://nodejs.org/](http://nodejs.org/)
-	安装feg，在命令行下，输入：

```
	npm install -g feg
```

-	不需要额外安装其他插件，解决方案会集成


###	2.如何初始化基于FIS3的项目

>	希望基于FIS3的项目，不需要手动自己去建立文件夹结构与下载`fis-conf.js`的配置文件

-	在空白文件夹中，输入命令：

```
	feg get fis3
```

-	修改`fis3-project-demo`文件夹名为自己项目的名字


### 3.如何使用FIS3，大致与FIS2一致，不同点在于

-	JS、CSS文件不在使用`data-fixed="true"`来区分是否合并了

```html
	//script标签背后<!--ignore-->，表示，该文件不会进行自动打包，其余的会合并成为一个js文件
	<script charset="gb2312" type="text/javascript" src="js/lib/baiduTemplate.js"></script><!--ignore-->
```

-	JS的合并使用如下方式：

```javascript
	fis.match('src/js/lib/*.js',{
	    packTo : 'pkg/lib.js'
	});
```


###	4.FIS3中需要自己修改的配置（与FIS2一致）

### 5.如何开始FIS3

-	开发调试，进入项目的文件夹，输入命令：

```
	//这句是启动一个本地服务，输入完后，会自动打开浏览器，定位到：http://127.0.0.1:8080
	feg server start
	//这句是编译源码`src`文件夹下的，然后监听文件变化，自动编译，以及开启livereload，自动刷新浏览器（IE不支持）
	feg release -wL
```

### 6.打包发布代码

*	修改fis-conf.js中的配置，将`domain`中的值，修改为线上正式资源地址，末尾不能有`/`
*   `删除dist`文件夹（务必）
*   在项目目录下，输入以下命令：

```
    //发布打包
	feg release dist //打为测试环境的包
	feg release release //打为发布环境的包

	//打包一个相对路径的包，本地包不会用include
	feg release local
```

###	7.FEG其他功能

*	压缩PNG图片(使用pngquant压缩，质量跟效果跟tinypng类似)

```
	//在当前路径下输入以下命令，最后会在当前目录下多出一个output文件夹，存放压缩后的图片
	feg compress png
```

### 待补充

*	FIS3官网：[http://fis.baidu.com/](http://fis.baidu.com/)