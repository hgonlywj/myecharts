/*
    函数： 初始化图表——测试图表是折线图
        
    参数 [必选]      1 图表的数据对象
         [可选]       2 函数如果需要绑定事件，就传入初始化函数。 默认是undefind

 */
function initChart(optionData, func) {

    // 创建并添加节点到 ID 为 main 的DIV 标签中。
    // 注意：这里一定要设定插入标签的尺寸！！！！否则不能正常显示.
    var echartDiv = document.createElement('div');
    echartDiv.style.height = "400px";
    echartDiv.style.marginTop = "20px";


    // echartDiv.style.width = "400px";
    document.getElementById('main').appendChild(echartDiv);


    // 路径配置
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });


    // 使用 引入
    require(
        [
            'echarts',
            'echarts/chart/line',    // 使用柱状图就加载line模块，按需加载
            'echarts/chart/bar',     // 使用柱状图就加载bar模块，按需加载

        ],
        function (ec) {
            if (func != undefined) {
                func()
            }
            else {            
                // 基于准备好的dom，初始化echarts图表
                var myChart = ec.init(echartDiv, "macarons"); 
                
                // 数据设定
                option = optionData;
        
                // 为echarts对象加载数据 
                myChart.setOption(option); 
            }
        }
    );            


}
