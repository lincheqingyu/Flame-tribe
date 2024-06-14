import React from "react";
import "./Competition.scss"
import Icon, { LikeOutlined, FormOutlined, HeartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState } from "react";
const Competition = () => {
    // 点赞
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    // 处理点击事件的函数
    const handleLikeClick = () => {
        if (isLiked) {
            let likes = 100
            // 如果已经点赞过，则取消赞，点赞数量-1，标记为未点赞
            setLikes(likes - 1);
            setIsLiked(false);
        } else {
            // 如果还没点赞，则点赞数量+1，标记为已点赞
            setLikes(likes + 1);
            setIsLiked(true);
        }
    };
    return (
        <>
            {/* <div className="wrap"> */}
            <div className="rightMainBox">
                <div className="reply-wrap">

                    {/* 评论项 */}
                    <div className="reply-item">
                        {/* 头像 */}
                        <div className="root-reply-avatar">
                            {/* 当前用户头像 */}
                            <div className="reply-box-avatar">
                                <div className="bili-avatar">
                                    <img className="bili-avatar-img" src={require("../../../assets/images/Ellipse 23.png")} alt="用户头像" />
                                </div>
                            </div>
                        </div>

                        <div className="content-wrap">
                            {/* 用户名 */}
                            <div className="user-info">
                                <div className="user-name">夜冰</div>
                            </div>
                            {/* 评论时间 */}
                            <div className='reply-time'>
                                <span className="reply-time">{'2023-11-11'}</span>
                            </div>
                            {/* 评论内容 */}
                            <div className="root-reply">
                                <span className="reply-content">零基础如何参加互联网＋大赛？<br></br>
                                    <span className="reply-HL">#竞赛分享</span></span>
                                <div className="reply-img">
                                    <img className='replyImg'
                                        src={require("../../../assets/images/Rectangle 2031.png")}></img>
                                    <img className='replyImg'
                                        src={require("../../../assets/images/Rectangle 2032.png")}></img>
                                </div>
                                <div className="reply-info">
                                    {/* 评论数量 */}
                                    <span
                                        // 点击按钮时调用 handleLikeClick 函数
                                        onClick={handleLikeClick}
                                        style={{ color: isLiked ? '#FDA75F' : ' ' }} // 根据是否已点赞动态改变颜色
                                    >
                                        <LikeOutlined></LikeOutlined>
                                        <span className="delete-btn">点赞数:{likes}</span>
                                    </span>

                                    <span className="delete-btn"><FormOutlined />评论数:{100}</span>
                                    <span className="delete-btn">
                                        <HeartOutlined /> 收藏:{100}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className="wrap"> */}

            <div className="rightMainBox">
                <div className="reply-wrap">

                    {/* 评论项 */}
                    <div className="reply-item">
                        {/* 头像 */}
                        <div className="root-reply-avatar">
                            {/* 当前用户头像 */}
                            <div className="reply-box-avatar">
                                <div className="bili-avatar">
                                    <img className="bili-avatar-img" src={require("../../../assets/images/Ellipse 23.png")} alt="用户头像" />
                                </div>
                            </div>
                        </div>

                        <div className="content-wrap">
                            {/* 用户名 */}
                            <div className="user-info">
                                <div className="user-name">夜冰</div>
                            </div>
                            {/* 评论时间 */}
                            <div className='reply-time'>
                                <span className="reply-time">{'2023-11-11'}</span>
                            </div>
                            {/* 评论内容 */}
                            <div className="root-reply">
                                <span className="reply-content">零基础如何参加互联网＋大赛？
                                    <br></br>
                                    <span className="reply-HL">#竞赛分享</span></span>
                                <div className="reply-img">
                                    <img className='replyImg'
                                        src={require("../../../assets/images/Rectangle 2031.png")}></img>
                                    <img className='replyImg'
                                        src={require("../../../assets/images/Rectangle 2032.png")}></img>
                                </div>
                                <div className="reply-info">
                                    {/* 评论数量 */}
                                    <span
                                        // 点击按钮时调用 handleLikeClick 函数
                                        onClick={handleLikeClick}
                                        style={{ color: isLiked ? '#FDA75F' : ' ' }} // 根据是否已点赞动态改变颜色
                                    >
                                        <LikeOutlined></LikeOutlined>
                                        <span className="delete-btn">点赞数:{likes}</span>
                                    </span>

                                    <span className="delete-btn"><FormOutlined />评论数:{100}</span>
                                    <span className="delete-btn">
                                        <HeartOutlined /> 收藏:{100}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* </div> */}
            </div>
        </>
    )
}
export default Competition