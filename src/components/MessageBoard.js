import React,{Component} from 'react';
import {Input, message, Button, Icon, Form, Typography, Descriptions, Avatar, List, Menu, Comment, Dropdown} from 'antd';
import './MessageBoard.css';
import {getUserMsg,getUserMsgList,getMsgList} from '../redux/action/messageBoard'
import {Link} from 'react-router-dom'
import connect from 'react-redux/es/connect/connect'

const { TextArea } = Input;
const { Title, } = Typography;

class MessageBoard extends Component{
    constructor(props){
        super(props);
        this.state={
          msgInfo:[],
            messageList: [],
        };
    };
    componentDidMount (){
        this.props.dispatch(getMsgList()).then(() =>{
            if(!!this.props.messageBoard.getMsgList){
                this.setState({
                    messageList: this.props.messageBoard.getMsgList
                })
            }
        });
        let nickname = localStorage.nickname;
        this.props.dispatch(getUserMsgList({
            nickname: nickname,
        })).then(() => {
            console.log(this.props.messageBoard.getUserMsgList);
            if(!!this.props.messageBoard.getUserMsgList){
                this.setState({
                    msgInfo: this.props.messageBoard.getUserMsgList
                })
            }
        })
    }
    handleMsg = () =>{
        let msg = this.props.form.getFieldsValue().msg;
        let nickname = localStorage.nickname;
        let avatar = localStorage.avatar;
        if(msg === undefined){
            message.error('留言内容不能为空');
            return;
        }
        this.props.dispatch(getUserMsg({
            msg: msg,
            nickname: nickname,
            avatar: avatar,
        })).then(() =>{
            message.success('留言成功');
            setTimeout(()=>window.location.reload(),1000);
        })
    };

  render() {
      //form方法
      const {getFieldDecorator} = this.props.form;

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
      //获取右上角图标
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
          </Menu>);
          let userModal = [];
      userModal.push(
          <div className={"login"}>
              <Dropdown overlay={menu} placement="bottomCenter" >
                  <span><Avatar src={localStorage.avatar} icon="user" size="large" style={{marginLeft:'50px'}}/>&nbsp;欢迎回来</span>
              </Dropdown>
          </div>
      );

      //评论
      let comments = [];
      if(this.state.msgInfo.length > 0){
          let msgInfo = this.state.msgInfo;
          for(let i = 0;i < msgInfo.length; i++){
              comments.push(
                  <Comment
                      author={<span>{msgInfo[i].nickname}</span>}
                      avatar={
                          <Avatar
                              src={msgInfo[i].avatar}
                              alt={msgInfo[i].nickname}
                          />
                      }
                      content={
                          <p>{msgInfo[i].msg}</p>
                      }
                      datetime={
                          <span>{msgInfo[i].date}</span>
                      }/>);
          }

      }

    return (

      <div className="MessageBoard">
          <div className="message-board-content">
          <div  className="inner_content">
              <Typography>
                  <Title level={4}>个人资料</Title>
              </Typography>
              <hr/>
              <div className="UsersInfo_photo"><img src={localStorage.avatar} className={"logo2"}/> </div>
              <div className="UsersInfo_info"> <Descriptions title="" layout="horizontal" column={1}>
                  <Descriptions.Item label="昵称">{localStorage.nickname}</Descriptions.Item>
              </Descriptions>
                  <hr/>
                  <Descriptions>
                      <Descriptions.Item label="用户名">{localStorage.username}</Descriptions.Item>
                      <Descriptions.Item label="个签">{localStorage.message}</Descriptions.Item>
                  </Descriptions>
              </div>
          </div>
                  <div className="MessageBoard-content">
                    <h3>留言</h3>
                          <div>
                              <Form >
                                  <Form.Item>
                                      {getFieldDecorator('msg', {
                                          rules: [{ required: true, message: '请输入留言内容!' }],
                                      })(
                                    <TextArea
                                      placeholder="记录一下美好生活吧..."
                                      className="custom"
                                      style={{ height:160}}
                                    />
                                      )}
                                  </Form.Item>
                              </Form>
                                     <Button type="primary" className='message-board-button' onClick={this.handleMsg}>
                                      <Icon type="message" />
                                      发布
                                    </Button>
                           </div>
                      {comments}
                </div>
          </div>
          <div className="message-board-sidebar">
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
          </div>
      </div>
    );
  }
}

//组件和状态关联
const mapStateToProps = state => {
    return {messageBoard: state.messageBoard};
};
MessageBoard = connect(mapStateToProps)(MessageBoard);

export default Form.create()(MessageBoard);