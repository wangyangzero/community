import React,{Component} from 'react';
import { Tabs, Icon,Tooltip,Modal,Button, Form, Input,Checkbox,} from 'antd';
import 'antd/dist/antd.css';
import './Homepage.css'
import './HeadPage'
import HeadPage from "./HeadPage";
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
        return(
            <div>
                <div className="content">
                    <Tabs defaultActiveKey="1" tabBarGutter={0} className="interface">
                        <TabPane tab={<span><Icon type="home" />Swust程序交流社区</span>} key="1">
                            <h4>板块</h4>
                            <HeadPage/>
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
                    <h4 className={"message"}>最新留言</h4>
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
                                <a className="login-form-forgot">忘记密码</a>
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
