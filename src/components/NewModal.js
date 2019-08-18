import React,{Component} from 'react';
import {List, Avatar, Icon, Tag,Skeleton,} from 'antd';
import "./NewModal.css";
import {getFireInfo, getNewInfo} from "../redux/action/homepage";
import {connect} from 'react-redux';

class NewModal extends Component{
    constructor(props){
        super(props);
        this.state={
            newInfo: [],
        }
    }

    /**
     * 组件渲染完用于ajax请求
     */
    componentDidMount(){
        this.props.dispatch(getNewInfo())
            .then(() => {
                if(!!this.props.homepage.getNewInfo){
                    this.setState({
                        newInfo: this.props.homepage.getNewInfo
                    })
                }
            })
    }

    render(){
        
        return(
            <div className="NewModal-content">
                <h3>最新</h3>
                <List
                    itemLayout="vertical"
                    size="small"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 6,
                    }}
                    dataSource={this.state.newInfo}
                    renderItem={item => (
                        <List.Item
                            key={item.data.title}
                            extra={ <Tag color={item.data.tagColor}>{item.data.tag}</Tag>}
                        >
                         <Skeleton avatar title={false} loading={item.data.loading} active>
                            <List.Item.Meta 
                                avatar={<Avatar src={item.data.avatar} />}
                                title={<a href={item.data.href}>{item.data.title}</a>}
                                description={<div>{item.data.description}&nbsp; &nbsp;
                                </div>}
                            />
                              </Skeleton>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

//组件和状态关联
const mapStateToProps = state => {
    return {homepage: state.homepage};
};
NewModal = connect(mapStateToProps)(NewModal);

export default NewModal;
