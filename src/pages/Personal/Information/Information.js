import React, { useEffect, useState } from 'react';
import './Information.css';
import { getProfileAPI, updateProfileAPI } from '@/api/user';
import { message, Input, Button } from 'antd';
import defaultAvatar from '../../../assets/images/personalheadlike.png'; // 确保路径正确

const Information = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [editableField, setEditableField] = useState(null);
  const [formData, setFormData] = useState({
    nickname: '',
    phone: '',
    email: '',
    userType: '',
    school: '',
    verification: '已认证', // 设置默认值
    password: '',
    avatar: '../../../assets/images/personalheadlike.png'
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProfileAPI();
        setUserInfo(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('获取用户信息失败:', error);
      }
    }

    fetchData().then(r => console.log(r));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = (field) => {
    setEditableField(field);
  };

  const handleSaveClick = async (field) => {
    if (field === 'email') {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(formData.email)) {
        message.error('请输入有效的邮箱地址');
        return;
      }
    }

    if (field === 'phone') {
      const phonePattern = /^1[3-9]\d{9}$/;
      if (!phonePattern.test(formData.phone)) {
        message.error('请输入有效的电话号码');
        return;
      }
    }

    try {
      await updateProfileAPI({ [field]: formData[field] });
      setUserInfo({ ...userInfo, [field]: formData[field] });
      setEditableField(null);
      message.success('更新成功');
    } catch (error) {
      console.error('更新用户信息失败:', error);
      message.error('更新失败');
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
      message.error('头像图片格式必须为 JPG 或 PNG');
      return;
    }


    const newAvatarUrl = URL.createObjectURL(file);
    setFormData({ ...formData, avatar: newAvatarUrl });
    message.success('头像上传成功');
  };

  if (!userInfo) {
    return <div>加载中...</div>;
  }

  return (
    <div className='information-all'>
      <div className='information-down'>
        <div className='page-wrap-user'>
          <div className='opt-item'>
            <div className='opt-label'>头像：</div>
            <div className='opt-content'>
              <div className='opt-value'>
                <img className='avatarTwo' src={formData.avatar} />
              </div>
              <div className='opt-icon'>
                <label htmlFor="avatar-upload">
                  <img src={require('../../../assets/images/arrow-r.png')} alt='修改头像' />
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  style={{ display: 'none' }}
                  accept=".jpg,.jpeg,.png"
                  onChange={handleAvatarChange}
                />
              </div>
            </div>
          </div>
          {['nickname', 'phone', 'email', 'school'].map((field) => (
            <div className='opt-item' key={field}>
              <div className='opt-label'>{field === 'nickname' ? '昵称' : field === 'phone' ? '手机号' : field === 'email' ? '用户邮箱' : '所在学校'}：</div>
              <div className='opt-content'>
                {editableField === field ? (
                  <>
                    <Input
                      type='text'
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      style={{ width: '200px', marginRight: '10px' }}
                    />
                    <Button type="primary" onClick={() => handleSaveClick(field)}>保存</Button>
                  </>
                ) : (
                  <>
                    <div className='opt-value'>{userInfo[field]}</div>
                    <div className='opt-icon'>
                      <img
                        src={require('../../../assets/images/edit.png')}
                        alt='修改'
                        onClick={() => handleEditClick(field)}
                      />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
          <div className='opt-item'>
            <div className='opt-label'>用户类型：</div>
            <div className='opt-content pad'>
              <div className='opt-value'>{userInfo.userType}</div>
            </div>
          </div>
          <div className='opt-item'>
            <div className='opt-label'>认证信息：</div>
            <div className='opt-content pad'>
              <div className='opt-value'>{userInfo.verification || '已认证'}</div>
            </div>
          </div>
          <div className='opt-item'>
            <div className='opt-label'>账户密码：</div>
            <div className='opt-content'>
              {editableField === 'password' ? (
                <>
                  <Input.Password
                    name='password'
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{ width: '200px', marginRight: '10px' }}
                  />
                  <Button type="primary" onClick={() => handleSaveClick('password')}>保存</Button>
                </>
              ) : (
                <>
                  <div className='opt-value'>********</div>
                  <div className='opt-icon'>
                    <img
                      src={require('../../../assets/images/edit.png')}
                      alt='修改'
                      onClick={() => handleEditClick('password')}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
