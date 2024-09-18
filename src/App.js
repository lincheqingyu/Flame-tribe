/*
 * @Description: 
 * @version: 
 * @Author: PeiCong Tang
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-22 14:50:54
 * @FilePath: /new_code_1/src/App.js
 */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

//导入页面组件
import Login from "./pages/Login/Login"
import Lesson from './pages/Lesson/Lesson'
import CZone from './pages/Lesson/CZone/CZone'
import PythonZone from './pages/Lesson/PythonZone/PythonZone'
import FirstContent from './pages/FirstContent/FirstContent'
import Question from './pages/Question/Question'
import Contact from './pages/Contact/Contact'
import News from './pages/Contact/News/News'
import Attention from './pages/Contact/Attention/Attention'
// import Match from './pages/Contact/Match/Match'

import Logon from "./pages/Logon/Logon"
import Amend from "./pages/Amend/Amend"
import Letter from "./pages/Letter/Letter"
import Official from './pages/Letter/Official/Official'
import Personal from "./pages/Personal/Personal"
import Reply from "./pages/Letter/Reply/Reply"
import All from './pages/Letter/Official/All/All'
import Comment from './pages/Letter/Reply/Comment/Comment'
import Examine from "./pages/Letter/Official/Examine/Examine"
import Notice from "./pages/Letter/Official/Notice/Notice"
import Competition from './pages/Personal/Competition/Competition'
import Data from "./pages/Personal/Data/Data"
import Information from "./pages/Personal/Prove/Prove"
import Project from "./pages/Personal/Project/Project"
import Publish from "./pages/Publish/Publish"
import Match from './pages/Contact/Match/Match'

function App () {
    const [posts, setPosts] = useState([]);

    const addPost = (newPost) => {
      setPosts((prevPosts) => [...prevPosts, newPost]);
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Lesson/*' element={<Lesson />}></Route>
                <Route path='/PythonZone' element={<PythonZone />}></Route>
                <Route path='/CZone' element={<CZone />}></Route>
                <Route path='/FirstContent' element={<FirstContent />}></Route>
                <Route path='/Question' element={<Question />}></Route>
                <Route path='/News' element={<News />}></Route>
                <Route path='/Attention' element={<Attention />}></Route>
                <Route path='/Match' element={<Match />}></Route>
                <Route path="/contact/*" element={<Contact posts={posts} />} />
                <Route path='/Logon' element={<Logon />} />
                <Route path='/Amend' element={<Amend />} />
                <Route path='/Letter/*' element={<Letter />} />
                <Route path='/Personal/*' element={<Personal />} />
                <Route path='/Reply' element={<Reply />} />
                <Route path="/Official" element={<Official/>}></Route>
                <Route path='/All' element={<All />} />
                <Route path='/Notice' element={<Notice />} />
                <Route path='/Examine' element={<Examine />} />
                <Route path='/Competition' element={<Competition />} />
                <Route path='/Data' element={<Data />} />
                <Route path='/Information' element={<Information />} />
                <Route path='/Project' element={<Project />} />
                <Route path="/publish" element={<Publish addPost={addPost} />} />
                <Route path='/Match' element={<Match />} />
              
            </Routes>
        </BrowserRouter>
    )
}

export default App
