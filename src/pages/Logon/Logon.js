import React, {useState, useEffect} from 'react';
import './Logon.css';
import {message} from 'antd';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Logon = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [timer, setTimer] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer(timer - 1);
            }, 1000);
        } else if (timer === 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleVerificationCodeChange = (e) => {
        setVerificationCode(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleRegister = async () => {
        try {
            const response = await axios.post('https://mock.apipark.cn/m1/4425505-4070744-default/user/add', {
                phoneNumber,
                verificationCode,
                password,
            });
            if (response.data.message) {
                message.success('注册成功！');
                setPhoneNumber('');
                setVerificationCode('');
                setPassword('');
                navigate('/');
            } else {
                message.error('注册失败，请重试！');
            }
        } catch (error) {
            console.error('注册请求失败:', error);
            message.error('注册失败，请重试！');
        }
    };

    const handleGetCaptcha = async () => {
        try {
            if (!phoneNumber) {
                message.warning('请输入手机号后再获取验证码！');
                return;
            }
            const response = await axios.post('https://mock.apipark.cn/m1/4425505-4070744-default/user/send', {
                phoneNumber,
            });
            if (response.data.code) {
                message.success('验证码已发送！');
                console.log(response.data.code);
                setTimer(60);
            } else {
                message.error('获取验证码失败，请重试！');
            }
        } catch (error) {
            console.error('获取验证码请求失败:', error);
            message.error('获取验证码失败，请重试！');
        }
        console.log("已发送请求");
    };

    return (
        <div className='logon-all'>
            <div className='logonbox'>
                <div className='logon-logo'>
                    <div className='logon-main'>
                        <div className='logon-title'>
                            账号注册
                        </div>
                        <div className='phone'>
                            <input
                                type='text'
                                placeholder='手机号'
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>
                        <div className='code'>
                            <input
                                type='text'
                                placeholder='验证码'
                                value={verificationCode}
                                onChange={handleVerificationCodeChange}
                            />
                            <button onClick={handleGetCaptcha} disabled={timer > 0}>
                                {timer > 0 ? `${timer}秒` : '获取验证码'}
                            </button>
                        </div>
                        <div className='password1'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder='密码'
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <button onClick={togglePasswordVisibility}>
                                {showPassword ? '👁️' : '隐藏'}
                            </button>
                        </div>
                        <div className='warn'>
                            注册表示您已认真阅读并同意<span>烽火部落</span>的<span>《使用协议》</span>
                        </div>
                        <div className='complete'>
                            <button onClick={handleRegister}>完成注册</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logon;
