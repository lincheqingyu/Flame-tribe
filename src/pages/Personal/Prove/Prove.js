import React, { useState } from 'react'
import './Prove.css'


const Information = () => {
  const [realName, setRealName] = useState('')
  const [realSchool, setRealSchool] = useState('')
  const [idCardNumber, setIdCardNumber] = useState('')

  const handleSubmit = () => {
    // 验证真实姓名是否为汉字
    const chineseNameRegex = /^[\u4e00-\u9fa5]+$/
    if (!chineseNameRegex.test(realName)) {
      alert('请输入有效的真实姓名（仅限汉字）')
      return
    }


    // 验证身份证号码是否为18位阿拉伯数字
    const idCardRegex = /^\d{18}$/
    if (!idCardRegex.test(idCardNumber)) {
      alert('请输入有效的18位身份证号码')
      return
    }

    // 如果通过验证，可以继续提交
    console.log('Real Name:', realName)
    console.log('ID Card Number:', idCardNumber)
  }

  return (
    <div className='prove-all'>
      <div className='prove-down'>
        <div className='prove-content'>
          <div className='realbox'>
            <p>信息认证</p>
            <div className='provebox'>
              <input
                type='text'
                placeholder='请输入真实姓名'
                value={realName}
                onChange={(e) => setRealName(e.target.value)}
              />

              <input
                type='text'
                placeholder='请输入所在学校'
                value={realSchool}
                onChange={(e) => setRealSchool(e.target.value)}
              />

              <input
                type='text'
                placeholder='请输入身份证号'
                value={idCardNumber}
                onChange={(e) => setIdCardNumber(e.target.value)}
              />

              <button onClick={handleSubmit}>提交</button>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Information