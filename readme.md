# 前言

这是一个由 `umi` + `typescript` 写的一个登录注册的 demo，写好了一些基本的配置和公共方法，新项目可以用它来做模板（直接拉下来在上面改～），或者 react 初学者可以用来做入门的参考～

# 技术栈

- \- umi（可插拔的企业级 react 应用框架架）
  - \- roadhog（是一个包含 dev、build 和 test 的命令行工具，他基于 react-dev-utils，和 create-react-app 的体验保持一致。你可以想象他为可配置版的 create-react-app）
  - \- dva（基于 redux、redux-saga 和 react-router 的轻量级前端框架）
- \- typescript
- \- react

umi 官网 [https://umijs.org/zh/](https://umijs.org/zh/)

dva 官网 [https://dvajs.com/](https://dvajs.com/)

# 项目结构

- \- config 开发/打包配置
  - \- config.ts umi的配置，主要是打包/webpack相关的，具体参考官网
  - \- routes.config.ts 路由
- \- mock mock接口的配置
- \- src
  - \- config 项目配置
  - \- layouts 全局布局
- \- 其他的参考 umi 官网的目录约定 
  

# react 小组的内部讨论

**类型声明文件**

部分npm包自带，部分需要手动安装，部分没有。对于没有声明文件的npm包，可以在 `typing.d.ts` 中声明，让其不会报错

**进入时校验登录状态**

- 在 `app.js` 的 `render` 中做校验，校验完才开始渲染页面，刷新时当前页可能依赖用户信息

**权限路由（待研究）**

**路由、全局守卫（待研究）**

**styledcomponent（一个写样式的东西）**

**umi 的 dav 是否暴露TS接口（待研究）**

**放出webpack配置**

"inspect": "umi inspect --production > output.js",

