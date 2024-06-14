import React, { useState } from 'react'
import './Logon.css'

const Logon = () => {
  // 使用 React 的状态来跟踪输入的值
  const [phoneNumber, setPhoneNumber] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // 处理手机号变化
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value)
  }

  // 处理验证码变化
  const handleVerificationCodeChange = (e) => {
    setVerificationCode(e.target.value)
  }

  // 处理密码变化
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  // 处理密码可见/隐藏切换
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // 处理注册按钮点击
  const handleRegister = () => {
    // 在这里可以添加处理注册逻辑，例如向服务器发送注册请求等
    console.log('手机号:', phoneNumber)
    console.log('验证码:', verificationCode)
    console.log('密码:', password)
    // 添加你的注册逻辑...

    // 清空表单数据（可选）
    setPhoneNumber('')
    setVerificationCode('')
    setPassword('')
  }

  return (
    <div className='logon-all'>
      <div className='logonbox'>
        <div className='logon-logo'>
          <div className='logon-main'>
            <div className='logon-title'>
              账号注册
            </div >
            {/* 输入手机号 */}
            <div className='phone'>
              <input
                type='text'
                placeholder='手机号'
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>

            {/* 输入验证码 */}
            <div className='code'>
              <input
                type='text'
                placeholder='验证码'
                value={verificationCode}
                onChange={handleVerificationCodeChange}
              />
              {/* 获取验证码 */}
              <button>获取验证码</button>

            </div>
            <div className='password1'>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='密码'
                value={password}
                onChange={handlePasswordChange}
              />

              {/* 密码可见/隐藏切换按钮 */}
              <button onClick={togglePasswordVisibility}>
                {showPassword ? '👁️' : '隐藏'}
              </button>

            </div>

            {/* 输入密码 */}
            <div className='warn'>
              注册表示您已认真阅读并同意<span>烽火部落</span>的<span>《使用协议》</span>
            </div>

            {/* 完成注册按钮 */}
            <div className='complete'>
              <button onClick={handleRegister}>完成注册</button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Logon
