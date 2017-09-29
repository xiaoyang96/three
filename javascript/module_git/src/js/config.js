// 配置文件
require.config({
	// baseUrl:'../lib',//基于html文件的路径,一般不设置
	paths:{
		// 这里的路径也是基于baseUrl
		'jquery':'../lib/jquery-3.2.1',
		'jqueryui':'../lib/jquery-ui-1.12.1/jquery-ui'
	},
	shim:{
		// 设置依赖
		// 表示jqueryui依赖jquery
		jqueryui:['jquery'],
		
		cookie:{
			exports:'Cookie'//暴露接口
		}
	}
})