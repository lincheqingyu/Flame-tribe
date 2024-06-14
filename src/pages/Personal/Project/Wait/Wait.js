import React from 'react'
import './Wait.css'


const Wait = () => {
  return (
    <div className='wait-all'>

      <div className='wait-up'>
        <div className='wait-up1'>
          申请项目
        </div>
        <div className='wait-up1'>
          申请人
        </div>
        <div className='wait-up1'>
          申请时间
        </div>
        <div className='wait-up1'>
          状态
        </div>
        <div className='wait-up1'>
          操作
        </div>
      </div>

      <div className='wait-content'>
        <div className='wait-content1'>
          ZJSRTP项目
          <div>
            立项申请
          </div>
        </div>

        <div className='wait-content1'>
          周芹宇
        </div>
        <div className='wait-content1'>
          2023.10.01
        </div>
        <div className='wait-content1' style={{ color: '#FDA75F' }}>
          待审核
        </div>
        <div className='wait-content1' style={{ color: '#FDA75F' }}>
          查看
        </div>

      </div>

      <div className='wait-down'>
        <div className='wait-down-main'>
          共1条记录
        </div>

      </div>


    </div >

  )
}

export default Wait