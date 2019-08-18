import React,{Component} from 'react';
import { Tabs, Icon,Tooltip,Modal,Button, Form, Input,Checkbox,List,Avatar} from 'antd';
import 'antd/dist/antd.css';
import './Homepage.css'
import HeadPage from './HeadPage'
import FireModal from './FireModal'
import NewModal from './NewModal'
import MessageBoard from "./MessageBoard";
import Laboratory from "./Laboratory";
import WebLog from './WebLog'
import {Link} from 'react-router-dom'
import {getLoginStatus} from "../redux/action/userInfo";
import connect from "react-redux/es/connect/connect";


const TabPane = Tabs.TabPane;

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginModal: false,
            confirmDirty: false,
            loginStatus:[],
        }
    }


    /**回调函数们
     * 显示登录对话框
     */
    showLoginModal = () => {
        this.setState({
            loginModal: true,
        });
    }

    /**
     * 点击登录关闭对话框
     * @param e
     */
    handleLogin = () => {

        console.log(this.props.form.getFieldsValue());
        const data = this.props.form.getFieldsValue();
        this.props.dispatch(getLoginStatus({
            username: data.username,
            password: data.password,
            rememberMe: data.rememberMe,
            header:{'Content-Type': 'application/json'},
            })).then(()=> {
            if(!!this.props.userInfo.getLoginStatus)
            {
                this.setState({
                    loginStatus:this.props.userInfo.getLoginStatus
                })
            }
        })
        this.setState({
            loginModal: false,
        });
    }



    render(){
        const { getFieldDecorator } = this.props.form;
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
            <div className="homepage">
                <div className="homepage-content">
                    <Tabs defaultActiveKey="1" tabBarGutter={0} className="interface">
                        <TabPane tab={<span><Icon type="home" />Swust程序交流社区</span>} key="1">
                            <HeadPage/>
                        </TabPane>

                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"博客"} >
                        <span><Icon type="read" /></span>
                        </Tooltip>
                        </span>} key="2">
                           <WebLog/>
                        </TabPane>

                        <TabPane tab={
                            <span><Tooltip placement = "bottom" title={"留言"} >
                        <span><Icon type="message" /></span>
                        </Tooltip>
                        </span>} key="3">
                            <MessageBoard/>
                        </TabPane>

                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"最新"} >
                        <span><Icon type="clock-circle" /></span>
                        </Tooltip>
                        </span>} key="4">
                         <NewModal/> 
                        </TabPane>

                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"热门"} >
                        <span><Icon type="fire" /></span>
                        </Tooltip>
                        </span>} key="5">
                            <FireModal/>
                        </TabPane>

                        <TabPane tab={
                            <span><Tooltip placement = "bottom" title={"实验室"} >
                        <span><Icon type="home" /></span>
                        </Tooltip>
                        </span>} key="6">
                            <Laboratory/>
                        </TabPane>
                    </Tabs>
                </div>
                <div className="homepage-sideBar">
                    <div className={"login"}>
                    <Tooltip placement = "top" title={"fork me on the Github"} >
                        <a href={"https://github.com/LazyCaty/community"}>
                            <img src={"https://i.loli.net/2019/04/06/5ca836d6cc365.jpg"} alt={"Github"} className={"logo2"}/></a>
                    </Tooltip>
                    <Button type="primary" onClick={this.showLoginModal}>
                        登录
                    </Button>
                    <Button type="primary" onClick={this.showRegisterModal}className="register-button">
                        <Link to={'/user/Register'}>注册</Link>
                    </Button>
                    </div>
                    <div id={"upToDateMessage"}><h4 className={"homepage-sideBar-message"}>最新留言</h4></div>
                    <div className={"homepage-sideBar-userMessage"}>
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
                    <Modal
                        title="登录"
                        visible={this.state.loginModal}
                        footer={[]}
                        onOk={this.handleLogin}
                        onCancel={this.handleRegister}
                        width={400}
                    >
                        <Form >
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入您的用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           placeholder="用户名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入您的密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('rememberMe', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )}
                                <a className="login-form-forgot" href={"www.baidu.com"}>忘记密码</a>
                                <Button type="primary" htmlType="submit" className="login-form-button"
                                        onClick={this.handleLogin}>
                                   登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        );
    }
}

//组件和状态关联
const mapStateToProps = state => {
    return {userInfo: state.userInfo};
};
Homepage = connect(mapStateToProps)(Homepage);

export default Form.create()(Homepage);