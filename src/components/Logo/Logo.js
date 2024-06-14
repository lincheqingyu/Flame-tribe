/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-02-08 14:22:21
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-02-08 15:00:04
 * @FilePath: \my-first-reactd:\桌面\second_code_1\src\components\Logo\Logo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//Logo 闲享社群
import React, { useEffect, useRef } from "react"
import './Logo.scss'

const Logo = () => {
  const logoRef = useRef(null)

  useEffect(() => {
    // 获取 logo-picture 的高度，并将其设置为 line-name 的高度
    if (logoRef.current) {
      const logoHeight = logoRef.current.clientHeight
      const lineName = document.querySelector('.line')
      if (lineName) {
        lineName.style.height = `${logoHeight}px`
      }
    }
  }, [])

  return (
    <div className='logo'>
      <img
        className='logo-picture'
        ref={logoRef}
        // src={require('../../assets/images/logo.png')}
        alt="logo"
      />
      <div className='line'>
        <div className='black-bg' style={{ height: '50%', margin: '-10px' }}></div>
        <div className='blue-bg' style={{ height: '50%', backgroundColor: 'rgba(14, 93, 232, 0.45)', display: 'flex', alignItems: 'flex-end' }}>
          <span className='logo-name'>闲享社群</span>
        </div>
      </div>
    </div>
  )
}

export default Logo