import React, { useState, useEffect } from 'react'
import { Row, Col ,Input, Select ,Button ,DatePicker, message } from 'antd';
import 'antd/dist/antd.css'
import '../static/css/addArticle.css'
import marked from 'marked'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'


const { Option } = Select;
const { TextArea } = Input

function AddArticle(props) {

    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate,setShowDate] = useState()   //发布日期
    const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType,setSelectType] = useState('请选择类型') //选择的文章类别

    marked.setOptions({
        renderer: new marked.Renderer(),
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

    const changeContent = (e) => {
        setArticleContent(e.target.value)
        let html = marked(e.target.value)
        setMarkdownContent(html)
    }

    const changeIntroduce = (e)=>{
        setIntroducemd(e.target.value)
        let html=marked(e.target.value)
        setIntroducehtml(html)
    }

    const selectTypeHangdler = (value) => {
        setSelectType(value)
    }

    const saveArticle = () => {
        if(selectedType === '请选择类型'){
            message.error('必须选择文章类别')
            return false
        }else if(!articleTitle){
            message.error('文章名称不能为空')
            return false
        }else if(!articleContent){
            message.error('文章内容不能为空')
            return false
        }else if(!introducemd){
            message.error('简介不能为空')
            return false
        }else if(!showDate){
            message.error('发布日期不能为空')
            return false
        }
        let dataProps = {}   //传递到接口的参数
        dataProps.type_id = selectedType 
        dataProps.title = articleTitle
        dataProps.article_content = articleContent
        dataProps.introduce = introducemd
        let datetext = showDate.replace('-','/') //把字符串转换成时间戳
        dataProps.add_time = (new Date(datetext).getTime())/1000


        if(articleId == 0){ // 如果等于0说明时新添加，如果不等于0，说明是修改
            dataProps.view_count = Math.ceil(Math.random()*100)+1000
            axios({
                method:'post',
                url:servicePath.addArticle,
                data:dataProps,
                withCredentials: true
            }).then(
                res=>{
                    setArticleId(res.data.insertId)
                    if(res.data.isScuccess){
                        message.success('文章添加成功')
                    }else{
                        message.error('文章添加失败');
                    }

                }
            )
        }else {
            dataProps.id = articleId
            axios({
                method: 'post',
                url: servicePath.updateArticle,
                data: dataProps,
                withCredentials: true
            }).then(
                res => {
                    if(res.data.isScuccess) {
                        message.success('文章保存成功')
                    }else {
                        message.error('文章保存失败')
                    }
                }
            )
        }
    }

    
    const getArticleById = (id) => {
        axios({
            method: 'get',
            url: servicePath.getArticleById + id,
            withCredentials: true
        }).then(res => {
            let articleInfo = res.data.data[0]
            setArticleTitle(articleInfo.title)
            setArticleContent(articleInfo.content)
            let htmlContent = marked(articleInfo.content)
            setMarkdownContent(htmlContent)
            setIntroducemd(articleInfo.introduce)
            let htmlIntroduce = marked(articleInfo.introduce)
            setIntroducehtml(htmlIntroduce)
            setShowDate(articleInfo.add_time)
            setSelectType(articleInfo.type_id)
        })  
    }

    const getTypeInfo = () => {
        axios({
            method: 'get',
            url:servicePath.getTypeInfo,
            header:{ 'Access-Control-Allow-Origin':'*' },
            withCredentials: true
        }).then(res => {
            if(res.data.data === '没有登录') {
                localStorage.removeItem('openId')
                props.history.push('/')  
            }else {
                setTypeInfo(res.data.data)
            }
        })
    }

    useEffect(() => {
        getTypeInfo()
        //获得文章ID
        let tmpId = props.match.params.id
        if(tmpId){
            setArticleId(tmpId)
            getArticleById(tmpId)
        } 
        
    }, [])

    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input 
                                placeholder="博客标题" 
                                size="large" 
                                value={articleTitle}
                                onChange={e=>{setArticleTitle(e.target.value)}}
                            />
                        </Col>
                        <Col span={4}> 
                            <Select value={selectedType} size="large" onChange={selectTypeHangdler}>
                            {
                                typeInfo.map((item, index) => {
                                    return (
                                        <Option value={item.id} key={index}>{item.type_name}</Option>
                                    )
                                })
                            }
                            </Select>
                        </Col>
                    </Row>
                    <Row gutter={10} className="article-container">
                        <Col span={12}>
                            <TextArea 
                                value={articleContent}
                                className="markdown-content" 
                                rows={35}  
                                placeholder="文章内容"
                                onPressEnter={changeContent}
                                onChange={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div 
                                className="show-html"
                                dangerouslySetInnerHTML={{__html: markdownContent}}
                            >    
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span={24}>
                            <Button  size="large">暂存文章</Button>&nbsp;
                            <Button type="primary" size="large" onClick={saveArticle}>发布文章</Button>
                        </Col>
                        <Col span={24}>
                            <TextArea 
                                rows={4} 
                                value={introducemd}
                                placeholder="文章简介"
                                className="textarea-introduce"
                                onChange={changeIntroduce}
                                onPressEnter={changeIntroduce}
                            />
                            <div className="introduce-html" dangerouslySetInnerHTML={{__html: introducehtml}}></div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker
                                    onChange={(date, dateString) => { setShowDate(dateString) }}
                                    placeholder="发布日期"
                                    size="large" 
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default AddArticle