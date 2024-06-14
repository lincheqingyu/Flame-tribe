import React from 'react'
import './Notice.css'

const Notice = () => {

  return (
    <div className='notice'>
      <div className='notice-main'>
        <img src={require('../../../../assets/images/no-message.png')} alt='暂无消息' />
      </div>
    </div>
  )
}

export default Notice