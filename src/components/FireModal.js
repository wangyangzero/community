import React,{Component} from 'react';
import {List, Avatar, Icon, Tag,} from 'antd';
import "./FireModal.css";
import {getFireInfo} from '../redux/action/homepage';
import {connect} from 'react-redux'

class FireModal extends Component{
    constructor(props){
        super(props);
        this.state={
            fireInfo: [],
        }
    }

    /**
     * 组件渲染完用于ajax请求
     */
    componentDidMount(){
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
        const IconText = ({ type, text }) => (
            <span><Icon type={type} style={{ marginRight: 8 }} />{text}</span>);
        return(
            <div className="fireModal-content">
                <h3>最火</h3>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={this.state.fireInfo}
                    renderItem={item => (
                        <List.Item
                            key={item.data.title}
                            actions={[<IconText type="star-o" text={item.data.like}/>, <IconText type="like-o" text={item.data.star} />, <IconText type="message" text={item.comment}/>]}
                            extra={ <Tag color={item.data.tagColor}>{item.data.tag}</Tag>}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.data.avatar} />}
                                title={<a href={item.data.href}>{item.data.title}</a>}
                                description={item.data.description}
                            />
                            {item.data.content}
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
FireModal = connect(mapStateToProps)(FireModal);

export default FireModal;
