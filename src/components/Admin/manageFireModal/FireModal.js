import React, {Component} from 'react';
import './FireModal.css'
import NavMenu from '../menu/NavMenu'
import {getFireInfo,addFireInfo,updateFireInfo,deleteFireInfo} from '../../../redux/action/adminHome';
import {Button, Card, Table,Modal,Input,Form,message,Popconfirm} from 'antd'
import {connect} from 'react-redux'

const {TextArea} = Input;

class FireModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            fireInfo: [],
            addNewsModal: false,
            updateNewsModal: false,
        };
    }

    /**
     * 组件渲染完用于ajax请求
     */
    componentDidMount(){
        this.props.dispatch(getFireInfo())
            .then(() => {
                if(!!this.props.adminHome.getFireInfo){
                    this.setState({
                        fireInfo: this.props.adminHome.getFireInfo
                    })
                }
            })
    }

    /**
     * 显示添加新闻对话框
     */
    showAddNewsModal = () => {
        this.setState({
            addNewsModal: true,
        });
    };
    /**
     * 提交添加数据
     * @param e
     */
    handleAddNewsOk = e => {
        let record = this.props.form.getFieldsValue();
        this.props.dispatch(addFireInfo({
            href: record.href,
            title: record.title,
            description: record.description,
            avatar: record.avatar,
            tag:record.tag,
            tagColor: record.tagColor,
            content: record.content,
        }));
        message.success('添加新闻成功');
        setTimeout(()=>window.location.reload(),1000);
        this.setState({
            addNewsModal: false,
        });
    };
    /**
     * 关闭对话框
     * @param e
     */
    handleAddNewsCancel = e => {
        this.setState({
            addNewsModal: false,
        });
    };
    /**
     * 显示修改对话框
     * @param record
     */
    showUpdateNewsModal = (record) => {
        this.props.form.setFieldsValue({
            _id: record._id,
            _href: record.href,
            _title: record.title,
            _description: record.description,
            _avatar: record.avatar,
            _tag:record.tag,
            _tagColor: record.tagColor,
            _content: record.content,
        });
        this.setState({
            updateNewsModal: true,
        });
    };
    /**
     * 提交修改数据
     * @param e
     */
    handleUpdateNewsOk = e => {
        let record = this.props.form.getFieldsValue();
        this.props.dispatch(updateFireInfo({
            id: record._id,
            href: record._href,
            title: record._title,
            description: record._description,
            avatar: record._avatar,
            tag:record._tag,
            tagColor: record._tagColor,
            content: record._content,
        }));
        message.success('修改新闻成功');
        setTimeout(()=>window.location.reload(),1000);
        this.setState({
            updateNewsModal: false,
        });
    };
    /**
     * 关闭修改对话框
     * @param e
     */
    handleUpdateNewsCancel = e => {
        this.setState({
            updateNewsModal: false,
        });
    };
    /**
     * 提交删除数据
     */
    handleDeleteNews = (record) =>{
        this.props.dispatch(deleteFireInfo({
            id: record._id
        }));
        message.success('删除新闻成功');
        setTimeout(()=>window.location.reload(),1000);

    };

    render() {
        const data = [];
        if(this.state.fireInfo.length > 0){
            let fireInfo = this.state.fireInfo;
            for(let i = 0;i < fireInfo.length;i++){
                data.push({
                    id: i + 1,
                    _id: fireInfo[i]._id,
                    href: fireInfo[i].data.href,
                    title: fireInfo[i].data.title,
                    description: fireInfo[i].data.description,
                    avatar: fireInfo[i].data.avatar,
                    tag:fireInfo[i].data.tag,
                    tagColor: fireInfo[i].data.tagColor,
                    content: fireInfo[i].data.content,
                })
            }
        }
        const columns=[
            {title:'新闻id',dataIndex:'id'},
            {title:"新闻标题",dataIndex:'title'},
            { title: '新闻链接', dataIndex: 'href' },
            { title: '新闻发布时间', dataIndex: 'description' },
            {
                dataIndex: 'update',
                render: (text, record) => {
                    return(
                        <Button onClick={ () =>{this.showUpdateNewsModal(record)}}>修改</Button>
                    )
                }
            },
            {
                dataIndex: 'delete',
                render: (text, record) => {

                    return(
                        <Popconfirm placement="topLeft" title={'确定要删除么'} onConfirm={ () =>{this.handleDeleteNews(record)}} okText="确定" cancelText="取消">
                            <Button >删除</Button>
                        </Popconfirm>
                    )
                }
            },

        ];

        const { getFieldDecorator } = this.props.form;
        const formItemLayout ={
                labelCol: { span: 4 },
                wrapperCol: { span: 14 }};

        return (
            <div>
                <div className="firemodal-content">
                    <NavMenu />
                    <div className="firemodal-list">
                        <Card title="最热新闻">
                            <Button className='addNews-button' onClick={this.showAddNewsModal}>添加新闻</Button>
                            <Modal
                                title="添加新闻"
                                visible={this.state.addNewsModal}
                                onOk={this.handleAddNewsOk}
                                onCancel={this.handleAddNewsCancel}
                                className='addNews'
                                okText = '确认'
                                cancelText = '取消'
                            >
                                <Form >
                                    <Form.Item label="href" {...formItemLayout}>
                                        {getFieldDecorator('href', {
                                            rules: [{ required: true, message: '请输入新闻链接!' }],
                                        })(
                                        <Input placeholder="请输入新闻链接" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="title" {...formItemLayout}>
                                        {getFieldDecorator('title', {
                                            rules: [{ required: true, message: '请输入新闻标题' }],
                                        })(
                                        <Input placeholder="请输入新闻标题" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="avatar" {...formItemLayout}>
                                        {getFieldDecorator('avatar', {
                                            rules: [{ required: false }],
                                        })(
                                        <Input placeholder="请输入新闻发布者头像链接" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="desc" {...formItemLayout}>
                                        {getFieldDecorator('description', {
                                            rules: [{ required: false}],
                                        })(
                                        <Input placeholder="请输入新闻发布时间" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="tag" {...formItemLayout}>
                                        {getFieldDecorator('tag', {
                                            rules: [{ required: false }],
                                        })(
                                        <Input placeholder="请输入新闻标签" />
                                        )}
                                    </Form.Item>

                                    <Form.Item label="tagColor" {...formItemLayout}>
                                        {getFieldDecorator('tagColor', {
                                            rules: [{ required: false }],
                                        })(
                                        <Input placeholder="请输入标签颜色" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="content" {...formItemLayout}>
                                        {getFieldDecorator('content', {
                                            rules: [{ required: true, message: '请输入新闻内容!' }],
                                        })(
                                        <TextArea placeholder="请输入新闻内容" rows={4} />
                                        )}
                                    </Form.Item>
                                </Form>
                            </Modal>
                            <Table
                                bordered
                                columns={columns}
                                dataSource={data}
                                pagination={true} //是否要分页
                            >
                            </Table>
                            <Modal
                                title="修改新闻"
                                visible={this.state.updateNewsModal}
                                onOk={this.handleUpdateNewsOk}
                                onCancel={this.handleUpdateNewsCancel}
                                className='addNews'
                                okText = '确认'
                                cancelText = '取消'
                            >
                                <Form >
                                    <Form.Item label="id" {...formItemLayout}>
                                        {getFieldDecorator('_id', {
                                            rules: [{ required: true, message: '请输入新闻id!' }],
                                        })(
                                            <Input placeholder="请输入新闻id"  disabled={true}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="href" {...formItemLayout}>
                                        {getFieldDecorator('_href', {
                                            rules: [{ required: true, message: '请输入新闻链接!' }],
                                        })(
                                            <Input placeholder="请输入新闻链接" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="title" {...formItemLayout}>
                                        {getFieldDecorator('_title', {
                                            rules: [{ required: true, message: '请输入新闻标题' }],
                                        })(
                                            <Input placeholder="请输入新闻标题" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="avatar" {...formItemLayout}>
                                        {getFieldDecorator('_avatar', {
                                            rules: [{ required: false }],
                                        })(
                                            <Input placeholder="请输入新闻发布者头像链接" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="desc" {...formItemLayout}>
                                        {getFieldDecorator('_description', {
                                            rules: [{ required: false}],
                                        })(
                                            <Input placeholder="请输入新闻发布时间" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="tag" {...formItemLayout}>
                                        {getFieldDecorator('_tag', {
                                            rules: [{ required: false }],
                                        })(
                                            <Input placeholder="请输入新闻标签" />
                                        )}
                                    </Form.Item>

                                    <Form.Item label="tagColor" {...formItemLayout}>
                                        {getFieldDecorator('_tagColor', {
                                            rules: [{ required: false }],
                                        })(
                                            <Input placeholder="请输入标签颜色" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="content" {...formItemLayout}>
                                        {getFieldDecorator('_content', {
                                            rules: [{ required: true, message: '请输入新闻内容!' }],
                                        })(
                                            <TextArea placeholder="请输入新闻内容" rows={4} />
                                        )}
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

//组件和状态关联
const mapStateToProps = state => {
    return {adminHome: state.adminHome};
};

FireModal = connect(mapStateToProps)(FireModal);

export default Form.create()(FireModal);