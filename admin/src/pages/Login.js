import React, { useState } from 'react'
import { Button, Input, Card, Spin, Icon, message } from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import 'antd/dist/antd.css'
import '../static/login.css'

function Login(props) {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const checkLogin = () => {
        setIsLoading(true)
        
        if(!userName) {
            message.error('用户名不能为空')
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
            return false
        }else if(!password) {
            message.error('密码不能为空')
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
            return false
        }

        let dataProps = {
            'userName': userName,
            'password': password
        }
        axios({
            method: 'post',
            url: servicePath.checkLogin,
            data: dataProps,
            withCredentials: true 
        }).then(res => {
            if(res.data.data === '登录成功') {
                localStorage.setItem('openId', res.data.openId)
                props.history.push('/index')
            }else {
                message.error('用户名密码错误')
                setTimeout(() => {
                    setIsLoading(false)
                }, 500);
            }
        })


    }

    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="React Blog" bordered style={{ width: 400 }}>
                    <Input 
                        id="userName"
                        size="large"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                        placeholder="Enter your userName"
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                    <Input 
                        id="password"
                        className="input-password"
                        size="large"
                        prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                        placeholder="Enter your password"
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                    <Button type="primary" size="large" block onClick={checkLogin}>Login</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login