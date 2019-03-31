import React,{Component} from 'react';
import { Tabs, Icon,Tooltip,Button} from 'antd';
import 'antd/dist/antd.css';

const TabPane = Tabs.TabPane;

class Homepage extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <div>
                <Tabs defaultActiveKey="1" tabBarGutter="0px">
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
                    <TabPane tab={<span><Icon type="user" />登录</span>} key="7">
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Homepage;
