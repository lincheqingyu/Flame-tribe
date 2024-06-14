import React, { useState } from 'react'
import "./Header.css"
import { PlusCircleOutlined } from '@ant-design/icons'
const Header = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, label: <img src={require('../../assets/images/发布.png')} alt='发布' />, path: '/Publish' },

    { id: 2, label: <img src={require('../../assets/images/个人中心-置灰 1.png')} alt="个人中心" />, path: '/Personal' },

    { id: 3, label: <img src={require('../../assets/images/Vector-1.png')} alt='消息中心' />, path: '/Letter' },

  ])

  const [activeSubMenu, setActiveSubMenu] = useState(null)

  const handleMouseEnter = (id) => {
    setActiveSubMenu(id)
  }

  const handleMouseLeave = () => {
    setActiveSubMenu(null)
  }


  return (
    <div className='header'>
      <div className='header-background'>
        <div className='header-content'>
          <div className='header-name'>
            <img src={require("../../assets/images/Component 60.png")}></img>

          </div>
          <div className='header-one'>
            <ul className='header-ul-one'>
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
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Header