/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-02-16 14:44:51
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-05 14:51:15
 * @FilePath: \my-first-reactd:\桌面\second_code_1\src\pages\Lesson\CZone\CZone.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Link } from "react-router-dom";
const PythonZone = () => {
    return (
        <>
         <div className="wrapCzone">
            <div className="wrap">
                <Link to={"https://www.bilibili.com/video/BV1qW4y1a7fU/?spm_id_from=333.337.search-card.all.click&vd_source=50a41a46f55e272818d8843e428fd803"} target="_blank">
                    <div className="inside">
                        <div className="insideLeft">
                            <img className="image-container"
                                src={require("../../../assets/images/PythonZone1.png")}></img>
                        </div>
                        <div className="insideRight">
                            <span className="titleTwo">
                                黑马程序员python教程，8天python从入门到精通，学python看这套就够了
                            </span>
                        </div>
                    </div>
                </Link>
                <Link to={"https://www.bilibili.com/video/BV1wD4y1o7AS/?spm_id_from=333.337.search-card.all.click"} target="_ablank">
                <div className="inside">
                    <div className="insideLeft">
                        <img className="image-container"
                            src={require("../../../assets/images/PythonZone2.png")}></img>
                    </div>
                    <div className="insideRight">
                        <span className="titleTwo">
                            最新版Python小白教程，从0开始，针对0基础小白和基础薄弱的伙伴学习，全程干货细讲
                        </span>
                    </div>
                </div>
                </Link>
            </div>
            </div>
        </>
    )
}
export default PythonZone;