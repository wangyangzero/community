import React,{Component} from 'react';
import {Tabs, Icon, Tooltip, Modal, Button, Form, Input, Checkbox, List, Avatar, message,Menu, Dropdown,} from 'antd';
import 'antd/dist/antd.css';
import './Homepage.css'
import HeadPage from './HeadPage'
import Laboratory from './Laboratory'
import FireModal from './FireModal'
import NewModal from './NewModal'
import {Link} from 'react-router-dom'
import {getLoginStatus,getUserInfo,getMsgList} from "../redux/action/userInfo";
import connect from "react-redux/es/connect/connect";


const TabPane = Tabs.TabPane;

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
            loginModal: false,
            confirmDirty: false,
            userInfo:'',
            messageList: [],
        }
    }

    /**
     * 判断登录是否过期
     * 获取留言板列表
     */
    componentDidMount(){
        this.props.dispatch(getMsgList()).then(() =>{
            console.log(this.props.userInfo.getMsgList)
            if(!!this.props.userInfo.getMsgList){
                this.setState({
                    messageList: this.props.userInfo.getMsgList
                })
            }
        });
        setInterval(()=>{
            if(localStorage.exp - Date.now() < 50 && localStorage.exp !== ''){
                message.error('登录已过期请重新登录');
                setTimeout(()=>window.location.reload(),1000);
                localStorage.token = '';
                localStorage.id =  '';
                localStorage.username = '';
                localStorage.nickname = '';
                localStorage.message = '';
                localStorage.Authorization = '';
                localStorage.exp = '';
            }
        },1200000)
    }

    /**
     * 显示登录对话框
     */
    showLoginModal = () => {
        this.setState({
            loginModal: true,
        });
    };

    /**
     * 登录功能
     */
    handleLogin = () => {
        const data = this.props.form.getFieldsValue();
        this.props.dispatch(getLoginStatus({
            username: data.username,
            password: data.password,
            rememberMe: data.rememberMe,
            })).then(()=> {
            if(!!this.props.userInfo.getLoginStatus)
            {
                this.handleLoginSuccess(this.props.userInfo.getLoginStatus);
            }
        });
        this.setState({
            loginModal: false,
        });
    };
    /**
     * 登录成功
     * @param data
     */
    handleLoginSuccess = (data) => {
        if(data.status === 200){
            message.success(data.data);
            localStorage.token = data.token;
            this.props.dispatch(getUserInfo(data.token)).then(()=>{
                if(!!this.props.userInfo){
                    localStorage.id =  this.props.userInfo.getUserInfo.id;
                    localStorage.username = this.props.userInfo.getUserInfo.username;
                    localStorage.nickname = this.props.userInfo.getUserInfo.nickname;
                    localStorage.message = this.props.userInfo.getUserInfo.message;
                    localStorage.Authorization = this.props.userInfo.getUserInfo.Authorization;
                    localStorage.exp = this.props.userInfo.getUserInfo.exp;
                }
            });
            setTimeout(()=>window.location.reload(),1000);
        } else{
            message.error(data.error)
        }
    };
    /**
     * 关闭登录对话框
     */
    handleCancel = () => {
        this.setState({
            loginModal: false,
        });
    };
    /**
     * 退出登录
     * @param key 下拉框的key值
     */
    loghome = ({key})=>{
        if(key === 'logout'){
            message.success('您已退出登录');
            this.props.history.push('/');
            localStorage.token = '';
            localStorage.id =  '';
            localStorage.username = '';
            localStorage.nickname = '';
            localStorage.message = '';
            localStorage.Authorization = '';
            localStorage.exp = '';
        }
    };


    render(){
        //form方法
        const { getFieldDecorator } = this.props.form;

        //右上角图标
        const adminHome = localStorage.Authorization === '0' ? '' :
            <Menu.Item key='adminhome'>
                <Link to='/admin/home'><span><Icon type="bank" />&nbsp;&nbsp;&nbsp;管理员中心</span></Link>
        </Menu.Item>;
        const menu = (
            <Menu onClick={this.loghome}>
                <Menu.Item key='username'>
                    <Link to='/'><span><Icon type="user" />&nbsp;&nbsp;&nbsp;{localStorage.username}</span></Link>
                </Menu.Item>
                <Menu.Item key='userhome'>
                    <Link to='/user/home'><span><Icon type="home" />&nbsp;&nbsp;&nbsp;个人中心</span></Link>
                </Menu.Item>
                {adminHome}
                <Menu.Item key='logout'>
                    <span><Icon type="poweroff" />&nbsp;&nbsp;&nbsp;退出登录</span>
                </Menu.Item>
            </Menu>
        );
        let userModal = [];
        if(localStorage.token !== ''){
            userModal.push(
                <div className={"login"}>
                    <Tooltip placement = "top" title={"fork me on the Github"} >
                        <a href={"https://github.com/LazyCaty/community"}>
                            <img src={"https://i.loli.net/2019/04/06/5ca836d6cc365.jpg"} alt={"Github"} className={"logo2"}/></a>
                    </Tooltip>
                    <Dropdown overlay={menu} placement="bottomCenter" >
                <span><Avatar src={localStorage.avatar} icon="user" size="large" style={{marginLeft:'50px'}}/>&nbsp;欢迎回来</span>
                    </Dropdown>
                </div>
            )
        } else{
            userModal.push(
                <div className={"login"}>
                    <Tooltip placement = "top" title={"fork me on the Github"} >
                        <a href={"https://github.com/LazyCaty/community"}>
                            <img src={"https://i.loli.net/2019/04/06/5ca836d6cc365.jpg"} alt={"Github"} className={"logo2"}/></a>
                    </Tooltip>
                    <Button type="primary" onClick={this.showLoginModal}>
                        登录
                    </Button>
                    <Button type="primary" className="register-button">
                        <Link to={'/user/Register'}>注册</Link>
                    </Button>
                </div>
            )
        }

        //获取留言板列表
        const data = [];
        if(this.state.messageList.length > 0){
            let msg = this.state.messageList;
            for(let i = 0; i< msg.length; i++){
                data.push({
                    avatar: msg[i].avatar,
                    date: msg[i].date,
                    msg: msg[i].msg,
                })
            }
        }

        return(
            <div className="homepage">
                <div className="homepage-content">
                    <Tabs defaultActiveKey="1" tabBarGutter={0} className="interface">
                        <TabPane tab={<span><Icon type="home" />Swust程序交流社区</span>} key="1">
                            <HeadPage/>
                        </TabPane>

                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"最新"} >
                        <span><Icon type="clock-circle" /></span>
                        </Tooltip>
                        </span>} key="2">
                         <NewModal/> 
                        </TabPane>

                        <TabPane tab={
                        <span><Tooltip placement = "bottom" title={"热门"} >
                        <span><Icon type="fire" /></span>
                        </Tooltip>
                        </span>} key="3">
                            <FireModal/>
                        </TabPane>

{                        <TabPane tab={
                            <span><Tooltip placement = "bottom" title={"实验室"} >
                        <span><Icon type="home" /></span>
                        </Tooltip>
                        </span>} key="4">
                            <Laboratory/>
                        </TabPane>}
                    </Tabs>
                </div>
                <div className="homepage-sideBar">
                    {userModal}
                    <div id={"upToDateMessage"}><h4 className={"homepage-sideBar-message"}>最新留言</h4></div>
                    <div className={"homepage-sideBar-userMessage"}>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<span>{item.date}</span>}
                                    description={item.msg}
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
                        onCancel={this.handleCancel}
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