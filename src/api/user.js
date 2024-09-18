/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-06-06 11:59:03
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-06 11:59:07
 * @FilePath: \new_code_1d:\日常小软件\WeChat Files\新建文件夹\WeChat Files\wxid_mveuc1a21drc22\FileStorage\File\2024-02\second_code_1(1)\second_code_1\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//封装用户相关的所有请求
import { request } from "@/utils";

//1.登录请求

export function loginAPI(formData) {
    //发送网络请求
    return request({
        url: '/user/login',
        method: 'POST',//请求方式
        data: formData
    })
}

//2.获取用户信息
export function getProfileAPI() {
    //发送网络请求
    return request({
        //url: '/login',
        url: '/personal',
        method: 'GET',//请求方式
    })
}


// 3.更新用户信息
export function updateProfileAPI(formData) {
    //发送网络请求
    return request({
        url: '/user/update',
        method: 'POST',//请求方式
        data: formData
    })
}

// 4.注册
export function registerAPI() {
    return request({
        url: '/user/add',
        method: 'POST',
    })
}

// 5.发送验证码
export function sendVerificationCodeAPI(){
    return request({
        url: '/user/send',
        method: 'POST',
    })
}


