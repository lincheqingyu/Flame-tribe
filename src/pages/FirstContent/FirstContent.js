/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-02-14 01:44:43
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-02-16 16:32:36
 * @FilePath: \my-first-reactd:\桌面\second_code_1\src\pages\First\FiratContent\FirstContent.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react";
import "./FirstContent.scss"
import First from "../../components/First/First";
import { Carousel } from 'antd';
import { Link } from "react-router-dom";;
const FirstContent = () => {
    return (
        
        <div>
            <First></First>
             <Carousel autoplay className='auto'>
                <div >

                    <img
                        src={require("../../assets/images/Rectangle1996 (3).png")}></img>
                </div>
                <div>
                    {/* <h3 style={contentStyle}> */}
                    <img className='autoi'
                        src={require("../../assets/images/Rectangle1996 (1).png")}></img>
                    {/* <h3/> */}
                </div>
                <div>
                    <img src={require("../../assets/images/Rectangle1996 (2).png")}></img>
                </div>
                <div>
                    <img src={require("../../assets/images/Rectangle1996 (4).jpg")}></img>
                </div>
            </Carousel>
                <div className='two'>
                <div className='twoTop'>
                    <h2 className='recommend'>推荐竞赛</h2>
                    <Link to><span className='spanMore'>更多竞赛>></span></Link>
                </div>
                <div className='wrap'>
                    <div className='wrapLeft'>
                        <img src={require("../../assets/images/Rectangle 1996.png")}></img>
                    </div>
                    <div className='wrapRight'>
                        <h2 className='title'>2024年工业互联网能力测评考试【大数据应用工程师】</h2>
                        <span className='time'>报名时间：2024.01.18-2024.02.24</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default FirstContent;