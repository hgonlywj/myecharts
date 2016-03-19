/*

    柱状图：
    
        title 


 */

optionData1 = {

    /*
        每个图表最多有一个标题控件，每个标题控件课设主副标题。
        show : true,
        text : 主标题文本，'\n'指定换行
        link : 主标题文本超链接 
        target : 指定窗口打开主标题超链接，支持'self' | 'blank'，不指定等同为'blank'（新窗口）
        x : 水平安放位置，默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        y:垂直安放位置，默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
        itemGap:
    */
    title : {
        text: '某地区蒸发量和降水量',
        link: "http://www.baidu.com", 
        subtext: '纯属虚构',         // 副标题文本，'\n'指定换行
        sublink : "www.sina.com",
        x : "left",
        y : "top",
        borderWidth : 2,
        borderColor : 'red',
        itemGap:10,
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量']
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
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {

        // 柱间距离，默认为柱形宽度的30%，可设固定值 
            // barGap: '－20%',  // 没有生效

        // 类目间柱形距离，默认为类目间距的20%，可设固定值
            // barCategoryGap : "100%", // 没有生效

        // 柱条（K线蜡烛）宽度，不设时自适应
            barWidth:20,

            name:'蒸发量',
            type:'bar',
            data:[100.0, 124.9, 317.0, 423.2, 325.6, 176.7, 135.6, 162.2, 32.6, 230.0, 46.4, 30.3],
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
            },

            itemStyle : {
                normal : {
                // 柱形图 边框的颜色 和 宽度， 圆角
                    barBorderColor:'#369',
                    barBorderWidth:5,

                //柱形边框圆角，单位px，默认为0，
                //支持传入数组分别指定柱形4个圆角半径，如:[5, 5, 0, 0]（顺时针左上，右上，右下，左下）
                    barBorderRadius:4,

                // 这个在柱状图里面的使用还是挺酷的。
                // 使用 function 这里是通过 index 来进行的控制，然后
                // 
                    color: function(params) {
                        // console.log(params);    // 这是返回的数据参数的对象。

                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                }
            }


        },
        // {
        //     name:'降水量',
        //     type:'bar',
        //     data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        //     markPoint : {
        //         data : [
        //             {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
        //             {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
        //         ]
        //     },
        //     markLine : {
        //         data : [
        //             {type : 'average', name : '平均值'}
        //         ]
        //     }
        // }
    ]
};
                    