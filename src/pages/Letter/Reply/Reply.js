// import React from 'react'
// import './Reply.css'

// const Reply = () => {

//   return (
//     <div className='reply'>
//       <div className='reply-main'>
//         <img src={require('../../../assets/images/no-message.png')} alt='暂无消息' />
//       </div>
//     </div>
//   )
// }

// export default Reply

import React, { useState } from "react"
import { Link, Routes, Route, Navigate } from "react-router-dom"
import "./Reply.css"
import Comment from "./Comment/Comment"

const Reply = () => {
  const lessonList = [
    { index: 0, label: "评论", path: "/Letter/Reply" },
  ]

  const [isShow, setIsShow] = useState(0)

  const listStatus = (item, index) => {
    setIsShow(index)
  }

  return (
    <div className="reply">
      <div className="reply-main">
        <ul className="replyList">
          {lessonList.map((post, index) => (
            <Link to={post.path || "/"} key={index}>
              <li
                onClick={() => listStatus(post, index)}
                className={isShow === index ? 'officialActive' : ""}
              >
                {post.label}
              </li>
            </Link>
          ))}
        </ul>

      </div>
      <Routes>
        {/* 实现进入页面时候重定向 */}
        <Route path="/" element={<Navigate to="/Letter/Reply/Comment" />} />
        <Route path="/Comment" element={<Comment />} />
      </Routes>
    </div>
  )
}


export default Reply