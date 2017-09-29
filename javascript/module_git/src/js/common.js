//把commonjs定义成模块
//在引入模块时，回调函数中得到什么取决于定义模块时返回了什么
define(function(){
     return {
         randomNumber:function(min,max){
			return parseInt(Math.random()*(max-min+1))+min;
		}
     }
});

console.log('common');