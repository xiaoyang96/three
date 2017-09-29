//home.js依赖common.js和carousel.js
//在require.js中如何引入模块
//模块的加载不需要写后缀名.js
//如果写后缀名，则基于html文件路径加载

require(['common','carousel'],function(com,carousel){
	//这里的代码等common，carousel模块都加载完成后执行
	//但common和carousel的加载顺序不确定
	console.log('首页');

	console.log(com.randomNumber(10,20));

	carousel();
});

