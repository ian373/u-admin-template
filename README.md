# UAdmin Template

# 简介

这是一个简单的前端后台管理模板。

**参考项目：** [Vben Admin](https://vvbin.cn/doc-next/)，[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

**重点依赖：**vue3, vue-router

**包管理工具：**pnpm

**组件库：**Element plus

# 启动项目

> 以pnpm为例

```bash
git clone https://gitee.com/ian171/u-admin-template.git
cd u-admin-template
pnpm i    # 安装依赖
pnpm dev   # 启动项目

# ==================
# 打包
pnpm build
```

# 项目配置

## 标题

`/index.html`的title标签

## 路由

### 历史模式

`@/router/index.ts`

默认使用的是HTML5模式，记得在服务器上添加一些配置：[vue-router文档](https://router.vuejs.org/zh/guide/essentials/history-mode.html#%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE%E7%A4%BA%E4%BE%8B)

### 常规路由

`@/router/routes/constRoutes.ts`

任何人都可以访问这些路由，添加`hidden: true`，那么该路由不会渲染在菜单中。

### 角色路由

`@/router/routes/roleRoutes.ts`

只有对应权限的角色，才能在菜单中访问对应的路由，不能访问的路由不渲染在菜单中。

路由`meta`配置：

| 属性  | 类型     | 说明                                                         |
| ----- | -------- | ------------------------------------------------------------ |
| title | string   | 在菜单中显示的名称。                                         |
| roles | number[] | 访问该路由需要的权限。<br />如果roles[0]为-1，那么所有比rols[1]小的数字的角色都可以访问。<br />如果roles[0]不为-1，则只有在roles中的角色才可以访问。 |
| cache | boolean  | 是否开启此路有的缓存。(keep-alive标签)                       |

路由理论上可以任意嵌套，但是建议最多嵌套三级，太多级UI会有问题。

在多级路由中编写的组件，请用`#/layout/RouterViewComp.vue`组件代替vue-router的`<router-view>`标签，因为`RouterViewComp`封装了一些路由的动画。

### 菜单顺序

菜单显示的顺序和在路由中编写的顺序相同，且常规路由在前，角色路由在后。

### vite配置

`/vite.config.ts`

根据实际情况修改：

- 打包路径`base`

- 开发服务配置`server`

### env文件配置

`/.env.development`，`/.env.production`

详情参考注释。
