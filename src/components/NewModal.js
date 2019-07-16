import React,{Component} from 'react';
import {List, Avatar, Icon, Tag,Skeleton,} from 'antd';
import "./NewModal.css"

class NewModal extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        const listData = [
            {
                href: 'http://ant.design',
                title: '中国要求外国科技公司提交源代码',
                avatar: "https://i.loli.net/2019/04/06/5ca877e06ed4f.jpg",
                description: "9分钟前",
                comment:"27",
                tag:"置顶",
                tagColor:"purple",
            }
            ,
            {
                href: 'http://ant.design',
                title: 'Adobe完成大笔收购：可以买到创意的网站 ',
                avatar:"https://i.loli.net/2019/04/06/5ca877e0cc40e.jpg",
                description:"三天前",
               comment:"37",
                tag:"置顶",
                tagColor:"gold",
            },
            {
                href: 'http://ant.design',
                title: '阿里遭华尔街集体调低股价',
                avatar:"https://i.loli.net/2019/04/06/5ca877e27c961.jpg",
                description:"一周前",
                
                comment:"127",
                tag:"推荐",
                tagColor:"volcano",
            },
            
             {
                href: 'http://ant.design',
                title: '互联网思维造车，汽车只共享不售卖',
                avatar:"https://i.loli.net/2019/04/06/5ca877ef85b0a.jpg",
                description:"2019/4/7",
                comment:"127",
                tag:"推荐",
                tagColor:"cyan",
            },
             {
                href: 'http://ant.design',
                title: '中国石油用微信打造智慧加油站',
                avatar:"https://i.loli.net/2019/04/06/5ca877e06ed4f.jpg",
                description:"2019/4/7",
                comment:"127",
                tag:"推荐",
                tagColor:"cyan",
            },
            {
                href: 'http://ant.design',
                title: '中国石油用微信打造智慧加油站',
                avatar:"https://i.loli.net/2019/04/06/5ca877ef85b0a.jpg",
                description:"15天前",
                comment:"127",
                tag:"推荐",
                tagColor:"purple",
            },
        ];
        
        return(
            <div className="NewModal-content">
                <h3>最新</h3>
                <List
                    itemLayout="vertical"
                    size="small"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 6,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            extra={ <Tag color={item.tagColor}>{item.tag}</Tag>}
                        >
                         <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta 
                                avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.href}>{item.title}</a>}
                                description={<div>{item.description}&nbsp; &nbsp; <Icon type="message"/>
                                    &nbsp; {item.comment}
                                </div>}
                            />
                              </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default NewModal;