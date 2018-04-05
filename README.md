# sticky-note
A sticky note using node and express

### 预览

[便利贴](http://note.shenzekun.cn/)

### 安装方法

打开终端 ，输入：

```
git clone git@github.com:shenzekun/sticky-note.git
```

切换到克隆下来的文件夹：

```
cd sticky-note
```
然后输入：

```
npm install
```



### 运行方法


```
node bin/www
```

打开浏览器：

```
http://localhost:3666/
```

### 实现功能

* 第三方登录
* 添加笔记（登录成功后）
* 分权限删除笔记
* 修改笔记
* 使用 markdown
* 笔记拖拽

### 涉及到的知识点
* `sass`(css 预编译器)
* `webpack`（自动化构建工具，实现LESS,CSS,JS编译和压缩代码）
* `express` (基于 Node.js 平台的 web 开发框架)
* `html`
* `css`
* `Node.js`
* `jQuery`
* `sequelize`(Node的ORM框架Sequelize操作数据库)
* `passport`(实现第三方登录)

### 在根目录,创建 processes.json 配置文件,配置文件内容如下:
* 在package.json中增加了一条 "pm2": "pm2 start processes.json"
* 在启动就直接输入如下命令就好：
$ npm run pm2
```
{
    "apps": [
        {
            "name": "sticky-note",
            //名称
            "script": "./bin/www",
            //程序入库
            "cwd": "./",
            //根目录
            "watch": [
                "bin",
                "database",
                "model",
                "public",
                "routes",
                "views"
            ],
            //需要监控的目录
            "error_file": "./logs/app-err.log",
            //错误输出日志
            "out_file": "./logs/app-out.log",
            //日志
            "log_date_format": "YYYY-MM-DD HH:mm Z"
            //日期格式
        }
    ]
}

```


