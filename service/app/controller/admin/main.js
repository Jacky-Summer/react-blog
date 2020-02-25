'use strict'

const Controller = require('egg').Controller

class MainController extends Controller {
    async index() {
        //首页的文章列表数据
        this.ctx.body='hi api'
    }
    async checkLogin() {
        let userName = this.ctx.request.body.userName
        let password = this.ctx.request.body.password
        let sql = "SELECT userName FROM admin_user WHERE userName='" + userName +
                  "'AND password='" + password + "'"
        const res = await this.app.mysql.query(sql)
        if(res.length>0){
            //登录成功,进行session缓存
            let openId = new Date().getTime()
            this.ctx.session.openId = { 'openId':openId }
            this.ctx.body = {'data':'登录成功','openId':openId}
  
        }else{
            this.ctx.body={data:'登录失败'}
        } 
    }
    async getTypeInfo() {
        const resType = await this.app.mysql.select('type')
        this.ctx.body = {data: resType}
    }
    async addArticle() {
        let tmpArticle= this.ctx.request.body
        const result = await this.app.mysql.insert('article', tmpArticle)
        const insertSuccess = result.affectedRows === 1
        const insertId = result.insertId

        this.ctx.body = {
            isScuccess:insertSuccess,
            insertId:insertId
        }
    }
    async updateArticle() {
        let tmpArticle= this.ctx.request.body
        const result = await this.app.mysql.update('article', tmpArticle)
        const updateSuccess  = result.affectedRows === 1

        this.ctx.body = {
            isScuccess: updateSuccess 
        }
    }
    async getArticleList() {
        let sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              "FROM_UNIXTIME(article.add_time,'%Y-%m-%d %H:%i:%s' ) as add_time," +
              'article.view_count as view_count ,' +
              'type.type_name as type_name ' +
              'FROM article LEFT JOIN type ON article.type_id=type.id ' +
              'ORDER BY article.id'
        const results = await this.app.mysql.query(sql)
        this.ctx.body = {
            data: results
        }
    }
    async delArticle() {
        let id = this.ctx.params.id
        const results = await this.app.mysql.delete('article', {'id': id})
        this.ctx.body = {
            data: results
        }
    }
    async getArticleById() {
        let id = this.ctx.params.id
        let sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              'article.article_content as content,' +
              "FROM_UNIXTIME(article.add_time,'%Y-%m-%d') as add_time," +
              'article.view_count as view_count ,' +
              'type.type_name as type_name, ' +
              'type.id as type_id ' +
              'FROM article LEFT JOIN type ON article.type_id=type.id ' +
              'WHERE article.id=' + id
        const results = await this.app.mysql.query(sql)
        this.ctx.body = {
            data: results
        }
    }

}

module.exports = MainController