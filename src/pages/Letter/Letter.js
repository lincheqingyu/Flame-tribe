import React, { useState } from "react"
import { Link, Routes, Route, Navigate } from "react-router-dom"
import First from "../../components/First/First"
import Official from "./Official/Official"
import Reply from "./Reply/Reply"
import "./Letter.css"

const Letter = () => {
  const letterList = [
    { index: 0, label: "官方通知", path: "/Letter/Official" },
    { index: 1, label: "评论回复", path: "/Letter/Reply" },
  ]

  const [isShow, setIsShow] = useState(0)

  const listStatus = (item, index) => {
    setIsShow(index)
  }

  return (
    <div className="letter">
      <First />
      <div className='letter-header'>
        <h1>消息中心</h1>
      </div>
      <div className="letter-main">
        <ul className="LetterList">
          {letterList.map((post, index) => (
            <Link to={post.path || "/"} key={index}>
              <li
                onClick={() => listStatus(post, index)}
                className={isShow === index ? 'LetterActive' : ""}
              >
                {post.label}
              </li>
            </Link>
          ))}
        </ul>
        <div className="letter-container">
          <div className="letter-content">
            <Routes>
              {/* 实现进入页面时候重定向 */}
              <Route path="/" element={<Navigate to="/Letter/Official" />} />
              <Route path="/Official/*" element={<Official />} />
              <Route path="/Reply/*" element={<Reply />} />
            </Routes>

          </div>
        </div>



      </div>



    </div>
  )
}


export default Letter
