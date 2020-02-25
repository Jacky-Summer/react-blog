import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import '../static/style/pages/index.css'
import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/monokai-sublime.css'

const Home = (list) => {

  const [mylist, setMylist] = useState(list.data)

  const renderer  = new marked.Renderer()

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

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="referrer" content="no-referrer" /> 
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <List
              header={<div>最新日志</div>}
              dataSource={mylist}
              itemLayout="vertical"
              renderItem={item => (
                <List.Item>
                  <div className="list-title">
                    <Link href={{ pathname: '/detail', query: { id: item.id } }}><a>{item.title}</a></Link>
                  </div>
                  <div className="list-icon">
                    <span><Icon type="calendar"/> {item.add_time}</span>
                    <span><Icon type="read"/> {item.type_name}</span>
                    <span><Icon type="fire"/> {item.view_count} 人</span>
                  </div>
                  <div className="list-context" dangerouslySetInnerHTML={{__html:marked(item.introduce)}}></div>
                </List.Item>
              )}
          />
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
  </>
  )

}

Home.getInitialProps = async () => {
  const promise = new Promise(resolve => {
    axios(servicePath.getArticleList).then(
      (res) => {
        resolve(res.data)
      }
    )
  })
  return await promise
}

export default Home