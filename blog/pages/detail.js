import React from 'react'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Affix } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import '../static/style/pages/detail.css'

const Detail = () => {
    
    let markdown = '# 测试MarkDown语法解析是否生效\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n'+
        '\`console.log(111)\` \n\n'+
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n'+
        '***\n\n\n' +
        '# 1. React Hook\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '# 2. Ant Design\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# 3. Egg.js\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# 4. Next.js\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# 5. React Hook\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '# 6. Ant Design\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# 7. Egg.js\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# 8. Next.js\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '``` var a=11; ```'

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
                    ES6系列之一文彻底弄懂Iterator
                    </div>
                    <div className="list-icon center">
                        <span><Icon type="calendar" /> 2020-02-15</span>
                        <span><Icon type="read" /> 博文</span>
                        <span><Icon type="fire" /> 5498人</span>
                    </div>
                    <div className="detail-content" >
                        <ReactMarkdown
                            source={markdown}
                            escapeHtml={false}
                        />
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
                <MarkNav
                    className="article-menu"
                    source={markdown}
                    ordered={false}
                />
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
  </>
  )

}

export default Detail