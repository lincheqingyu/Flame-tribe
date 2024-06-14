import React from 'react'
import './Pass.css'


const Pass = () => {
  return (
    <div className='pass-all'>

      <div className='pass-up'>
        <div className='pass-up1'>
          申请项目
        </div>
        <div className='pass-up1'>
          申请人
        </div>
        <div className='pass-up1'>
          申请时间
        </div>
        <div className='pass-up1'>
          状态
        </div>
        <div className='pass-up1'>
          操作
        </div>
      </div>

      <div className='pass-content'>
        <img src={require('../../../../assets/images/暂无消息.png')} alt='暂无消息' />
      </div>

      <div className='pass-down'>
        <div className='pass-down-main'>
          共0条记录
        </div>

      </div>


    </div>

  )
}

export default Pass