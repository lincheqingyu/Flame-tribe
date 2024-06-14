import React from 'react'
import './Personalheader.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Personalheader = () => {
  const [userInfo] = useState({
    name: '叶冰',
    location: '南京 | 南京理工大学紫金学院',
  })

  // 使用React Router的 useNavigate 获取导航函数
  const navigate = useNavigate()

  // 处理修改信息按钮点击事件
  const handleEditClick = () => {
    // 直接跳转到另一个页面，例如 '/first'
    navigate('/')
  }

  return (
    <div className='personalheader-all'>
      <div className='personalheader-content'>
        <div className='personalheader-main'>
          <div className='user-profile'>
            <div className='personalheader-left'>
              {/* 左侧头像 */}
              <div className='avatar'>
                <img src={require('../../../assets/images/personalheadlike.png')} alt='用户头像' />
              </div>

              {/* 中间用户信息 */}
              <div className='user-info'>
                <h2>{userInfo.name}</h2>
                <p>{userInfo.location}</p>
              </div>
            </div>


            {/* 右侧修改信息按钮 */}
            <div className='edit-button'>
              {/* 点击按钮直接执行跳转逻辑 */}
              <button onClick={handleEditClick}>退出登录</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Personalheader