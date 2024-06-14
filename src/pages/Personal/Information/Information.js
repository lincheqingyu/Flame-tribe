import React from 'react'

import './Information.css'



const Information = () => {
  return (
    <div className='information-all'>

      <div className='information-down'>

        <div className='page-wrap-user'>
          <div className='opt-item'>
            <div className='opt-label'>头像：</div>
            <div className='opt-content'>
              <div className='opt-value'>
                <img src={require('../../../assets/images/personalheadlike.png')} alt='用户头像' />
              </div>
              <div className='opt-icon'>
                <img src={require('../../../assets/images/arrow-r.png')} alt='修改头像' />
              </div>
            </div>
          </div>
          <div className='opt-item'>
            <div className='opt-label'>昵称：</div>
            <div className='opt-content'>
              <div className='opt-value'>叶冰</div>
              <div className='opt-icon'>
                <img src={require('../../../assets/images/edit.png')} alt='修改' />
              </div>
            </div>
          </div>
          <div className='opt-item'>
            <div className='opt-label'>用户名：</div>
            <div className='opt-content pad'>
              <div className='opt-value'>周芹宇</div>
            </div>
          </div>
          <div className='opt-item'>
            <div className='opt-label'>手机号：</div>
            <div className='opt-content'>
              <div className='opt-value'>18951147619</div>
              <div className='opt-icon'>
                <img src={require('../../../assets/images/edit.png')} alt='修改' />
              </div>
            </div>
          </div>
          <div className='opt-item'>
            <div className='opt-label'>账户密码：</div>
            <div className='opt-content'>
              <div className='opt-value'>********</div>
              <div className='opt-icon'>
                <img src={require('../../../assets/images/edit.png')} alt='修改' />
              </div>
            </div>
          </div>
          <div className='opt-item'>
            <div className='opt-label'>用户邮箱：</div>
            <div className='opt-content'>
              <div className='opt-value'>未绑定</div>
              <div className='opt-icon'>
                <img src={require('../../../assets/images/edit.png')} alt='修改' />
              </div>
            </div>
          </div>
          <div className='opt-item'>
            <div className='opt-label'>用户类型：</div>
            <div className='opt-content pad'>
              <div className='opt-value'>学生</div>
            </div>
          </div>
          <div className='opt-item'>
            <div className='opt-label'>所在学校：</div>
            <div className='opt-content pad'>
              <div className='opt-value'>南京理工大学紫金学院</div>
            </div>
          </div>
          <div className='opt-item'>
            <div className='opt-label'>认证信息：</div>
            <div className='opt-content pad'>
              <div className='opt-value'>认证成功</div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Information