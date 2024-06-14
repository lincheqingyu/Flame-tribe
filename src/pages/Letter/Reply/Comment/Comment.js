import React from 'react'
import './Comment.css'

const Comment = () => {

  return (
    <div className='comment'>
      <div className='comment-main'>
        <img src={require('../../../../assets/images/no-message.png')} alt='暂无消息' />
      </div>
    </div>
  )
}

export default Comment