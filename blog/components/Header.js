import React from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import '../static/style/components/header.css'

const Header = () => (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">Jacky</span>
                <span className="header-text">关注技术发展，专注前端开发。</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Icon type="home"/>
                        首页
                    </Menu.Item>
                    <Menu.Item key="money">
                        <Icon type="money-collect"/>
                        理财
                    </Menu.Item>
                    <Menu.Item key="life">
                        <Icon type="smile"/>
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header