#### 基本框架
react + redux + router + axios + antd + webpack

#### 开始
- npm i
- npm start
- 输入localhost:4333

#### 提交代码
不要提交自己的app.config.js,不要提交自己的app.config.js,不要提交自己的app.config.js

#### 打包
打包需要将app.config.js里面的server修改为空
```
npm run build
```
#### 报错
node-sass被墙了,安装时失败可以使用淘宝的镜像

#### 配置
1. webpack.dev.js是开发配置
2. webpack.pro.js是生产配置

#### 注意(bug修改)
- 富文本编辑器有些自定义的功能，在项目中并不需要,修改富文本react-lz-editor的源码，将所有的message.[,event]全部去除

#### 自定义工作台
- 在左边导航栏出现的需要在module/layout/sidebar/json中去添加字段
- 需要在module/workbench/Workbench中将组件引入,同时将Route创建将this.subs中添加上link