import React, { useState } from "react"
import { Link, Routes, Route, Navigate } from "react-router-dom"
import All from "./All/All"
import Examine from "./Examine/Examine"
import Notice from "./Notice/Notice"
import "./Official.css"

const Official = () => {
  const lessonList = [
    { index: 0, label: "全部", path: "/Letter/Official/All" },
    { index: 1, label: "公告", path: "/Letter/Official/Notice" },
    { index: 2, label: '审核', path: "/Letter/Official/Examine" },
  ]

  const [isShow, setIsShow] = useState(0)

  const listStatus = (item, index) => {
    setIsShow(index)
  }

  return (
    <div className="official">
      <div className="official-main">
        <ul className="officialList">
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
        <Route path="/" element={<Navigate to="/Letter/Official/All" />} />
        <Route path="/All" element={<All />} />
        <Route path="/Examine" element={<Examine />} />
        <Route path='/Notice' element={<Notice />} />
      </Routes>



    </div>
  )
}


export default Official