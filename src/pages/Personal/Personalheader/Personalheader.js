import React, { useEffect, useState } from 'react';
import './Personalheader.css';
import { useNavigate } from 'react-router-dom';
import { getProfileAPI } from '../../../api/user';

const Personalheader = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    location: '',
    avatar: ''
  });

  // 使用React Router的 useNavigate 获取导航函数
  const navigate = useNavigate();

  // 处理修改信息按钮点击事件
  const handleEditClick = () => {
    // 直接跳转到另一个页面，例如 '/first'
    navigate('/');
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProfileAPI();
        const data = response.data;
        setUserInfo({
          name: data.nickname,
          location: `${data.city} | ${data.school}`,
          avatar: data.avatar.startsWith('http') ? data.avatar : require('../../../assets/images/personalheadlike.png')
        });
      } catch (error) {
        console.error('Failed to fetch user info:', error);
      }
    }

    fetchData();
  }, []);

  return (
      <div className='personalheader-all'>
        <div className='personalheader-content'>
          <div className='personalheader-main'>
            <div className='user-profile'>
              <div className='personalheader-left'>
                {/* 左侧头像 */}
                <div className='avatar'>
                  <img src={userInfo.avatar} alt='用户头像' />
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
  );
};

export default Personalheader;
