'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async getArticleList() {
    let sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              "FROM_UNIXTIME(article.add_time,'%Y-%m-%d %H:%i:%s' ) as add_time," +
              'article.view_count as view_count ,' +
              'type.type_name as type_name ' +
              'FROM article LEFT JOIN type ON article.type_id=type.id'
    const results = await this.app.mysql.query(sql)
    this.ctx.body = {
        data: results
    }
  }

  async getArticleById() {
    // 先配置路由的动态传值，然后再接收值
    let id = this.ctx.params.id

    let sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              'article.article_content as article_content,' +
              "FROM_UNIXTIME(article.add_time,'%Y-%m-%d %H:%i:%s' ) as add_time," +
              'article.view_count as view_count ,'+
              'type.type_name as type_name ,'+
              'type.id as type_id '+
              'FROM article LEFT JOIN type ON article.type_id = type.id '+
              'WHERE article.id=' + id

    const result = await this.app.mysql.query(sql)
    this.ctx.body = {
        data: result
    }
  }

  async getListById() {
    let id = this.ctx.params.id

    let sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              "FROM_UNIXTIME(article.add_time,'%Y-%m-%d %H:%i:%s' ) as add_time," +
              'article.view_count as view_count ,'+
              'type.type_name as type_name ,'+
              'type.id as type_id '+
              'FROM article LEFT JOIN type ON article.type_id = type.id '+
              'WHERE type.id=' + id

    const result = await this.app.mysql.query(sql)
    this.ctx.body = {
        data: result
    }
  }

  async getTypeInfo() {
    const result = await this.app.mysql.select('type')
    this.ctx.body = {
      data: result
    }
  }
}

module.exports = HomeController;
