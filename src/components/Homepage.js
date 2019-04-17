import React,{Component} from 'react';
import { Tabs, Icon,Tooltip,Modal,Button, Form, Input,Checkbox,List,Avatar} from 'antd';
import 'antd/dist/antd.css';
import './Homepage.css'
import Plate from "./Plate";
import HeadPage from './HeadPage'
import FireModal from './FireModal'
import ClassSearch from './ClassSearch'
const TabPane = Tabs.TabPane;

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginModal: false,
            registerModal:false,
            confirmDirty: false,
        }
    }
    /**
     * 显示登录对话框
     */
    showLoginModal = () => {
        this.setState({
            loginModal: true,
        });
    }
    /**
     * 显示注册对话框
     */
    showRegisterModal = () => {
        this.setState({
            registerModal: true,
        });
    }
    /**
     * 点击登录关闭对话框
     * @param e
     */
    handleLogin = (e) => {
        console.log(e);
        this.setState({
            loginModal: false,
        });
    }
    /**
     * 点击登录关闭对话框
     * @param e
     */
    handleRegister = (e) => {
        console.log(e);
        this.setState({
            loginModal: false,
            registerModal:false,
        });
    }
    /**
     * 将第二次的密码与第一次的进行比较
     * @param rule
     * @param value
     * @param callback
     */
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('密码')) {
            callback('两次输入的密码不一致');
        } else {
            callback();
        }
    }
    /**
     * 校验并获取第一次密码输入域的值
     * @param rule
     * @param value
     * @param callback
     */
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    /**
     * 时刻更新两次密码比较的结果
     * @param e
     */
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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
            <div className={"Homepage"}>
                <div className="content">
                    <Tabs defaultActiveKey="1" tabBarGutter={0} className="interface">
                        <TabPane tab={<span><Icon type="home" />Swust程序交流社区</span>} key="1">
                            <HeadPage/>
                        </TabPane>
                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"博客"} >
                        <span><Icon type="read" /></span>
                        </Tooltip>
                        </span>} key="2">
                        </TabPane>
                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"板块"} >
                        <span><Icon type="menu-fold" /></span>
                        </Tooltip>
                        </span>} key="3">
                            <Plate/>
                        </TabPane>
                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"最新"} >
                        <span><Icon type="clock-circle" /></span>
                        </Tooltip>
                        </span>} key="4">
                        </TabPane>
                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"热门"} >
                        <span><Icon type="fire" /></span>
                        </Tooltip>
                        </span>} key="5">
                            <FireModal/>
                        </TabPane>
                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"搜索"} >
                        <span><Icon type="search" /></span>
                        </Tooltip>
                        </span>} key="6">
                            <ClassSearch/>
                        </TabPane>
                    </Tabs>
                </div>
                <div className="sideBar">
                    <div className={"login"}>
                    <Tooltip placement = "top" title={"fork me on the Github"} >
                        <a href={"https://github.com/LazyCaty/community"}>
                            <img src={"https://i.loli.net/2019/04/06/5ca836d6cc365.jpg"} alt={"Github"} className={"logo2"}/></a>
                    </Tooltip>
                    <Button type="primary" onClick={this.showLoginModal}>
                        登录
                    </Button>
                    <Button type="primary" onClick={this.showRegisterModal}className="register-button">
                        注册
                    </Button>
                    </div>
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
                                {getFieldDecorator('用户名', {
                                    rules: [{ required: true, message: '请输入您的用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           placeholder="用户名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('密码', {
                                    rules: [{ required: true, message: '请输入您的密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('记住我', {
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
                    <Modal
                        title="注册"
                        visible={this.state.registerModal}
                        footer={[]}
                        onOk={this.handleRegister}
                        onCancel={this.handleRegister}
                        width={400}
                    >
                        <Form >
                            <Form.Item>
                                {getFieldDecorator('用户名', {
                                    rules: [{ required: true, message: '请输入您的用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           placeholder="用户名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('真实姓名', {
                                    rules: [{ required: true, message: '请输入您的真实姓名!' }],
                                })(
                                    <Input prefix={<Icon type="robot" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           placeholder="真实姓名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('学号', {
                                    rules: [{ required: true, message: '请输入您的学号!' }],
                                })(
                                    <Input prefix={<Icon type="solution" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           placeholder="学号" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('密码', {
                                    rules: [{ required: true, message: '请输入您的密码!' },
                                        { validator: this.validateToNextPassword,}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('确认密码', {
                                    rules: [{ required: true, message: '请确认您的密码!' },{
                                        validator: this.compareToFirstPassword,}],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                           type="password" placeholder="请确认密码" onBlur={this.handleConfirmBlur}/>
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="register-form-button"
                                        onClick={this.handleRegister}>
                                    注册
                                </Button>
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>
            </div>
        );
    }
}


export default Form.create()(Homepage);