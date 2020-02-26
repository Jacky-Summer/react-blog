# react-blog
React Hook+Next.js+Ant Design+Egg.js开发博客系统

## 技术栈

1. 博客前台搭建使用React服务器端渲染框架Next.js，项目全部使用Hooks语法来完成，
2. 通过Ant Design搭建前台和后台界面
3. 使用Koa的上层框架egg.js来完成中台接口

## 项目结构

- 博客前台 (blog): 用户使用，博客展示
- 接口中台 (service): 数据接口，用户逻辑
- 后台管理 (admin): 文章管理

## 功能展示

1. 通过后台添加博客文章，添加内容后可选择文章类别，完成后可展示到博客前台；
2. 后台可对文章进行修改和删除。
3. 实现了解析markdown语法和文章目录功能

<p align="center">
	<img src="https://github.com/Jacky-Summer/react-blog/blob/master/img/1582678575(1).jpg" alt=""  width="800"/>
    <img src="https://github.com/Jacky-Summer/react-blog/blob/master/img/1582678812(1).jpg" alt=""  width="800">
    <img src="https://github.com/Jacky-Summer/react-blog/blob/master/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200226090354.png" alt=""  width="800">
    <img src="https://github.com/Jacky-Summer/react-blog/blob/master/img/%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_20200226090425.png" alt=""  width="800">
</p>

## 运行该项目所需配置的开发环境

1. 该项目的中台搭建需要本地建立mysql数据库（可直接导入该数据库：db/react_blog.sql）  

数据库`react_blog`所包含表如下：

- type表（文章类型表）
- article表（文章内容表）
- admin_user表（用户后台管理表）

2. 项目需要同时开启中台和（前台/后台）运行环境


