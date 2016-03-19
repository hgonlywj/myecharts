
//---------------------例子1 专注： 
//［title］ 
//［tooltip］ 
//［lineStyle］ 
//---------------------------------------
optionData1 = {
    
    // backgroundColo : "rgba('#ff7f50', '#87cefa', '#da70d6', 1)",     //背景颜色
    
    // animation : false,  // 是否开启动画，默认开启.  这个动画是开场动画。

// 标题
    title : {              // http://echarts.baidu.com/echarts2/doc/doc.html#Title
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },


// 提示框 // http://echarts.baidu.com/echarts2/doc/doc.html#Tooltip
    tooltip : {            
        trigger : 'axis',    // item 鼠标在item时显示；  axis 在垂直轴区域显示 提示框  
        position:[180, 10],  // 当触发提示框显示的时候，提示框固定的显示位置，这里就是水平180px, 竖直10px
        backgroundColor :'rgba(0,0,0,0.2)',     // 背景颜色 默认是 ——  'rgba(0,0,0,0.7)'
        // enterable : true
              
        axisPointer : {      // 这是一个很重要的属性！！ 直线指示器！！！
            type: 'line',

// lineStyle  线条（线段）样式            
            lineStyle: {     // 设定 垂直提示坐标 直线的 样式
                color: 'red',
                width: 2,
                type: 'solid',
            },
            crossStyle: {    // 当鼠标放到item上面的时候，显示为 十字
                color: '#1e90ff',
                width: 1,
                type: 'dashed',
            },
        }                           
    },

    // 图例，每个图表最多仅有一个图例。
    legend: {
        data:['最高气温','最低气温']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} °C'
            }
        }
    ],


// series（通用）
// 驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据
    series : [
        {   
            name:'最高气温',
            type:'line',

        // 个性化的数据
        //  比如 我想让某一个数据跟其他数据不一样！那就把它变成对象。
            data:[11, 11, 15, {
                                value: 10,
                                symbol: 'starts',
                                symbolSize: 15,
                                }, 12, 13, 10],
            // data:[820, 932, 901,
            // 注意 itemStyle 支持的图形
            itemStyle : {   // 图形样式，可设置图表内图形的默认样式和强调样式
                
                normal : {
                    color : '#369',   //  正常状态的颜色 折线变成了#369
                
                // 区间填充
                    // areaStyle : {
                    //     color:"#eee",
                    //     type: 'default'
                    // },
                    
                    borderColor: '#999',   // 节点 颜色
                    borderWidth: 15,         // 节点 大小

                // // 显示 标签
                //     label : {       
                //         show: true,
                //         position : 'bottom', // 标签 显示 的位置 

                //     // 折线（区域）图、柱状（条形）图、K线图 : a（系列名称），b（类目值），c（数值）, d（无）
                //     // 显示 周一：11 周二：11 数据，在该焦点上。
                //         formatter : "{b}:{c}",

                //     // 显示数据的
                //         textStyle : {
                //             color:'red',
                //         }

                //     },
                },

            // 鼠标悬浮的时候，显示一些样式
            // 比如，关闭 normal中的标签，开启 鼠标悬浮的标签。
            // 这样鼠标悬浮的时候，就可以显示出每天的数据
                emphasis : {
                    color : '#936',
                    // 显示 标签
                    label : {       
                        show: true,
                        position : 'bottom', // 标签 显示 的位置 

                    // 折线（区域）图、柱状（条形）图、K线图 : a（系列名称），b（类目值），c（数值）, d（无）
                    // 显示 周一：11 周二：11 数据，在该焦点上。
                        formatter : "{b}:{c}",

                    // 显示数据的
                        textStyle : {
                            color:'red',
                        }

                    },
                },
            },


            
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'最低气温',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};
