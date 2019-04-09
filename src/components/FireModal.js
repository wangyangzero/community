import React,{Component} from 'react';
import {List, Avatar, Icon, Tag,} from 'antd';
import "./FireModal.css"

class FireModal extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        const listData = [
            {
                href: 'http://ant.design',
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
                href: 'http://ant.design',
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
                href: 'http://ant.design',
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
                href: 'http://ant.design',
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
        const IconText = ({ type, text }) => (
            <span><Icon type={type} style={{ marginRight: 8 }} />{text}</span>);
        return(
            <div>
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
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />,
            </div>
        )
    }
}

export default FireModal;