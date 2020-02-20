import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import Link from 'next/link'
import axios from 'axios'
import '../static/style/pages/index.css'

const Home = (list) => {

  const [mylist, setMylist] = useState(list.data)

  return (
    <>
      <Head>
        <title>Home</title>
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
                    <span><Icon type="fire"/> {item.view_count}</span>
                  </div>
                  <div className="list-context">{item.context}</div>
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
    axios('http://127.0.0.1:7001/default/getArticleList').then(
      (res) => {
        resolve(res.data)
      }
    )
  })
  return await promise
}

export default Home