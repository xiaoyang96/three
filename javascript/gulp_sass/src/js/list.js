requirejs(['config'],function(){
	requirejs(['jquery','a','ajax'],function($,a,aj){
		console.log(aj);
		aj();
	});


	// 在这个位置引入其他模块C
	// var c = require('c')
})