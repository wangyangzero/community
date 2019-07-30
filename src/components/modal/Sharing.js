import React,{Component}from 'react';
import "./Sharing.css";
import {Avatar ,Tabs, Icon, Tooltip,Upload,Modal,List, Select,Input} from 'antd';

const TabPane = Tabs.TabPane;
const Search = Input.Search;
const Option = Select.Option;
class Sharing extends Component{
    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: '-1',
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            }],
        };
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })
        render(){
            const { previewVisible, previewImage, fileList } = this.state;
            const uploadButton = (
                <div>
                    <Icon type="plus" />
                    <div className="ant-upload-text">Upload</div>
                </div>)
            const listData = [
                {
                    href: 'http://ant.design',
                    title: '80+机器学习数据集，还不快收藏',
                    avatar: "https://i.loli.net/2019/04/06/5ca877e06ed4f.jpg",
                }
                ,
                {
                    href: 'http://ant.design',
                    title: '清华、北大、浙大的计算机课程资源集都在这里了',
                    avatar:"https://i.loli.net/2019/04/06/5ca877e0cc40e.jpg",
                },
                {
                    href: 'http://ant.design',
                    title: 'Debug神经网络的五项基本原则',
                    avatar: "https://i.loli.net/2019/04/06/5ca877e27c961.jpg",
                },
                {
                    href: 'http://ant.design',
                    title: 'R和Python谁更好？这次让你「鱼与熊掌」兼得',
                    avatar: "https://i.loli.net/2019/04/06/5ca877ef85b0a.jpg",
                }
            ];
            return(
                <div className={"sharing"}>
                    <div className={"content"}>
                        <Avatar src="https://i.loli.net/2019/04/05/5ca73a7555151.jpg" size={64}/>
                        <span>资源共享</span>
                        <Tabs defaultActiveKey="1" tabBarGutter={0} className="interface">
                            <TabPane tab={
                                <span><Tooltip placement = "bottom" title={"上传"} >
                            <span><Icon type="upload" /></span>
                            </Tooltip>
                            </span>} key="1">
                                <div className="clearfix">
                                    <Upload
                                        action="//jsonplaceholder.typicode.com/posts/"
                                        listType="picture-card"
                                        fileList={fileList}
                                        onPreview={this.handlePreview}
                                        onChange={this.handleChange}
                                    >
                                        {fileList.length >= 3 ? null : uploadButton}
                                    </Upload>
                                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                    </Modal>
                                </div>
                            </TabPane>
                            <TabPane tab={
                                <span><Tooltip placement = "bottom" title={"下载"} >
                            <span><Icon type="download" /></span>
                            </Tooltip>
                            </span>} key="2">
                                <Search
                                    placeholder="请输入资源id"
                                    onSearch={value => console.log(value)}
                                    style={{ width: 200 ,marginLeft:20}}
                                />
                                <List
                                    itemLayout="vertical"
                                    size="large"
                                    pagination={{
                                        onChange: (page) => {
                                            console.log(page);
                                        },
                                        pageSize: 10,
                                    }}
                                    dataSource={listData}
                                    renderItem={item => (
                                        <List.Item
                                            key={item.title}
                                        >
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.avatar} />}
                                                title={<a href={item.href} download={item.title}>{item.title}</a>}
                                            />
                                        </List.Item>
                                    )}
                                />
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            )
        }
}

export default Sharing