/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-02-28 19:53:33
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-07 22:18:19
 * @FilePath: \new_code_1d:\日常小软件\WeChat Files\新建文件夹\WeChat Files\wxid_mveuc1a21drc22\FileStorage\File\2024-02\second_code_1(1)\second_code_1\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//axios的封装处理
import axios from "axios";
import {getToken} from "@/utils/token";
//1.根域名配置
//2.超时时间
//3.请求/相应拦截器

const request = axios.create({
    baseURL: 'http://127.0.0.1:4523/m1/4425505-4070744-default',    //mock本地环境
    //baseURL: 'https://mock.apipark.cn/m1/3290659-2648811-default',    //请求根地址:Apifox
    // baseURL: 'http://localhost:8080',    //请求根地址:8080
    timeout: 2000,  //超时时间2s
    headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
//在请求发送之前 做拦截，插入一些自定义的配置
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 操作这个config 注入token数据
    // 1.获取到token
    // const token = getToken()
    // if(token){
    //
    // }
    // 2、按照后端的格式要求做token拼接
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
//在相应返回到客户端之前 做拦截，重点处理返回的数据
request.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export {request}