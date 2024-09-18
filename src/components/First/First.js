/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-02-08 15:13:56
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-22 15:44:49
 * @FilePath: \my-first-reactd:\桌面\second_code_1\src\pages\First\First.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import "./First.scss"
import Header from '../Header/Header'
const First = () => {
    const [menuItems, setMenuItems] = useState([
        { id: 2, label: '热门赛事', path: '/FirstContent' },
        {
            id: 3,
            label: '培训指导',
            path: '/Lesson/Czone',
            subMenu: [
                { id: 31, label: '培训课程', path: '/Lesson/Czone' },
                { id: 32, label: '训练题库', path: '/Question' },
            ],
        },
        { id: 4, label: '讨论专区', path: '/Contact/attention' },
    ])

    const [activeSubMenu, setActiveSubMenu] = useState(null)

    const handleMouseEnter = (id) => {
        setActiveSubMenu(id)
    }

    const handleMouseLeave = () => {
        setActiveSubMenu(null)
    }

    const handleSubMenuClick = (path) => {
        // 处理二级菜单点击事件，例如局部刷新页面
        // console.log('Submenu Clicked:', path)
    }
    return (
        <>
            <Header />
            <div className='app'>
                <div className='one'>
                    <ul className='ul-one'>
                        {menuItems.map((item, id) => (
                            <li key={item.id}
                                onClick={() => {
                                    handleMouseEnter(id)
                                }}
                                className={activeSubMenu === id ? 'borderActive' : " "}
                                onMouseEnter={() => handleMouseEnter(item.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <a href={item.path}>{item.label}</a>
                                {item.subMenu && activeSubMenu === item.id && (
                                    <ul className='ul-two'>
                                        {item.subMenu.map((subItem) => (
                                            <li
                                                onClick={() => {
                                                    handleMouseEnter(id)
                                                }}
                                                className={activeSubMenu === id ? 'borderActive' : " "}
                                                key={subItem.id} >
                                                <a href={subItem.path} onClick={() => handleSubMenuClick(subItem.path)}>
                                                    {subItem.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className='borderBottom'></div>
                </div>

                {/* <Routes>
               {/* 实现进入页面时候重定向 */}
                {/* <Route path="/FirstContent" element={<FirstContent />} />
               <Route path="/Lesson" element={<Lesson />}></Route>
               <Route path='/Question' element={<Question />}></Route>
           </Routes> */}
            </div>
        </>

    )
}

export default First
