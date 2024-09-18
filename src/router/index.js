// /*
//  * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
//  * @Date: 2024-01-18 22:51:08
//  * @LastEditors: linsdfghj 2214112680@qq.com
//  * @LastEditTime: 2024-06-22 14:46:23
//  * @FilePath: /new_code_1/src/router/index.js
//  * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
//  */
// //路由配置
// import { createBrowserRouter } from "react-router-dom"
// import React from "react"
// import Login from "../pages/Login/Login"
// import Register from "../pages/Register/Register"
// import FirstContent from "../pages/FirstContent/FirstContent"
// import Lesson from "../pages/Lesson/Lesson"
// import CZone from "../pages/Lesson/CZone/CZone"
// import PythonZone from "../pages/Lesson/PythonZone/PythonZone"
// import LinuxZone from "../pages/Lesson/LinuxZone/LinuxZone"
// import JavaZone from "../pages/Lesson/JavaZone/JavaZone"
// import MysqlZone from "../pages/Lesson/MysqlZone/MysqlZone"
// import RobotZone from "../pages/Lesson/RobotZone/RobotZone"
// import HtmlZone from "../pages/Lesson/HtmlZone/HtmlZone"
// import Question from "../pages/Question/Question"
// import Contact from "../pages/Contact/Contact"
// import News from "../pages/Contact/News/News"
// import Attention from "../pages/Contact/Attention/Attention"
// import Match from "../pages/Contact/Match/Match"
// import Logon from "../pages/Logon/Logon"
// import Amend from "../pages/Amend/Amend"
// import Letter from "../pages/Letter/Letter"
// import Personal from "../pages/Personal/Personal"
// import Reply from "../pages/Letter/Reply/Reply"
// import Examine from "../pages/Letter/Official/Examine/Examine"
// import Notice from "../pages/Letter/Official/Notice/Notice"
// import All from "../pages/Letter/Official/All/All"
// import Competition from "../pages/Personal/Competition/Competition"
// import Data from "../pages/Personal/Data/Data"
// import Prove from "../pages/Personal/Prove/Prove"
// import Project from "../pages/Personal/Project/Project"
// import Information from "../pages/Personal/Information/Information"
// import Publish from "../pages/Publish/Publish"
// import Official from "../pages/Letter/Official/Official"
// import Comment from "../pages/Letter/Reply/Comment/Comment"
// import Pass from "../pages/Personal/Project/Pass/Pass"
// import Fail from "../pages/Personal/Project/Fail/Fail"
// import Wait from "../pages/Personal/Project/Wait/Wait"
// import Apply from "../pages/Personal/Project/Apply/Apply"

// //配置路由实例

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Login />
//     },

//     {
//         path: '/Register',
//         element: <Register />
//     },
//     {
//         path: "/Lesson",
//         element: <Lesson />,
//         children: [
//             {
//                 path: "/Lesson/CZone",
//                 element: <CZone />
//             },
//             {
//                 path: "/Lesson/PythonZone",
//                 element: <PythonZone />
//             },
//             {
//                 path: "/Lesson/LinuxZone",
//                 element: <LinuxZone />
//             },
//             {
//                 path: "/Lesson/JavaZone",
//                 element: <JavaZone />
//             },
//             {
//                 path: "/Lesson/MysqlZone",
//                 element: <MysqlZone />
//             },
//             {
//                 path: "/Lesson/RobotZone",
//                 element: <RobotZone />
//             },
//             {
//                 path: "/Lesson/HtmlZone",
//                 element: <HtmlZone />
//             }
//         ]
//     },
//     {
//         path: "/FirstContent",
//         element: <FirstContent />
//     },
//     {
//         path: "/Question",
//         element: <Question />
//     },
//     {
//         path: "/Contact",
//         element: <Contact />,
//         children: [
//             {
//                 path: "/Contact/News",
//                 element: <News />
//             },
//             {
//                 path: "/Contact/Attention",
//                 element: <Attention />
//             },
//             {
//                 path: "/Contact/Match",
//                 element: <Match />
//             },
//         ]
//     },
//     {
//         path: '/Logon',
//         element: <Logon />
//     },
//     {
//         path: '/Amend',
//         element: <Amend />
//     },
//     {
//         path: '/Letter',
//         element: <Letter />,
//         children: [

//             {
//                 path: '/Letter/Official',
//                 element: <Official />,
//                 children: [
//                     {
//                         path: '/Letter/Official/All',
//                         element: <All />,
//                     },
//                     {
//                         path: '/Letter/Official/Notice',
//                         element: <Notice />,
//                     },
//                     {
//                         path: '/Letter/Official/Examine',
//                         element: <Examine />,
//                     },

//                 ]

//             },
//             {
//                 path: '/Letter/Reply',
//                 element: <Reply />,
//                 children: [
//                     {
//                         path: '/Letter/Reply/Comment',
//                         element: <Comment />,
//                     },

//                 ]
//             },
//         ]
//     },
//     {
//         path: '/Personal',
//         element: <Personal />,
//         children: [
//             {
//                 path: '/Personal/Information',
//                 element: <Information />,
//             },
//             {
//                 path: '/Personal/Competition',
//                 element: <Competition />,
//             },
//             {
//                 path: '/Personal/Data',
//                 element: <Data />,
//             },
//             {
//                 path: '/Personal/Prove',
//                 element: <Prove />,
//             },
//             {
//                 path: '/Personal/Project',
//                 element: <Project />,
//                 children: [
//                     {
//                         path: "/Personal/Project/Pass",
//                         element: <Pass />
//                     },
//                     {
//                         path: "/Personal/Project/Fail",
//                         element: <Fail />
//                     },
//                     {
//                         path: "/Personal/Project/Wait",
//                         element: <Wait />
//                     },
//                     {
//                         path: "/Personal/Project/Apply",
//                         element: <Apply />
//                     },
//                 ]
//             },

//         ]
//     },

//     {
//         path: '/Publish',
//         element: <Publish />,
//     },

// ])

// export default router