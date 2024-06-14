import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './Login.scss';
import Logo from "@/components/Logo/Logo";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchLogin } from '@/store/modules/user';

const Login = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 表单成功提交
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        try {
           // 触发异步action fetchLogin
           const response = await dispatch(fetchLogin(values));
           // 打印接口返回的数据
           console.log('接口返回数据:', response);
            // 1.跳转到首页
            navigate('/Personal/Information');
            // 2.提示用户登陆成功
            message.success('登陆成功');
        } catch (error) {
            // 登录失败时的错误处理
            message.error('用户名或密码错误');
        }
    };

    const options = [
        {
            name: "我是学生",
            index: 1
        },
        {
            name: "我是教师",
            index: 2
        }
    ];
    const [isShow, setIsShow] = useState(0);
    const handleClick = (item, index) => {
        setIsShow(index);
    };

    return (
        <div className='container'>
            <div className='contain'>
                <div className='logo'>
                    <img src={require("../../assets/images/Component 60.png")} alt="logo"></img>
                </div>
                <div className='leftPicture'>
                    <img src={require("../../assets/images/市场营销 1.png")} alt="left picture"></img>
                </div>
                <div className='login'>
                    <div className='content'>
                        <Form
                            form={form}
                            name="normal_login"
                            className="username-password"
                            validateTrigger='onBlur' // 失焦验证
                            initialValues={{
                                remember: true,
                                username: '',
                                password: ''
                            }}
                            onFinish={onFinish}
                        >
                            <Form.Item>
                                <h1 className='minHead'>Log in to your account</h1>
                            </Form.Item>
                            <Form.Item
                                name="username" // 和后端接口名保持一致
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入您的用户名！',
                                    },
                                    {
                                        pattern: /^1[3-9]\d{9}$/, // 匹配中国大陆地区的手机号
                                        message: '请输入正确的手机号！'
                                    }
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '请输入您的密码！',
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <div className='remember-forgot-container'>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>保存密码</Checkbox>
                                </Form.Item>

                                <div className="login-form-right">
                                    <ul>
                                        {
                                            options.map(
                                                (post, index) => {
                                                    return (
                                                        <li key={post.index} onClick={() => {
                                                            handleClick(post, index);
                                                        }}
                                                            className={isShow === index ? 'borderActive' : ""}>
                                                            {post.name}
                                                        </li>
                                                    )
                                                }
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                            <Form.Item className='button'>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登 录
                                </Button>
                            </Form.Item>
                        </Form>

                        <div className='link'>
                            <Form.Item>
                                <Link to='/Logon' className='orange'>
                                    <span className='none'>Don't have an account yet？ </span>
                                    Sign up>>
                                </Link>
                            </Form.Item>
                            <Form.Item>
                                <Link to='/Amend' className='orange'>
                                    <span className='none'>Lost your password?</span> click here>>
                                </Link>
                            </Form.Item>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
