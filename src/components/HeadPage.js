import React,{Component} from 'react';
import { List, Avatar } from 'antd';

const data = [
    {
        title: '资源共享',
        avatar:"https://i.loli.net/2019/04/05/5ca73a7555151.jpg",
    },
    {
        title: '问题求助',
        avatar:"https://i.loli.net/2019/04/05/5ca73d1c3ac8a.jpg",
    },
    {
        title: '技术讨论',
        avatar:"https://i.loli.net/2019/04/05/5ca73d1d864e3.jpg",
    },
    {
        title: '实验室板块',
        avatar:"https://i.loli.net/2019/04/05/5ca73d2207d3c.jpg",
    },
];


class HeadPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar}/>}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        )
    }
}

export default HeadPage;