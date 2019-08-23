import React,{Component} from 'react';
import { AutoComplete, Input,Avatar,Button,Icon,List,Skeleton,} from 'antd';
import './MessageBoard.css';
//import {getUserMsg} from '../redux/action/messageBoard'
const { TextArea } = Input;
function onSelect(value) {
  console.log('onSelect', value);
}

class MessageBoard extends Component{
    constructor(props){
        super(props);
        this.state={
          dataSource: [],
          msgInfo:[],
        };
    };
    /*
componentDidMount (){
  this.props.dispatch(getUserMsg({

  })).then(() => {
    if(!!this.props.messageBoard.getUserMsg){
      this.setState({
        msgInfo:this.props.messageBoard.getUserMsg
      })
    }
  })
}*/

  handleSearch = value => {
    this.setState({
      dataSource: !value ? [] : [value, value + value, value + value + value],
    });
  };

  handleKeyPress = ev => {
    console.log('handleKeyPress', ev);
  };


  render() {
    const { dataSource } = this.state;
     const data = [
            {
                time: '2019/4/6',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88103c0bca.jpg",
                content:"你也可以使用WaterFallList实现，看Readme和examples就知道了 ，还有效果图",
            },
            {
                time: '2019/4/5',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88104017ab.jpg",
                content:"初学者不要自己配置 开发环境, 直接从 expo开始, 这样会简单很多.",
            },
            {
                time: '2019/4/4',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88104980da.jpg",
                content:" 确实是jdk的版本关系，你echo %JAVA_HOME%看一下版本",
            },
            {
                time: '2019/4/3',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca881051c6a7.jpg",
                content:"你是怎么解决的,我试了很多次都不能成功",
            },
            {
                time: '2019/4/2',
                link:"",
                avatar:"https://i.loli.net/2019/04/06/5ca88294c3415.jpg",
                content:"如何在android原生端获取到react native中的某个view",
            },
        ];
    return (
      <div className="MessageBoard">
                  <div className="MessageBoard-content">
                    <h3>留言</h3>
                          <div>
                               <Avatar size={64} className={"message_photo"} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                  <AutoComplete className={"text"} 
                                    dataSource={dataSource}
                                    style={{ width: 780 }}
                                    onSelect={onSelect}
                                    onSearch={this.handleSearch}
                                  >
                                    <TextArea
                                      placeholder="input here"
                                      className="custom"
                                      style={{ height:160}}
                                      onKeyPress={this.handleKeyPress}
                                    />
                                    </AutoComplete> 
                                     <Button type="primary" className='message-board-button'>
                                      <Icon type="message" />
                                      发布
                                    </Button>
                           </div>
                           <div>
                               <p className='message-board-p'>2308条评论</p>
                           </div>
                </div>
               
      </div>
    );
  }
}
export default MessageBoard;