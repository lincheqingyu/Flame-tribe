import React, { useState } from 'react';
import './Data.css'
import { Card, Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';

const Data = (props) => {
   // 饼图数据
   const [sales, setSales] = useState([5, 20, 36, 10, 10, 20]);
   const [stores, setStores] = useState([15, 120, 36, 110, 110, 20]);
   // 配置饼图对象
   const getOption = (sal, sto) => {
       return {
           tooltip: {
               trigger: 'item',
               formatter: "{a} <br/>{b} : {c} ({d}%)"
           },
           legend: {
               orient: 'vertical',
               left: 'left',
               textStyle: {
                   fontSize: 13,
                   color: '#FFFFFF',
               },
               data: ['大一', '大二', '大三', '大四']
           },
           series: [
               {
                   name: '竞赛组成',
                   type: 'pie',
                   radius: '55%',
                   center: ['50%', '60%'],
                   data: [
                       { value: 500, name: '大一' },
                       { value: 1210, name: '大二' },
                       { value: 834, name: '大三' },
                       { value: 280, name: '大四' }
                   ],
                   itemStyle: {
                       emphasis: {
                           shadowBlur: 10,
                           shadowOffsetX: 0,
                           shadowColor: 'rgba(0, 0, 0, 0.5)'
                       }
                   }
               }
           ]
       }
   };
   // 柱状图数据
    const [salesTwo, setSalesTwo] = useState([5, 20, 36, 10, 10, 20,158]);
     const [storesTwo, setStoresTwo] = useState([15, 120, 36, 110, 110, 20,50]);
     const [ccc ,setccc] = useState([150,105,30,64,85,154,36])
     const [Visual ,setVisual] = useState([130,148,60,64,59,160,180])
     const [cc3 ,setcc3] = useState([140,50,80,64,25,184,180])
     const [HTML ,setHTML] = useState([160,60,180,64,45,134,180])
     const [Linux ,setLinux] = useState([170,80,160,94,75,144,80])
     const [Python ,setPython] = useState([170,80,160,94,75,144,80])
 
   // 配置柱状图对象
   const getOptionTwo = (sal, sto) => {
     return {
         tooltip: {},
         legend: {
             data: ['Java', "C++","Python","机器学习","HTML","Linux","MYSQL"]
         },
         xAxis: {
             data: ["6.17", "6.18", "6.19", "6.20", "6.21", "6.22","6.23"],
 
         },
         yAxis: {},
         series: [{
             name: 'Java',
             type: 'line',
             data: sales,
         },
         {
             name: 'C++',
             type: 'line',
             data: ccc
         },
         {
             name: 'Python',
             type: 'line',
             data: Python
         },
 
         {
             name: 'HTML',
             type: 'line',
             data: HTML
         },
         {
             name: 'Linux',
             type: 'line',
             data: Linux
         },
         {
             name: 'MYSQL',
             type: 'line',
             data: stores
         },
         {
             name: '机器学习',
             type: 'line',
             data: stores
         },
 
         ],
         legend:{
             textStyle: {
                 fontSize: 13,
                 color: '#6d7071',
               }
         }
     }
 };


  return (
    <div className='data-all'>
      <div className='data-down'>
        <div className='data-content'>
          <div className='zhexian'>
            <Row gutter={14} justify="center">
              <Col span={24}>
                <ReactEcharts option={getOptionTwo(salesTwo, storesTwo, ccc, Visual)} style={{ width: "850px", height: "450px" }} />
                <div className='data-title'>近七日各课程点击量趋势图</div>
              </Col>
            </Row>
          </div>
          <Row gutter={24} justify="center">
            <Col span={24}>
              <ReactEcharts option={getOption(sales, stores)} style={{ width: "100%", height: "450px" }} />
              <div className='data-title'>竞赛组成人员统计图</div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Data;
