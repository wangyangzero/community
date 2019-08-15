import React,{Component} from 'react';
import { Typography,List,Icon,Collapse} from 'antd';
import './WebLog.css'
import {getUserBlog} from '../redux/action/user';
import {connect} from 'react-redux'

const { Panel,} = Collapse;
const { Title, Paragraph, } = Typography;
const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};
class WebLog extends Component{
    constructor(props){
        super(props);
        this.state={
            userBlog: [],
        }
    }

    componentDidMount(){
        this.props.dispatch(getUserBlog())
            .then(() => {
                console.log(this.props.user)
                if(!!this.props.user){
                    this.setState({
                        userBlog: this.props.user.getUserBlog
                    });
                }
            })
    }
  render(){

        return(
            <div className="WebLog">
                <h3>博客</h3>
                <List
                    itemLayout="vertical"
                     pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 4,
                    }}
                    dataSource={this.state.userBlog}
                    renderItem={item => (
                        <List.Item>
                        <Typography>
                           <Title level={2}><a href={item.data.href}>{item.data.title}</a></Title>
                               <div className="time"><Icon type="canlendar"/>&nbsp;
                             {item.data.time}</div>
                              <Paragraph>
                               {item.data.easy_des}
                               </Paragraph>
                       </Typography>
                        <Collapse bordered={false} ><Panel header="阅读全文" style={customPanelStyle}>{item.data.description}</Panel></Collapse>
                       </List.Item>
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {user: state.user}
};
WebLog = connect(mapStateToProps)(WebLog);

export default WebLog;
