import React from "react"
import "./Personal.css"
import First from "../../components/First/First"
import { Link, Route, Routes, Navigate } from "react-router-dom"
import { useState } from "react"
import Information from "./Information/Information"
import Competition from "./Competition/Competition"
import Project from "./Project/Project"
import Data from "./Data/Data"
import Prove from "./Prove/Prove"
import Personalheader from "./Personalheader/Personalheader"
import personalImage from "../../assets/images/personal.png"
import competitionImage from "../../assets/images/competition.png"
import projectImage from "../../assets/images/project.png"
import dataImage from "../../assets/images/data2.png"
import proveImage from "../../assets/images/information.png"



const Contact = () => {
  const leftUl = [
    {
      index: 0,

      name: "个人信息",
      path: "Information ",
      imageSrc: personalImage
    },
    {
      index: 1,
      name: "竞赛管理",
      path: "Competition",
      imageSrc: competitionImage
    },

    {
      index: 2,
      name: "项目申请",
      path: "Project",
      imageSrc: projectImage
    },
    {
      index: 3,
      name: "数据看板",
      path: "Data",
      imageSrc: dataImage
    },
    {
      index: 4,
      name: "信息认证",
      path: "Prove",
      imageSrc: proveImage
    }
  ]
  const [isShow, setIsShow] = useState(0)
  const listStatus = (item, index) => {
    setIsShow(index)
  }


  return (
    <>
      <First></First>
      <Personalheader></Personalheader>
      <div className="personal-all">
        <div className="personal-main">
          <div className="personal-tab">
            <ul className="personallist">
              {
                leftUl.map((post, index) => {
                  return (
                    <Link to={post.path}>
                      <li key={index} onClick={() => {
                        listStatus(post, index)
                      }}
                        className={isShow === index ? 'personalActive' : ''}>
                        {/* 此处用post方法表示遍历到当前层的name，而不是用leftUl.name */}
                        <img src={post.imageSrc} alt={post.name} />
                        {post.name}
                      </li>
                    </Link>
                  )
                })}
            </ul>
          </div>
          <Routes>
            {/* 实现进入页面时候重定向 */}
            <Route path="/" element={<Navigate to="/Personal/Information" />} />
            <Route path="/Information" element={<Information />} />
            <Route path="/Competition" element={<Competition />} />
            <Route path="/Project/*" element={<Project />} />
            <Route path="/Data" element={<Data />} />
            <Route path="/Prove" element={<Prove />} />
          </Routes>
        </div>
      </div>

    </>
  )
}
export default Contact