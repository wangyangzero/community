import React, {Component} from 'react';
import './User.css'
import NavMenu from '../menu/NavMenu'
import {getUserList,updateUserInfo,deleteUser} from '../../../redux/action/adminHome';
import {Button, Card, Table,Modal,Input,Form,message,Popconfirm} from 'antd'
import {connect} from 'react-redux'

const {TextArea} = Input;

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            userList: [],
            updateUserModal: false,
        };
    }

    /**
     * 组件渲染完用于ajax请求
     */
    componentDidMount(){
        this.props.dispatch(getUserList())
            .then(() => {
                if(!!this.props.adminHome.getUserList){
                    this.setState({
                        userList: this.props.adminHome.getUserList
                    })
                }
            })
    }
    /**
     * 显示修改对话框
     * @param record
     */
    showUpdateUserModal = (record) => {
        this.props.form.setFieldsValue({
            id: record.id,
            Authorization: record.Authorization,
            username: record.username,
            nickname: record.nickname,
            password: record.password,
            avatar: record.avatar,
        });
        this.setState({
            updateUserModal: true,
        });
    };
    /**
     * 提交修改数据
     * @param e
     */
    handleUpdateUserOk = e => {
        let record = this.props.form.getFieldsValue();
        this.props.dispatch(updateUserInfo({
            id: record.id,
            Authorization: record.Authorization,
            username: record.username,
            nickname: record.nickname,
            password: record.password,
            avatar: record.avatar,
        }));
        message.success('修改用户成功');
        setTimeout(()=>window.location.reload(),1000);
        this.setState({
            updateUserModal: false,
        });
    };
    /**
     * 关闭修改对话框
     * @param e
     */
    handleUpdateUserCancel = e => {
        this.setState({
            updateUserModal: false,
        });
    };
    /**
     * 提交删除数据
     */
    handleDeleteUser = (record) =>{
        this.props.dispatch(deleteUser({
            id: record.id
        }));
        message.success('删除用户成功');
        setTimeout(()=>window.location.reload(),1000);

    };

    render() {
        const data = [];
        if(this.state.userList.length > 0){
            let userList = this.state.userList;
            for(let i = 0;i < userList.length;i++){
                data.push({
                    id: i + 1,
                    Authorization: userList.Authorization,
                    username: userList.username,
                    nickname: userList.nickname,
                    password: userList.password,
                    _id: userList._id,
                    avatar: userList.avatar,
                })
            }
        }
        const columns=[
            {title:'用户id',dataIndex:'id'},
            {title:"用户名",dataIndex:'username'},
            { title: '昵称', dataIndex: 'nickname' },
            { title: '权限', dataIndex: 'Authorization' },
            {
                dataIndex: 'update',
                render: (text, record) => {
                    return(
                        <Button onClick={ () =>{this.showUpdateUserModal(record)}}>修改</Button>
                    )
                }
            },
            {
                dataIndex: 'delete',
                render: (text, record) => {

                    return(
                        <Popconfirm placement="topLeft" title={'确定要删除么'} onConfirm={ () =>{this.handleDeleteUser(record)}} okText="确定" cancelText="取消">
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
                <div className="user-content">
                    <NavMenu />
                    <div className="user-list">
                        <Card title="用户管理">
                            <Table
                                bordered
                                columns={columns}
                                dataSource={data}
                                pagination={true} //是否要分页
                            >
                            </Table>
                            <Modal
                                title="修改用户"
                                visible={this.state.updateUserModal}
                                onOk={this.handleUpdateUserOk}
                                onCancel={this.handleUpdateUserCancel}
                                className='addNews'
                                okText = '确认'
                                cancelText = '取消'
                            >
                                <Form >
                                    <Form.Item label="id" {...formItemLayout}>
                                        {getFieldDecorator('id', {
                                            rules: [{ required: true}],
                                        })(
                                            <Input placeholder="请输入用户id"  disabled={true}/>
                                        )}
                                    </Form.Item>
                                    <Form.Item label="Authorization" {...formItemLayout}>
                                        {getFieldDecorator('Authorization', {
                                            rules: [{ required: false }],
                                        })(
                                            <Input placeholder="请输入用户权限" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="username" {...formItemLayout}>
                                        {getFieldDecorator('username', {
                                            rules: [{ required: true, message: '请输入用户名' }],
                                        })(
                                            <Input placeholder="请输入用户名" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="nickname" {...formItemLayout}>
                                        {getFieldDecorator('nickname', {
                                            rules: [{ required: true , message: '请输入昵称'}],
                                        })(
                                            <Input placeholder="请输入昵称" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="password" {...formItemLayout}>
                                        {getFieldDecorator('password', {
                                            rules: [{ required: true, message: '请输入密码'}],
                                        })(
                                            <Input placeholder="请输入密码" />
                                        )}
                                    </Form.Item>
                                    <Form.Item label="avatar" {...formItemLayout}>
                                        {getFieldDecorator('avatar', {
                                            rules: [{ required: false }],
                                        })(
                                            <Input placeholder="请输入头像链接" />
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

User = connect(mapStateToProps)(User);

export default Form.create()(User);