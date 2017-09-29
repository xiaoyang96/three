requirejs.config({
	// baseUrl:'js',
    paths : {
    	// 别名
        "jquery": "../lib/jquery3.1.1",
        "a":'moduleA'
    },
    shim:{
        // 文件名
    	"ajax":{
    		exports:'commonAjax'
    	}
    }
});


/*requirejs(['a','jquery','moduleC'],function(a,$,c){
	console.log(a,$,c);

	c.getStyle()
});*/