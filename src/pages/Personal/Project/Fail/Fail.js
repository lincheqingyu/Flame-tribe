import React from 'react'
import './Fail.css'


const Fail = () => {
  return (
    <div className='fail-all'>

      <div className='fail-up'>
        <div className='fail-up1'>
          申请项目
        </div>
        <div className='fail-up1'>
          申请人
        </div>
        <div className='fail-up1'>
          申请时间
        </div>
        <div className='fail-up1'>
          状态
        </div>
        <div className='fail-up1'>
          操作
        </div>
      </div>

      <div className='fail-content'>
        <img src={require('../../../../assets/images/暂无消息.png')} alt='暂无消息' />
      </div>

      <div className='fail-down'>
        <div className='fail-down-main'>
          共0条记录
        </div>

      </div>


    </div>

  )
}

export default Fail