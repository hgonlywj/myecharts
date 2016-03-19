/*
    专注属性 ： 
        ［stack］ 堆叠！！！！
            [symbol]

 */



optionData3 = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['邮件营销','搜索引擎', '联盟广告'],
        x: 'left',                      // 'center' | 'right' | {number},  显示区域
        y: 'top',                       
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
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
            type : 'value'
        }
    ],
    series : [
        {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'邮件营销',
            type:'line',
        // 堆叠
            stack: '总量1',
            data:[120, 132, 101, 134, 90, 230, 210],
        
        },
        {
            name:'搜索引擎',
            type:'line',
            stack: '总量1',

         data:[820, 932, 901, 934, 1290, 1330, 1320],

        // 显示的样式
        /*
            默认循环选择类型有：
            'circle' | 'rectangle' | 'triangle' | 'diamond' | 
            'emptyCircle' | 'emptyRectangle' | 'emptyTriangle' | 
            'emptyDiamond' 另外，还支持五种更特别的标志图形
            'heart'（心形）、'droplet'（水滴）、'pin'（标注）、'arrow'（箭头）和'star'（五角星），
            这并不出现在常规的8类图形中，但无论是在系列级还是数据级上你都可以指定使用，
            同时，'star' + n（n>=3)可变化出N角星，
            如指定为'star6'则可以显示6角星自1.3.5起支持symbol为自定义图片，
            格式为'image://' + '图片路径'， 如'image://../asset/ico/favicon.png' 

         */ 
            symbol : 'diamond',
        // 显示的大小
            symbolSize : 10,
        // 旋转
            symbolRotate: 45,

        // 是否启用平滑曲线
            smooth : true,       // true 启用平滑曲线， 默认不是，默认是直线。

        // 是否启用图例（legend）hover时的联动响应（高亮显示）
            legendHoverLink : true,
        }
    ]
};
                    