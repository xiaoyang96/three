require.config({
	urlArgs:'v=' +Date.now(),
	// baseUrl:'js',
	paths:{
		jquery:'../lib/jquery-3.2.1',
		lxzoom:'..lib/jquery.lxzoom/jquery.lxzoom',
		jqueryui:'../lib/jquery-ui-1.12.1/jquery-ui'
	},
	shim:{
		jqueryui:['jquery']
	}
});