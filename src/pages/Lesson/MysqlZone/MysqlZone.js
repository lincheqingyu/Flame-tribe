/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-02-16 14:44:51
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-05 18:12:25
 * @FilePath: \my-first-reactd:\桌面\second_code_1\src\pages\Lesson\CZone\CZone.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import { Link } from "react-router-dom";

const CZone = () => {
    return (
        <div className="wrapCzone">
            <div className="wrap">
                    <Link to={"https://www.bilibili.com/video/BV1Kr4y1i7ru/?spm_id_from=333.337.search-card.all.click&vd_source=50a41a46f55e272818d8843e428fd803"} target="_blank">
                        <div className="inside">
                            <div className="insideLeft">
                                <img className="image-container"
                                    src={require("../../../assets/images/MysqlZone1.png")} alt="C++ Tutorial"></img>
                            </div>
                            <div className="insideRight">
                                <span className="titleTwo">
                              MySQL数据库入门到精通，从mysql安装到mysql高级、mysql优化全囊括
                                </span>
                            </div>
                        </div>
                    </Link>
                    <Link to={"https://www.bilibili.com/video/BV12x411D7xr/?spm_id_from=333.337.search-card.all.click&vd_source=50a41a46f55e272818d8843e428fd803"} target="_blank">
                    <div className="inside">
                        <div className="insideLeft">
                            <img className="image-container"
                                src={require("../../../assets/images/MysqlZone2.png")} alt="C++ Zero Basis"></img>
                        </div>
                        <div className="insideRight">
                            <span className="titleTwo">
                            MySQL知识精讲+mysql实战案例_零基础mysql数据库入门到高级全套教程
                            </span>
                        </div>
                    </div>
                    </Link>
            </div>
        </div>
    );
}

export default CZone;
