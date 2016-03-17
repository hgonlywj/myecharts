# Echarts 学习使用


	### (1)		<meta charset="utf-8">

	### (2)    	<!-- 为ECharts准备一个具备大小（宽高）的Dom -->
 			   	<div id="main" style="height:400px"></div>

 	### (3)     <!-- ECharts单文件引入 -->
    			<script src="http://echarts.baidu.com/build/dist/echarts.js"></script>

    ### (4)		// 基于准备好的dom，初始化echarts图表,
                var myChart = ec.init(document.getElementById('main')); 


    ### (5)    	// 这里说明一下： echarts.js 的文件与echarts－all.js  有区别的！
		    	
		    	// 路径配置，这里按需要加载了，使js文件大小减少了。
		        require.config({
		            paths: {
		                echarts: 'http://echarts.baidu.com/build/dist'
		            }
		        });
        

    	var option = {}		// 初始化


    ### (6)		myChart.setOption(option); // 为echarts对象加载数据 



   ### echart 是数据驱动!!! 这个可以认真思考一下。
   ---- 
   ### 名词解释
   	http://echarts.baidu.com/echarts2/doc/doc.html#名词解析



   ### 文件目录安排
   	----
   		### testhg
   				让 echarts 飞起来

   		### 从one 开始,记录每一个例子；
   		### 该文件中的 .md 会显示使用说明。
   		



































