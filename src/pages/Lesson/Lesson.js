import React, { useState } from "react";
import { Link, Routes, Route, Navigate, Router } from "react-router-dom";
import First from "../../components/First/First";
import PythonZone from "./PythonZone/PythonZone";
import CZone from "@/pages/Lesson/CZone/CZone";
import LinuxZone from "./LinuxZone/LinuxZone";
import JavaZone from "./JavaZone/JavaZone";
import MysqlZone from "./MysqlZone/MysqlZone";
import HtmlZone from "./HtmlZone/HtmlZone";
import RobotZone from "./RobotZone/RobotZone";
import "./Lesson.scss";

const Lesson = () => {
    const lessonList = [
        { index: 1, label: "C++", path: "/Lesson/CZone" },
        { index: 2, label: "Python", path: "/Lesson/PythonZone" },
        { index: 3, label: 'Linux', path: "/Lesson/LinuxZone" },
        { index: 4, label: "Java", path: "/Lesson/JavaZone" },
        { index: 5, label: "MySQL", path: "/Lesson/MySQLZone" },
        { index: 6, label: "HTML", path: "/Lesson/HtmlZone" },
        { index: 7, label: "机器学习", path: "/Lesson/RobotZone" }
    ];

    const [isShow, setIsShow] = useState(null);

    const listStatus = (item, index) => {
        setIsShow(index);
    };

    return (
        <>
            <First />
            <div className="top">
                <span>全部课程</span>
            </div>
            <div className="Lesson">
                <div className="wrap">
                    <div className="wrapTop">
                        <div className="wrapTopCenter">
                            <span className="wraoTopSpan">标签：</span>
                            <ul className="wrapList">
                                {lessonList.map((post, index) => (
                                    <Link to={post.path || "/"} key={index}>
                                        <li
                                            onClick={() => listStatus(post, index)}
                                            className={isShow === index ? 'borderActive' : ""}
                                        >
                                            {post.label}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            <Routes>
                {/* 实现进入页面时候重定向 */}
                <Route path="/CZone" element={<CZone />} />
                <Route path="/PythonZone" element={<PythonZone />} />
                <Route path='/LinuxZone' element={<LinuxZone />} />
                <Route path='/JavaZone' element={<JavaZone />} />
                <Route path='/MysqlZone' element={<MysqlZone />} />
                <Route path='/HtmlZone' element={<HtmlZone />} />
                <Route path='/RobotZone' element={<RobotZone />} />
            </Routes>

        </>
    );
};


export default Lesson;
