import { Avatar, Divider } from 'antd'
import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="author-div comm-box">
            <div><Avatar size={100} src="https://pic4.zhimg.com/v2-42bfb8afe10e15a5d7c8ea502fa606a8_xl.jpg"></Avatar></div>
            <div className="author-introduction">
                一个前端技术开发者，热爱IT技术，兴趣爱好是投资理财、跑步，日常除了写代码，还会写技术博客和公众号推文
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account active" onClick={()=>{window.location.href = 'https://github.com/Jacky-Summer'}} />
                <Avatar size={28} icon="zhihu"  className="account" />
                <Avatar size={28} icon="wechat"  className="account" />
            </div>
        </div>
    )
}

export default Author