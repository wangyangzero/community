import React,{Component} from 'react';
import { Tabs, Icon,Tooltip,Modal,Button, Form, Input,Checkbox, Cascader, Select, Row, Col, AutoComplete,} from 'antd';
import 'antd/dist/antd.css';
import './Homepage.css'

const TabPane = Tabs.TabPane;




class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginModal: false,
            registerModal:false,
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
     * 显示登录对话框
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
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <div className="content">
                    <Tabs defaultActiveKey="1" tabBarGutter={0} className="interface">
                        <TabPane tab={<span><Icon type="home" />Swust程序交流社区</span>} key="1">
                            首页
                        </TabPane>
                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"资源共享"} >
                        <span><Icon type="folder" /></span>
                        </Tooltip>
                        </span>} key="2">
                        </TabPane>
                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"板块"} >
                        <span><Icon type="menu-fold" /></span>
                        </Tooltip>
                        </span>} key="3">
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
                        </TabPane>
                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"搜索"} >
                        <span><Icon type="search" /></span>
                        </Tooltip>
                        </span>} key="6">
                        </TabPane>
                    </Tabs>
                </div>
                <div className="sideBar">
                    <Button type="primary" onClick={this.showLoginModal}>
                        登录
                    </Button>
                    <Button type="primary" onClick={this.showRegisterModal}className="register-button">
                        注册
                    </Button>
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
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('密码', {
                                    rules: [{ required: true, message: '请输入您的密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">忘记密码</a>
                                <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.handleLogin}>
                                   登录
                                </Button>
                                <Button type="primary" htmlType="submit" className="register-form-button" onClick={this.handleRegister}>
                                    注册
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
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('密码', {
                                    rules: [{ required: true, message: '请输入您的密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住我</Checkbox>
                                )}
                                <a className="login-form-forgot" href="">忘记密码</a>
                                <Button type="primary" htmlType="submit" className="register-form-button" onClick={this.handleRegister}>
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

const WrappedNormalLoginForm = Form.create()(Homepage);
export default Form.create()(Homepage);
