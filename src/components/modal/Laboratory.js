import React, {Component} from 'react';
import {List, Descriptions,Avatar,} from 'antd';
//import {Link} from 'react-router-dom'
import './Laboratory.css'
import {getLabInfo} from "../../redux/action/modal";
import {connect} from 'react-redux';

class Laboratory extends Component{
    constructor(props){
        super(props);
        this.state={
            labInfo: [],
        };
    }

    componentDidMount(){
        this.props.dispatch(getLabInfo())
            .then(() => {
                if(!!this.props.modal){
                    this.setState({
                        labInfo: this.props.modal.getLabInfo,
                    })
                }
            })
    }
     render(){

        return(
            <div className={"TP"}>
                <div className={"content"}>
                    <div className={"header"}>
                <Avatar src="https://i.loli.net/2019/04/05/5ca73d2207d3c.jpg" size={64}/>
                <span>实验室板块</span>
                    </div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 3,
                    }}
                    dataSource={this.state.labInfo}
                    renderItem={item => (
                        <List.Item
                            key={item.data.title}
                        >
							<Descriptions bordered={true}  title={<a href={item.data.link}>{item.data.title}</a>}>
							 <Descriptions.Item label="地址：">{item.data.place}</Descriptions.Item>
							    <Descriptions.Item label="实验室介绍：" >
							     {item.data.content}
							    </Descriptions.Item>
							  </Descriptions>,
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