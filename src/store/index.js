/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-02-28 19:53:33
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-06 12:00:55
 * @FilePath: \new_code_1d:\日常小软件\WeChat Files\新建文件夹\WeChat Files\wxid_mveuc1a21drc22\FileStorage\File\2024-02\second_code_1(1)\second_code_1\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//组合redux子模块
//导出store实例


import {configureStore} from '@reduxjs/toolkit'
import userReducer from "@/store/modules/user";
const store = configureStore({
    reducer:{
        user:userReducer
    }

})
export default store
