import React from 'react'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Affix } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import 'markdown-navbar/dist/navbar.css'
import '../static/style/pages/detail.css'
import 'highlight.js/styles/monokai-sublime.css'
import MarkNav from 'markdown-navbar'
import marked from 'marked'
import hljs from 'highlight.js'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import Tocify from '../components/tocify.tsx'


const Detail = (props) => {

    const renderer  = new marked.Renderer()
    const tocify = new Tocify()
    renderer.heading = function(text, level) {
        const anchor = tocify.add(text, level)
        return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
    };

    marked.setOptions({
        renderer: renderer,
        pedantic: false,
        gfm: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        sanitize: false,
        highlight: function(code) {
            return hljs.highlightAuto(code).value;
        }
    });
    
    let html = marked(props.article_content)

  return (
    <>
      <Head>
        <title>Detail</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
                <div className="bread-div">
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href="/">首页</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>博文</Breadcrumb.Item>
                        <Breadcrumb.Item>XXXXXX</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    <div className="detail-title">
                    {props.title}
                    </div>
                    <div className="list-icon center">
                        <span><Icon type="calendar" /> {props.add_time}</span>
                        <span><Icon type="read" /> {props.type_name}</span>
                        <span><Icon type="fire" /> {props.view_count}人</span>
                    </div>
                    <div className="detail-content" dangerouslySetInnerHTML={{__html: html}}>    
                    </div>
                </div>
            </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detail-nav comm-box">
                <div className="nav-title">文章目录</div>
                <div className="toc-list">
                    {tocify && tocify.render()}
                </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
  </>
  )
}

Detail.getInitialProps = async (context) => {

    let id = context.query.id
    const promise = new Promise(resolve => {
        axios(servicePath.getArticleById + id).then(
            (res) => {
                resolve(res.data.data[0])
            }
        )
    })

    return await promise
}

export default Detail