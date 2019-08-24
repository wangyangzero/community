import React, {Component} from 'react';
import {userRegister} from "../../../redux/action/userInfo";
import connect from "react-redux/es/connect/connect";
import {  Icon,Button, Form, Input,message} from 'antd';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            registerStatus:'',
        }
    }
    /**
     * 实现注册功能
     */
    handleRegister = () => {
        const data = this.props.form.getFieldsValue();
        this.props.dispatch(userRegister({
            username: data.username,
            nickname: data.nickname,
            password: data.password,
        })).then(()=>{
            if(!!this.props.userInfo){
                this.handleRegisterSuccess(this.props.userInfo.userRegister);
                this.setState({
                    registerStatus: this.props.userInfo.userRegister
                })
            }
        })

    };

    /**
     * 注册成功
     * @param data
     */
    handleRegisterSuccess = (data) => {
        if(data.status === 200){
                message.success(data.data);
                localStorage.registerStatus = true;
                setTimeout(()=> this.props.history.push('/'),500)
        } else{
            message.error(data.error)
        }
    };

    /**
     * 将第二次的密码与第一次的进行比较
     * @param rule
     * @param value
     * @param callback
     */
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入的密码不一致');
        } else {
            callback();
        }
    };
    /**
     * 校验并获取第一次密码输入域的值
     * @param rule
     * @param value
     * @param callback
     */
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    /**
     * 时刻更新两次密码比较的结果
     * @param e
     */
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="register" style={{height:'800px',width:'500px',marginLeft:'500px',marginTop:'100px'}}>
                <h2 style={{marginLeft:'240px'}}>注册</h2>
            <Form >
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入您的用户名!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="用户名" />
                    )}
                    </Form.Item>
                <Form.Item>
                    {getFieldDecorator('nickname', {
                        rules: [{ required: true, message: '请输入您的昵称!' }],
                    })(
                        <Input prefix={<Icon type="robot" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="昵称" />
                    )}
                    </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入您的密码!' },
                            { validator: this.validateToNextPassword,}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password" placeholder="密码" />
                    )}
                    </Form.Item>
                <Form.Item>
                    {getFieldDecorator('confirm', {
                        rules: [{ required: true, message: '请确认您的密码!' },{
                            validator: this.compareToFirstPassword,}],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password" placeholder="请确认密码" onBlur={this.handleConfirmBlur}/>
                    )}
                    </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="register-form-button"
                                        onClick={this.handleRegister}>
                                    注册
                                </Button>
                            </Form.Item>
                        </Form>
            </div>
        );
    }
}

//组件和状态关联
const mapStateToProps = state => {
    return {userInfo: state.userInfo};
};
Register = connect(mapStateToProps)(Register);

export default Form.create()(Register);