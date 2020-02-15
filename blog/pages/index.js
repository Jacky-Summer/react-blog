import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List, Icon } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/index.css'

const Home = () => {

  const [mylist, setMylist] = useState(
    [
      {"title": 'ES6系列之一文彻底弄懂Iterator', "context": "一个数据结构只要具有 iterator 接口，就可以用for...of循环遍历它的成员。也就是说，并不是所有的对象都能使用for...of循环，只有实现了Iterator接口的对象，才能够for...of来进行遍历取值。虽然forEach循环不能循环字符串，但字符串可以转为数组再使用forEach即可输出，但这操作并不舒服每次使用都要转换。而且forEach循环存在缺点：不能使用break，continue语句跳出循环，或者使用return从函数体返回。而for循环在有些情况写代码会增加复杂度，而且不能循环对象。相比下，for...in的缺点是不仅遍历数字键名，还会遍历手动添加的自定义键，甚至包括原型链上的键。for...in主要还是为遍历对象而设计的，并不太适用于遍历数组。"}, 
      {"title": 'ES6系列之一文彻底弄懂Iterator', "context": "一个数据结构只要具有 iterator 接口，就可以用for...of循环遍历它的成员。也就是说，并不是所有的对象都能使用for...of循环，只有实现了Iterator接口的对象，才能够for...of来进行遍历取值。虽然forEach循环不能循环字符串，但字符串可以转为数组再使用forEach即可输出，但这操作并不舒服每次使用都要转换。而且forEach循环存在缺点：不能使用break，continue语句跳出循环，或者使用return从函数体返回。而for循环在有些情况写代码会增加复杂度，而且不能循环对象。相比下，for...in的缺点是不仅遍历数字键名，还会遍历手动添加的自定义键，甚至包括原型链上的键。for...in主要还是为遍历对象而设计的，并不太适用于遍历数组。"}, 
      {"title": 'ES6系列之一文彻底弄懂Iterator', "context": "一个数据结构只要具有 iterator 接口，就可以用for...of循环遍历它的成员。也就是说，并不是所有的对象都能使用for...of循环，只有实现了Iterator接口的对象，才能够for...of来进行遍历取值。虽然forEach循环不能循环字符串，但字符串可以转为数组再使用forEach即可输出，但这操作并不舒服每次使用都要转换。而且forEach循环存在缺点：不能使用break，continue语句跳出循环，或者使用return从函数体返回。而for循环在有些情况写代码会增加复杂度，而且不能循环对象。相比下，for...in的缺点是不仅遍历数字键名，还会遍历手动添加的自定义键，甚至包括原型链上的键。for...in主要还是为遍历对象而设计的，并不太适用于遍历数组。"}, 
      {"title": 'ES6系列之一文彻底弄懂Iterator', "context": "一个数据结构只要具有 iterator 接口，就可以用for...of循环遍历它的成员。也就是说，并不是所有的对象都能使用for...of循环，只有实现了Iterator接口的对象，才能够for...of来进行遍历取值。虽然forEach循环不能循环字符串，但字符串可以转为数组再使用forEach即可输出，但这操作并不舒服每次使用都要转换。而且forEach循环存在缺点：不能使用break，continue语句跳出循环，或者使用return从函数体返回。而for循环在有些情况写代码会增加复杂度，而且不能循环对象。相比下，for...in的缺点是不仅遍历数字键名，还会遍历手动添加的自定义键，甚至包括原型链上的键。for...in主要还是为遍历对象而设计的，并不太适用于遍历数组。"}
    ]
  )

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
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span><Icon type="calendar"/> 2020-02-14</span>
                    <span><Icon type="read"/> 技术博文</span>
                    <span><Icon type="fire"/> 2000 人</span>
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

export default Home