import React,{Component} from 'react';
import { List, Avatar,Statistic, Card, Row, Col, Icon,} from 'antd';
import './Plate.css'



class Plate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const data = [
            {
                title: '资源共享',
                avatar:"https://i.loli.net/2019/04/05/5ca73a7555151.jpg",
                link:"",
                description:"同学们可以在这里分析一些项目的源代码、或者一些软件的安装包（jdk、tomcat、数据库或者编译器）等学习资源",
            },
            {
                title: '问题求助',
                avatar:"https://i.loli.net/2019/04/05/5ca73d1c3ac8a.jpg",
                link:"",
                description:"可通过此界面进行问题的提问，或者通过搜索查找是否有匹配的问题，会有管理员或者其他学过的同学为你解答",
            },
            {
                title: '精品分享',
                avatar:"https://i.loli.net/2019/04/05/5ca73d1d864e3.jpg",
                link:"",
                description:"发表一个话题，比如oj某道题的解法，或者某种技术的应用以及发表一个话题，比如oj某道题的解法，或者某种技术的应用，其他人可以参与讨论",
            },
            {
                title: '实验室板块',
                avatar:"https://i.loli.net/2019/04/05/5ca73d2207d3c.jpg",
                link:"",
                description:"对实验室的一些介绍，或者实验室的一些动态，以及招新信息等,方便大家第一时间了解实验室以选择最适合自己的lab",
            },
        ];
        return (
            <div className="plate-content">
                <h3>板块</h3>
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
             <div className={"plate-userCount"}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Statistic title="活跃用户" value={112893} />
                    </Col>
                    <Col span={12}>
                        <Statistic title="访问次数" value={112893} precision={2} />
                    </Col>
                </Row>
             </div>
                <div className={"plate-userRate"}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Card>
                                <Statistic
                                    title="用户数量"
                                    value={11.28}
                                    precision={2}
                                    valueStyle={{ color: '#3f8600' }}
                                    prefix={<Icon type="arrow-up" />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card>
                                <Statistic
                                    title="访问量"
                                    value={9.3}
                                    precision={2}
                                    valueStyle={{ color: '#cf1322' }}
                                    prefix={<Icon type="arrow-down" />}
                                    suffix="%"
                                />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Plate;