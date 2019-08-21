import React,{Component} from 'react';
import { AutoComplete, Input,Avatar,Button,Icon,List,Skeleton,} from 'antd';
import './MessageBoard.css';
const { TextArea } = Input;
function onSelect(value) {
  console.log('onSelect', value);
}

class MessageBoard extends Component{
    constructor(props){
        super(props);
        this.state={
          dataSource: [],
        };
    };
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
    return (
                  <div className="MessageBoard-content">
                
                    <h3>留言</h3>
                          <div>
                               <Avatar size={64} className={"photo"} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
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
                                     <Button type="primary">
                                      <Icon type="message" />
                                      发布
                                    </Button>
                           </div>
                           <div>
                               <p>2308条评论</p>
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
                                      >
                                       <Skeleton avatar title={false} loading={item.data.loading} active>
                                          <List.Item.Meta 
                                              avatar={<Avatar src={item.data.avatar} />}
                                              title={<a href={item.data.href}>{item.data.title}</a>}
                                              description={<div>{item.data.description}&nbsp; &nbsp; 回复
                                                  }
                                              </div>}
                                          />
                                            </Skeleton>
                                      </List.Item>
                                  )}
                              />
                           </div>
                </div>
    );
  }
}
export default MessageBoard;