import React, { useState } from "react"
import { Link, Routes, Route, Navigate } from "react-router-dom"
import './Project.css'
import Pass from './Pass/Pass'
import Fail from './Fail/Fail'
import Wait from './Wait/Wait'
import Apply from './Apply/Apply'


const Project = () => {
  const projectList = [
    { index: 0, label: "已通过", path: "/Personal/project/Pass" },
    { index: 1, label: "待通过", path: "/Personal/project/Wait" },
    { index: 2, label: "未通过", path: "/Personal/project/Fail" },
  ]

  const [isShow, setIsShow] = useState(0)

  const listStatus = (item, index) => {
    setIsShow(index)
  }

  const resetNav = () => {
    setIsShow(-1) // 设置为负数，使得导航栏其他项恢复到未点击状态
  }

  return (
    <div className='project-all'>
      <div className="project-main">
        <ul className="projectList">
          {projectList.map((post, index) => (
            <Link to={post.path || "/"} key={index}>
              <li
                onClick={() => listStatus(post, index)}
                className={isShow === index ? 'projectActive' : ""}
              >
                {post.label}
              </li>
            </Link>
          ))}
        </ul>
        <div className="right-button">
          <Link to="/Personal/Project/Apply" onClick={resetNav}>
            <button className="right-button-style" >申请+</button>
          </Link>
        </div>
      </div>

      <div className="project-container">
        <div className="project-content">
          <Routes>
            {/* 实现进入页面时候重定向 */}
            <Route path="/" element={<Navigate to="/Personal/Project/Pass" />} />
            <Route path="/Pass" element={<Pass />} />
            <Route path="/Fail" element={<Fail />} />
            <Route path="/Wait" element={<Wait />} />
            <Route path="/Apply" element={<Apply />} />
          </Routes>

        </div>
      </div>
    </div>

  )
}
export default Project
