import React,{Component} from 'react';
import {List,Tag,Card,} from 'antd';
import "./Laboratory.css";
import {getLabInfo} from '../redux/action/modal';
import {connect} from 'react-redux'

class Laboratory extends Component{
    constructor(props){
        super(props);
        this.state={
            labInfo: [],
        }
    }
    /**
     * 组件渲染完用于ajax请求
     */
    componentDidMount(){
        this.props.dispatch(getLabInfo())
            .then(() => {
                if(!!this.props.modal.getLabInfo){
                    this.setState({
                        labInfo: this.props.modal.getLabInfo
                    })
                }
            })
    }
    render(){
       
        return(
            <div className="Laboratory-content">
                <h3>实验室</h3>
                <div className={"contenti"}>
                    <List
                        itemLayout="vertical"
                        size="small"
                        pagination={{
                                    onChange: (page) => {
                                        console.log(page);
                                    },
                                    pageSize: 3,
                                  }}
                        dataSource={this.state.labInfo}
                        renderItem={item => (
                             <List.Item>
                             <Card size="small" title={<a href={item.data.link}>{item.data.title}</a>} extra={ <Tag color={item.data.color}>{item.data.tag}</Tag>} style={{ width: 800 }}>
                              <p>地址：{item.data.place}</p>
                               <p>实验室介绍：{item.data.content}</p>
                            </Card>
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
    return {modal: state.modal};
};
Laboratory = connect(mapStateToProps)(Laboratory);

export default Laboratory;
