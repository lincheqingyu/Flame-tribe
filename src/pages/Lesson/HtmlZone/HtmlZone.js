/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-02-16 14:44:51
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-05 18:17:12
 * @FilePath: \my-first-reactd:\桌面\second_code_1\src\pages\Lesson\CZone\CZone.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Link } from "react-router-dom";


const CZone = () => {
    return (
        <div className="wrapCzone">
            <div className="wrap">
                <Link to={"https://www.bilibili.com/video/BV14J4114768/?spm_id_from=333.337.search-card.all.click&vd_source=50a41a46f55e272818d8843e428fd803"} target="_blank">
                    <div className="inside">
                        <div className="insideLeft">
                            <img className="image-container"
                                src={require("../../../assets/images/HtmlZone1.png")} alt="C++ Tutorial"></img>
                        </div>
                        <div className="insideRight">
                            <span className="titleTwo">
                            pink老师前端入门教程，零基础必看的h5(html5)+css3+移动端前端视频教程
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to={"https://www.bilibili.com/video/BV1Wr4y1R7Bd/?spm_id_from=333.337.search-card.all.click&vd_source=50a41a46f55e272818d8843e428fd803"} target="_blank">
                    <div className="inside">
                        <div className="insideLeft">
                            <img className="image-container"
                                src={require("../../../assets/images/HtmlZone2.png")} alt="C++ Zero Basis"></img>
                        </div>
                        <div className="insideRight">
                            <span className="titleTwo">
                                成为网页设计师的第一步！快速上手 HTML & CSS 展开你的网页设计之旅！
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CZone;
