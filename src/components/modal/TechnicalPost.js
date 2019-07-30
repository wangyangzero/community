/**
 * 留言板
 */

import React, {Component} from 'react';
import {List, Avatar, Icon, Tag,} from 'antd';
import {Link} from 'react-router-dom'
import './TechnicalPost.css'

class TechnicalPost extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const IconText = ({ type, text }) => (
            <span><Icon type={type} style={{ marginRight: 8 }} />{text}</span>);
        const listData = [
            {
                id: '1',
                title: '80+机器学习数据集，还不快收藏',
                avatar: "https://i.loli.net/2019/04/06/5ca877e06ed4f.jpg",
                description: "2019/4/4",
                content: "对于从事机器学习的小伙伴来说，机器学习必须以大量的数据为基础，否则构建再好的模型也不能达到你想要" +
                    "的效果。同时，不同质量的数据集也会影响到模型训练的效果。之前营长就为大家推荐过一款机器学习数据集集合项目，" +
                    "如今该项目的作者已经如他所言更新内容啦！不信你看~",
                like:"128",
                star:"56",
                comment:"27",
                tag:"React",
                tagColor:"purple",
            }
            ,
            {
                id: '2',
                title: '清华、北大、浙大的计算机课程资源集都在这里了',
                avatar:"https://i.loli.net/2019/04/06/5ca877e0cc40e.jpg",
                description:"2019/4/5",
                content:"此前，一份介绍中科大的相关课程资源的 repo 火了，但不知后来是不是因为太火，居然被 404 了，如果你" +
                    "不幸错过了，别紧张，GitHub 上还有其他网友另建了相关 repo，搜索即可找到。",
                like:"178",
                star:"76",
                comment:"37",
                tag:"Vue",
                tagColor:"gold",
            },
            {
                id: '3',
                title: 'Debug神经网络的五项基本原则',
                avatar:"https://i.loli.net/2019/04/06/5ca877e27c961.jpg",
                description:"2019/4/6",
                content:"很多情况下，研究人员会遇到一个问题：使用机器学习框架实现的神经网络可能与理论模型相去甚远。验证这" +
                    "款模型是否可靠，直接方式就是不断修正和调参。例如，在 2018 年 8 月，谷歌大脑的 Ian Goodfellow 等人，通过" +
                    "引入由覆盖性引导的模糊方法（coverage-guided fuzzing，CGF），推出了一款自动为神经网络 debug 的开源库 TensorFuzz。",
                like:"228",
                star:"156",
                comment:"127",
                tag:"Python",
                tagColor:"volcano",
            },
            {
                id: '4',
                title: 'R和Python谁更好？这次让你「鱼与熊掌」兼得',
                avatar:"https://i.loli.net/2019/04/06/5ca877ef85b0a.jpg",
                description:"2019/4/7",
                content:"如果你从事在数据科学领域，提到编程语言，一定能马上想到 R 语言和 Python语言（以下分别简称 R、Python）" +
                    "。现在更多时候大家都把它们两个放在一起对比，进行“二选一”，而不是把两个都为自己所用。其实，无论是 R " +
                    "还是 Python，两个都是很优秀的工具。",
                like:"1228",
                star:"356",
                comment:"127",
                tag:"Java",
                tagColor:"cyan",
            },
        ];
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
            <div className={"TP"}>
                <div className={"content"}>
                    <div className={"header"}>
                <Avatar src="https://i.loli.net/2019/04/05/5ca73d1d864e3.jpg" size={64}/>
                <span>精品分享</span>
                    </div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[<IconText type="star-o" text={item.like}/>, <IconText type="like-o" text={item.star} />, <IconText type="message" text={item.comment}/>]}
                            extra={ <Tag color={item.tagColor}>{item.tag}</Tag>}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                title={<Link to={"/modal/technicalPost/" + item.id}>{item.title}</Link>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />
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

export default TechnicalPost;