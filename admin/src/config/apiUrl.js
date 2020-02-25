let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
    checkLogin: ipUrl + 'checkLogin', //  检查用户名密码是否正确
    getTypeInfo: ipUrl + 'getTypeInfo', //  获得文章类别信息,
    addArticle: ipUrl + 'addArticle',  //  添加文章,
    updateArticle: ipUrl + 'updateArticle', // 更新文章,
    getArticleList: ipUrl + 'getArticleList', // 获取文章列表
    delArticle: ipUrl + 'delArticle/', // 删除指定文章
    getArticleById: ipUrl + 'getArticleById/' // 修改文章
}

export default servicePath