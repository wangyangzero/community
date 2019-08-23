import React ,{Component} from 'react';
import {Avatar, Carousel, List, Tag} from 'antd';
import './HeadPage.css';
import {getTechnicalWeb,getFireInfo} from '../redux/action/homepage';
import {connect} from 'react-redux'
import {Link} from "react-router-dom";

class HeadPage extends Component{
    constructor(props){
        super(props);
        this.state={
            technicalWeb: [],
            fireInfo: [],
        }
    }

    /**
     * 组件渲染完用于ajax请求
     */
    componentDidMount(){
        this.props.dispatch(getTechnicalWeb())
            .then(() => {
                if(!!this.props.homepage.getTechnicalWeb){
                    this.setState({
                        technicalWeb: this.props.homepage.getTechnicalWeb
                    })
                }
            });
        this.props.dispatch(getFireInfo())
            .then(() => {
                if(!!this.props.homepage.getFireInfo){
                    this.setState({
                        fireInfo: this.props.homepage.getFireInfo
                    })
                }
            })
    }

    render(){
        //网站数据
        let webData = [];
        for(let i = 0;i < this.state.technicalWeb.length;i++) {
            let key = (i + 1).toString();
            let data = this.state.technicalWeb;
            let tags = [];
            for(let j = 0;j < this.state.technicalWeb[i].data.tag.length;j++){
                tags.push(
                    <Tag color={data[i].data.tag[j].tagColor}>{data[i].data.tag[j].tagName}</Tag>
                )
            }
            webData.push(
                <div id={"website" + key}><b><a href={data[i].data.href}>{data[i].data.name}</a></b>{tags}</div>
            )
        }


        return(
            <div className="headpage-content">
                <div className="headpage-carousel">
                    <Carousel effect="fade" autoplay >
                        <div><img src={"https://i.loli.net/2019/04/06/5ca879d294776.jpg"} alt={"smile"} className={"photo"}/></div>
                        <div><img src={"https://i.loli.net/2019/04/06/5ca879d3d8ac5.jpg"}alt={"smile"} className={"photo"}/></div>
                        <div><img src={"https://i.loli.net/2019/04/06/5ca879d4c627d.jpg"}alt={"smile"} className={"photo"}/></div>
                        <div><img src={"https://i.loli.net/2019/04/06/5ca879d598bd9.jpg"}alt={"smile"} className={"photo"}/></div>
                    </Carousel>
                </div>
                <div className={"headpage-sideBar"}>
                    <h3>常用技术网站</h3>
                    {webData}
                </div>
                <div className={"headpage-footer"}>
                    <h3>热点信息</h3>
                    <List
                        itemLayout="horizontal"
                        dataSource={this.state.fireInfo}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.data.avatar}/>}
                                    title={<Link to={`/news/info/${item._id}`}>{item.data.title}</Link>}
                                    description={item.data.content}
                                />
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        )
    }
}

//组件和状态关联
const mapStateToProps = state => {
    return {homepage: state.homepage};
};
HeadPage = connect(mapStateToProps)(HeadPage);

export default HeadPage;
