import React, { useState } from 'react'
import { Button, Input, Card, Spin, Icon } from 'antd'
import 'antd/dist/antd.css'
import '../static/login.css'

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const checkLogin = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        },1000)
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