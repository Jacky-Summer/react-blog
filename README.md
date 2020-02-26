# react-blog
React Hook+Next.js+Ant Design+Egg.js开发博客系统

## 运行该项目所需配置的开发环境

该项目的中台搭建需要本地建立mysql数据库, 数据库`react_blog`所包含表如下：

### type表（文章类型表）

- id: 类型编号 int类型
- type_name: 文章类型名称 varchar类型
- order_num: 类型排序编号 int类型

### article表（文章内容表）

- id: 文章编号 int类型
- type_id: 文章类型编号 int类型
- title: 文章标题，varchar类型
- article_content: 文章主体内容，text类型
- introduce: 文章简介，text类型
- add_time: 文章发布时间，int(11)类型
- view_count: 浏览次数， int类型

### admin_user表（用户后台管理表）

- id: 用户id int类型
- userName: 用户名称 varchar类型
- password: 用户密码 varchar类型

