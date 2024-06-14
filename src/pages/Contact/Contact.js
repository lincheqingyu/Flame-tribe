
import React from "react"
import "./Contact.scss"
import First from "../../components/First/First"
import { Link, Route, Routes, Navigate } from "react-router-dom"
import { useState } from "react"
import News from "./News/News"
import Attention from "./Attention/Attention"
import Match from "./Match/Match"
const Contact = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const leftUl = [
        {
            index: 1,
            name: "最新资讯",
            path: "Attention"
        },
        {
            index: 2,
            name: "我的关注",
            path: "Attention"
        },
        // {
        //     index: 0,
        //     name: "————",
        // },
        {
            index: 3,
            name: "学习分享"
        },
        {
            index: 4,
            name: "竞赛分享",
            path: "Match"
        }
    ]
    const [isShow, setIsShow] = useState(0)
    const listStatus = (item, index) => {
        setIsShow(index)
    }


    return (
        <>
            <First></First>
            <div className="backgroundTwo">
                <div className="wrap">
                    <div className="leftUlBox">
                        <ul className="leftUl">
                            {
                                leftUl.map((post, index) => {
                                    return (
                                        <Link to={post.path}>
                                            <li key={index} onClick={() => {
                                                listStatus(post, index)
                                            }}
                                                className={isShow === index ? 'borderActive' : ''}>
                                                {/* 此处用post方法表示遍历到当前层的name，而不是用leftUl.name */}
                                                {post.name}
                                            </li>
                                        </Link>
                                    )
                                })}
                        </ul>
                        {/* <FloatButton
                            icon={<SearchOutlined />}
                            type="primary"
                            style={{
                                right: 24,
                            }}
                        /> */}
                    </div>
                    <Routes>
                        {/* 实现进入页面时候重定向 */}
                        <Route path="/" element={<News />} />
                        <Route path="/Attention" element={<Attention />} />
                        <Route path='/Match' element={<Match />}></Route>
                    </Routes>
                </div>
            </div>

        </>
    )
}
export default Contact