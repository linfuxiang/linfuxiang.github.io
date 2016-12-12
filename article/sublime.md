# Sublime Text 3  
## 下载安装  
在[官方网站](http://www.sublimetext.com/3)进行下载安装
> 汉化方法 http://www.cnblogs.com/akwwl/p/3566445.html

## 插件安装  
按Ctrl+`调出console控制台
> ps:与QQ输入法的默认快捷键有冲突  

输入以下代码到底部命令行并回车：

	import urllib.request,os; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); open(os.path.join(ipp, pf), 'wb').write(urllib.request.urlopen( 'http://sublime.wbond.net/' + pf.replace(' ','%20')).read())

重启Sublime Text 3

通过`Ctrl+Shift+P`调出命令面板，找到`Install Package`选项，然后输入插件名。

## 常用插件：	 
1. **Emmet** 快速生成HTML代码 快捷键`ctrl + E`
2. **BracketHighlighter**   
3. **docBlockr** JS注释 快捷键`/** + Enter`或者`/* + Enter`
4. **CSSComb** CSS属性排序 快捷键`ctrl + shift + C`
5. **Autoprefixer** CSS前缀自动补全 快捷键`属性后按tab`
6. **HTML+CSS+JS Prettify** 代码美化工具 快捷键`ctrl + shift + h`