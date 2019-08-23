import React,{Component} from 'react';
import './NewsContent.css';
import {Typography, Avatar, List, Icon, Dropdown,Menu} from 'antd';
import {getMsgList,getNewsInfo} from "../redux/action/homepage";
import connect from 'react-redux/es/connect/connect'
import {Link} from "react-router-dom";

const { Title, Paragraph} = Typography;
class NewsContent extends Component{
    constructor(props){
        super(props);
        this.state = {
            messageList: [],
			newsContent:'',
        }
    }
    componentDidMount () {
        this.props.dispatch(getMsgList()).then(() => {
            if (!!this.props.homepage.getMsgList) {
                this.setState({
                    messageList: this.props.homepage.getMsgList
                })
            }
        });
        let hash = window.location.pathname.slice(11,window.location.pathname.length);
        this.props.dispatch(getNewsInfo({
			id: hash,
		})).then(() => {
			if(!!this.props.homepage.getNewsInfo){
				this.setState({
					newsContent: this.props.homepage.getNewsInfo.data,
				})
			}
		})
    }
    render(){
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

    	return(
    			<div className="NewsContent">
    				<div className="NewsContent_content">
    				     <div  className="inner_content">
	    					 <Typography>
							    <Title level={2}>{this.state.newsContent.title}</Title>
							    <Paragraph>{this.state.newsContent.date}</Paragraph>
							    <hr/>
                                 {this.state.newsContent.content}
						     </Typography>
					     </div>
    				</div>
    				<div className="NewsContent_sidebar">
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
    		)
    }

}

//组件和状态关联
const mapStateToProps = state => {
    return {homepage: state.homepage};
};
NewsContent = connect(mapStateToProps)(NewsContent);

export default NewsContent;