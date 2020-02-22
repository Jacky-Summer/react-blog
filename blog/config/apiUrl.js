let ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
    getArticleById: ipUrl + 'getArticleById/', // 文章详细页内容接口 ,需要接收参数
    getArticleList: ipUrl + 'getArticleList',  // 首页文章列表接口
    getListById: ipUrl + 'getListById/',        // 根据类别ID获得文章列表
    getTypeInfo: ipUrl + 'getTypeInfo'         // 文章分类信息
}

export default servicePath