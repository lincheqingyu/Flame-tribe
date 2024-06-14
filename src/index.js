/*
 * @Author: linsdfghj 2214112680@qq.com
 * @Date: 2024-06-07 20:20:55
 * @LastEditors: linsdfghj 2214112680@qq.com
 * @LastEditTime: 2024-06-07 21:52:43
 * @FilePath: \new_code_1d:\日常小软件\WeChat Files\新建文件夹\WeChat Files\wxid_mveuc1a21drc22\FileStorage\File\2024-06\second_code-main\second_code-main\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';//引入antd全局样式
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
//导入路由
import router from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <React.StrictMode>
        {/*路由绑定*/}
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
    </Provider>,
);
