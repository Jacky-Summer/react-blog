import React, { useState, useEffect } from 'react'
import { Row, Col, Button, message, List, Modal } from 'antd';
import axios from 'axios'
import servicePath from '../config/apiUrl'
import '../static/css/articleList.css'

const { confirm } = Modal 

function ArticleList(props) {

    const [list, setList] = useState([])

    const getArticleList = () => {
        axios({
            method: 'get',
            url: servicePath.getArticleList,
            withCredentials: true
        }).then(res => {
            setList(res.data.data)
        })
    }

    const delArticle = (id) => {
        confirm({
            title: '你确定要删除该博客文章',
            content: '点击OK按钮，文章删除后不可恢复',
            onOk() {
                axios({
                    method: 'post',
                    url: servicePath.delArticle + id,
                    withCredentials: true
                }).then(res => {
                    message.success('删除成功')
                    getArticleList()
                })
            }
        })
    }

    //修改文章
    const updateArticle = (id) =>{
        props.history.push('/index/add/'+ id)
    }

    useEffect(() => {
        getArticleList()
    }, [])

    return (
        <div>
            <List
                header={
                    <Row className="list-div">
                        <Col span={8}>
                            <b>标题</b>
                        </Col>
                        <Col span={4}>
                            <b>类别</b>
                        </Col>
                        <Col span={4}>
                            <b>发布时间</b>
                        </Col>
                        <Col span={4}>
                            <b>浏览量</b>
                        </Col>
                        <Col span={4}>
                            <b>操作</b>
                        </Col>
                    </Row>
                }
                bordered
                dataSource={list}
                renderItem={item => (
                    <List.Item>
                        <Row className="article-list">
                            <Col span={8}>
                                {item.title}
                            </Col>
                            <Col span={4}>
                                {item.type_name}
                            </Col>
                            <Col span={4}>
                                {item.add_time}
                            </Col>
                            <Col span={4}>
                                {item.view_count}
                            </Col>
                            <Col span={4}>
                                <Button type="primary" className="btn-list" onClick={()=>updateArticle(item.id)}>修改</Button>
                                <Button type="danger" className="btn-list" onClick={()=>delArticle(item.id)}>删除</Button>
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default ArticleList