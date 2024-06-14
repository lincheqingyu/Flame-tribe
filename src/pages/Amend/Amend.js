import React, { useState } from 'react'
import './Amend.css'

const Amend = () => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [verificationCode, setVerificationCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword] = useState(false)

  // 事件处理函数
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  }

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleRegister = () => {
    // 处理注册逻辑
  }

  return (
    <div className='amend-all'>
      <div className='amendbox'>
        <div className='amend-logo'>
          <div className='amend-main'>
            <div className='amend-title'>
              修改密码
            </div >
            {/* 输入手机号 */}
            <div className='phone'>
              <input
                type='text'
                placeholder='注册手机号'
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
            <div className='password-section'>
              {/* 输入新密码 */}
              <div className='password'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='新密码'
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              {/* 输入确认新密码 */}
              <div className='confirm-password'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='确认新密码'
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>



              {/* 完成注册按钮 */}
              <div className='complete'>
                <button onClick={handleRegister}>确定</button>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Amend




