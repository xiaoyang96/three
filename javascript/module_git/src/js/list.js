require(['config'],function(){

	// 列表
	require(['jquery','common','carousel','jqueryui','cookie'],function($,com,car,jqui,cookie){
		$('h1').css('color','#f00');

		$('#box').draggable();

		console.log(cookie)
	})
})