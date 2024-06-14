/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-02-14 02:18:50
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-04 15:51:08
 * @FilePath: \my-first-reactd:\桌面\second_code_1\src\pages\Question\Question.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import "./Question.scss"
import First from "../../components/First/First";
import { Link } from "react-router-dom";
const Question = () => {
    return (
        <div>
            <First></First>
            <div className="top">
                <span>训练题库</span>
            </div>
            <div className="background">
                <div className="wrap">
                    <Link to={"https://www.hello-algo.com/chapter_preface/"} target="_blank">
                        <div className="Inside">
                            <div className="InsideLeft">
                                <img className="image-container"
                                    src={require("../../assets/images/Rectangle 2022.png")}></img>
                            </div>
                            <div className="InsideRight">
                                <span className="TitleTwo">
                                    hello算法,小白的学习天堂，简单又易懂的算法题库
                                </span>
                            </div>
                        </div>
                    </Link>

                    <Link to={"https://www.luogu.com.cn/"} target="_blank">
                        <div className="Inside">
                            <div className="InsideLeft">
                                <img className="image-container"
                                    src={require("../../assets/images/Rectangle 2019.png")}></img>
                            </div>
                            <div className="InsideRight">
                                <span className="TitleTwo">
                                    洛谷，学习算法必不可少的算法一站式全面刷题网站
                                </span>
                            </div>
                        </div>
                    </Link>

                    <Link to={"https://loj.ac/"} target="_blank">
                        <div className="Inside">
                            <div className="InsideLeft">
                                <img className="image-container"
                                    src={require("../../assets/images/Rectangle 2021.png")}></img>
                            </div>
                            <div className="InsideRight">
                                <span className="TitleTwo">
                                    Libreoj小众算法刷题网站，学习更多解题思路查漏补缺
                                </span>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default Question