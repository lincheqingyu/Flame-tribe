/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-06-06 12:07:36
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-06 12:07:40
 * @FilePath: \new_code_1d:\日常小软件\WeChat Files\新建文件夹\WeChat Files\wxid_mveuc1a21drc22\FileStorage\File\2024-02\second_code_1(1)\second_code_1\src\utils\token.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//封装和token相关的方法：存、取、删

const TokenKey = 'token_key'

// 存
function setToken(token){
    localStorage.setItem(TokenKey,token)
}

// 取
function getToken(){
    return localStorage.getItem(TokenKey)
}

//hs
function removeToken(){
    localStorage.removeItem(TokenKey)
}


export {
    setToken,
    getToken,
    removeToken
}