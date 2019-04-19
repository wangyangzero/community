import React, {Component} from 'react';
import {List, Avatar} from 'antd';
import ReactMarkdown from 'react-markdown'

class TPost extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        const input = '# This is a header\n\nAnd this is a paragraph'
        const data = [
            {
                time: '2019/4/6',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88103c0bca.jpg",
                content:"你也可以使用WaterFallList实现，看Readme和examples就知道了 ，还有效果图",
            },
            {
                time: '2019/4/5',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88104017ab.jpg",
                content:"初学者不要自己配置 开发环境, 直接从 expo开始, 这样会简单很多.",
            },
            {
                time: '2019/4/4',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88104980da.jpg",
                content:" 确实是jdk的版本关系，你echo %JAVA_HOME%看一下版本",
            },
            {
                time: '2019/4/3',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca881051c6a7.jpg",
                content:"你是怎么解决的,我试了很多次都不能成功",
            },
            {
                time: '2019/4/2',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88294c3415.jpg",
                content:"如何在android原生端获取到react native中的某个view",
            },
        ];
        return(
            <div className="TP">
                <div className="content">
                    <div className="header">
                        <Avatar src="https://i.loli.net/2019/04/05/5ca73d1d864e3.jpg" size={64}/>
                        <span>精品分享</span>
                        <ReactMarkdown source={input}/>
                    </div>
                </div>
                <div className="sideBar">
                    <div id={"upToDateMessage"}><h4 className={"message"}>最新留言</h4></div>
                    <div className={"userMessage"}>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        avatar={<Avatar src={item.avatar} />}
                                        title={<a href={item.link}>{item.time}</a>}
                                        description={item.content}
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default TPost;