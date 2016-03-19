
// ----------------------------例子 2  专注 ［legend］ ［series］----------------------------------

optionData2 = {

// 图例
    legend: {
        orient: 'horizontal',           // 'vertical'     显示的 水平还是 竖直
        x: 'left',                      // 'center' | 'right' | {number},  显示区域
        y: 'top',                       // 'center' | 'bottom' | {number}
        backgroundColor: '#eee',
        borderColor: 'rgba(178,34,34,0.8)',
        borderWidth: 2,
        padding: 10,                    // [5, 10, 15, 20]
        itemGap: 30,                    // 各个item之间的间隔，单位px，默认为10，
        textStyle: {color: 'red'},
        selected: {                     // 配置默认选中状态，可配合LEGEND.SELECTED事件做动态数据载入
            '降水量' : true,
        },

        // 图例内容数组, 数组项通常为{string}
        // 每一项代表一个系列的name
        
        // 使用根据该值索引series中同名系列所用的图表类型和itemStyle，
        // 如果索引不到，该item将默认为没启用状态。 

        data: [                         
            {
                name:'蒸发量',
                icon : 'http://echarts.baidu.com/echarts2/doc/asset/ico/favicon.png',
                textStyle:{fontWeight:'bold', color:'green'}
            },
            '降水量','最高气温', '最低气温'
        ]
    },



    series : [
        {
            clickable: true, //  数据图形是否可点击，默认开启，如果没有click事件响应可以关闭
           
            name:'蒸发量',    //  与图例相关联 legend.data索引相关
            type:'bar',      //  展示 图形 类型
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6],
        },
        {
            name:'最高气温',
            type:'line',
            yAxisIndex: 1,
            data:[11, 11, 15, 13, 12, 13, 10]
        },
        {
            name:'降水量',
            type:'bar',
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6]
        }
    ],




    xAxis :{
        data : ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value} ml'
            }
        },
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}', 
            },
            splitLine : {show : false}
        }
    ],
};

//动态添加默认不显示的数据
function optionData2fun() {
 
    myChart.on(ecConfig.EVENT.LEGEND_SELECTED, function (param){
        var selected = param.selected;
        var len;
        var added;
        if (selected['最低气温']) {
            len = option.series.length;
            added = false;
            while (len--) {
                if (option.series[len].name == '最低气温') {
                    // 已经添加
                    added = true;
                    break;
                }
            }
            if (!added) {
                myChart.showLoading({
                    text : '数据获取中',
                    effect: 'whirling'
                });
                setTimeout(function (){
                    option.series.push({
                        name:'最低气温',
                        type:'line',
                        yAxisIndex: 1,
                        data:[-2, 1, 2, 5, 3, 2, 0]
                    });
                    myChart.hideLoading();
                    myChart.setOption(option);
                }, 2000)
            } 
        }
    });
}

//-------------------------------------------------------------------------
             
                    
    