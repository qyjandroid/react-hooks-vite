
<h1 align="center">Welcome to React + TypeScript + Vite 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />

  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> react hooks 项目模板

### 🏠 [Homepage](https://github.com/qyjandroid/react-hooks-vite)

## Prerequisites

- pnpm >=8.14.1
- node >=18.15.0

## Install

```sh
pnpm install
```

## Usage

```sh
pnpm dev
```

## 项目目录结构
```markdown
react-hooks-vite
├──  dist # 构建后的代码
├──  env  # 环境变量文件夹
│ │  ├──.env.dev # 本地环境
│ │  ├──.env.prod # 生产环境
│ │  └──.env.test # 测试环境
├── public # 存放公共资源
├── README.md
├── src
│ ├── assets # 存放会被 vite 处理的静态资源文件：一般是自己写的 js、css 或者图片等静态资源
│ │ ├── css # 全局样式目录
│ │ │  ├── variables.less # 全局less 变量目录,直接使用，不需要引用，全局已统一引入。
│ ├── components # 项目中通用的业务组件目录
│ ├── pages # 项目页面目录
│ ├── vite-env.d.ts # 项目中d.ts 声明文件目录
│ ├── types # 项目中声明文件
│ │ ├── service # 项目中服务相关声明文件
│ │ └── enum.ts # 项目枚举配置
│ ├── hooks # react hooks 封装目录
│ ├── services # 和后端相关的文件目录
│ │ ├── api # 调用后端接口定义目录
│ │ │ ├── index.ts
│ │ ├── axios.ts # 基于 axios 二次封装
│ │ ├── BaseService.ts # 基础请求服务类型
│ │ ├── ServerResponseManager.ts # 服务返回统一管理
│ │ ├── serviceConfig.ts # 服务地址配置文件
│ ├── store # redux 仓库
│ │ ├── reducers  # 项目中reducers
│ │ │  ├──user # 项目中用户reducer
│ │ ├── index.ts # 全局 store 导出
│ ├── utils # 全局通用工具函数目录
│ ├── App.tsx  # 应用程序入口，包含路由配置（可以把路由配置提取出来）
│ ├── main.tsx # 项目tsx文件入口
│ ├── index.less # 项目入口引入的less
├── index.html  # 程序入口文件
├── vite.config.ts  # vite 打包配置
├── pnpm-lock.yaml # 锁定 npm 包依赖版本文件
├── package.json
├── postcss.config.js # 自动兼容 CSS3 样式配置文件
├── .eslintrc.cjs # eslint配置文件
├── tsconfig.json # typescript配置文件
├── tsconfig.node.json # typescript配置文件
└── tsconfig.json # TS 配置文件
```

## Tips

- 项目中全局引入了 `variabless.less `,直接使用，不需要@import

- 构建项目时会自动兼容 CSS3 样式，所以不需要自己去写浏览器兼容样式

- 项目路由采用最新的V6.21.2 配置式路由，以及最新版路由的各种用法和懒加载界面代码。

- 项目中采用@reduxjs/toolkit 创建 redux 仓库，方便使用react-redux,编写store更加简单。

- 项目中使用vite打包工具，提升打包速度。

- 项目中针对 `axios` 做了二次封装

- 项目直接使用px即可
  
- 增加移动端兼容适配，在index.html中配置设计稿尺寸（pxToRem 为 100px=1rem）
  
  


## Author

👤 **quanyj <qyjandroid@163.com>**

* 掘金: https://juejin.cn/user/923245496789255
* Github: [@qyjandroid](https://github.com/qyjandroid)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/qyjandroid/react-hooks-vite/issues). 

## Show your support

Give a ⭐️ if this project helped you!




