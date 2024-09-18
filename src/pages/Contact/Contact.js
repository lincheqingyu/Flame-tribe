import React, { useState } from 'react';
import './Contact.scss';
import First from '../../components/First/First';
import { Link, Route, Routes } from 'react-router-dom';
import News from './News/News';
import Attention from './Attention/Attention';
import Match from './Match/Match';

const Contact = ({ posts = [] }) => {
  const [open, setOpen] = useState(false);
  const [isShow, setIsShow] = useState(0);

  const showDrawer = () => {
    setOpen(true);
  };

  const leftUl = [
    {
      index: 1,
      name: '最新资讯',
      path: 'Attention'
    },
    {
      index: 2,
      name: '我的关注',
      path: 'Attention'
    },
    {
      index: 3,
      name: '学习分享'
    },
    {
      index: 4,
      name: '竞赛分享',
      path: 'Match'
    }
  ];

  const listStatus = (item, index) => {
    setIsShow(index);
  };

  return (
    <>
      <First />
      <div className="backgroundTwo">
        <div className="wrap">
          <div className="leftUlBox">
            <ul className="leftUl">
              {leftUl.map((post, index) => (
                <Link to={post.path} key={index}>
                  <li
                    onClick={() => {
                      listStatus(post, index);
                    }}
                    className={isShow === index ? 'borderActive' : ''}
                  >
                    {post.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="rightContent">
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/Attention" element={<Attention posts={posts} />} />
              <Route path="/Match" element={<Match />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
