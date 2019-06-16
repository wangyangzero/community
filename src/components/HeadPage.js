import React ,{Component} from 'react';
import {Avatar, Carousel, List, Tag} from 'antd';
import './HeadPage.css'

class HeadPage extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        const data = [
            {
                title: '80+机器学习数据集，还不快收藏',
                avatar:"https://i.loli.net/2019/04/06/5ca877e06ed4f.jpg",
                description:"对于从事机器学习的小伙伴来说，机器学习必须以大量的数据为基础，否则构建再好的模型也不能达到你想要" +
                    "的效果。同时，不同质量的数据集也会影响到模型训练的效果。之前营长就为大家推荐过一款机器学习数据集集合项目，" +
                    "如今该项目的作者已经如他所言更新内容啦！不信你看~",
            },
            {
                title: '清华、北大、浙大的计算机课程资源集都在这里了',
                avatar:"https://i.loli.net/2019/04/06/5ca877e0cc40e.jpg",
                description:"此前，一份介绍中科大的相关课程资源的 repo 火了，但不知后来是不是因为太火，居然被 404 了，如果你" +
                    "不幸错过了，别紧张，GitHub 上还有其他网友另建了相关 repo，搜索即可找到。",
            },
            {
                title: 'Debug神经网络的五项基本原则',
                avatar:"https://i.loli.net/2019/04/06/5ca877e27c961.jpg",
                description:"很多情况下，研究人员会遇到一个问题：使用机器学习框架实现的神经网络可能与理论模型相去甚远。验证这" +
                    "款模型是否可靠，直接方式就是不断修正和调参。例如，在 2018 年 8 月，谷歌大脑的 Ian Goodfellow 等人，通过" +
                    "引入由覆盖性引导的模糊方法（coverage-guided fuzzing，CGF），推出了一款自动为神经网络 debug 的开源库 TensorFuzz。",
            },
            {
                title: 'R和Python谁更好？这次让你「鱼与熊掌」兼得',
                avatar:"https://i.loli.net/2019/04/06/5ca877ef85b0a.jpg",
                description:"如果你从事在数据科学领域，提到编程语言，一定能马上想到 R 语言和 Python语言（以下分别简称 R、Python）" +
                    "。现在更多时候大家都把它们两个放在一起对比，进行“二选一”，而不是把两个都为自己所用。其实，无论是 R " +
                    "还是 Python，两个都是很优秀的工具。"
            },
        ];

        return(
            <div className="headpage-content">
                <div className="headpage-carousel">
                    <Carousel effect="fade" autoplay >
                        <div><img src={"https://i.loli.net/2019/04/06/5ca879d294776.jpg"} alt={"smile"} className={"photo"}/></div>
                        <div><img src={"https://i.loli.net/2019/04/06/5ca879d3d8ac5.jpg"}alt={"smile"} className={"photo"}/></div>
                        <div><img src={"https://i.loli.net/2019/04/06/5ca879d4c627d.jpg"}alt={"smile"} className={"photo"}/></div>
                        <div><img src={"https://i.loli.net/2019/04/06/5ca879d598bd9.jpg"}alt={"smile"} className={"photo"}/></div>
                    </Carousel>
                </div>
                <div className={"headpage-sideBar"}>
                    <h3>常用技术网站</h3>
                    <div id={"website1"}><b><a href={"http://www.runoob.com/"}>菜鸟教程--学的不仅仅是技术,更是梦想</a></b>
                        <Tag color="magenta">前端</Tag><Tag color="orange">后端</Tag><Tag color="blue">网站开发</Tag></div>
                    <div id={"website2"}><b><a href={"http://www.ruanyifeng.com"}>阮一峰的网络日志--阿里前端大牛的个人博客网站</a></b>
                        <Tag color="magenta">前端</Tag><Tag color="geekblue">Javascript</Tag><Tag color="purple">React</Tag></div>
                    <div id={"website3"}><b><a href={"https://www.liaoxuefeng.com"}>廖雪峰的官方网站--全栈工程师教你学python,Java,区块链</a></b>
                        <Tag color="volcano">python</Tag><Tag color="cyan">Java</Tag></div>
                    <div id={"website4"}><b><a href={"https://github.com"}>Github--全球最常用的面向开源及私有软件项目的托管平台</a></b>
                        <Tag color="skyblue">代码仓库</Tag></div>
                    <div id={"website5"}><b><a href={"https://react.docschina.org/"}>React中文网站--从零开始的前端框架学习之旅</a></b>
                    <Tag color="purple">React</Tag></div>
                    <div id={"website5"}><b><a href={"https://react.docschina.org/"}>Vue中文网站--从零开始的前端框架学习之旅</a></b>
                        <Tag color="gold">Vue</Tag></div>
                    <div id={"website5"}><b><a href={"https://react.docschina.org/"}>Aguilar中文网站--从零开始的前端框架学习之旅</a></b>
                        <Tag color="pink">Aguilar</Tag></div>
                </div>
                <div className={"headpage-footer"}>
                    <h3>热点信息</h3>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar}/>}
                                    title={<b><a href="https://ant.design">{item.title}</a></b>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}

export default HeadPage;