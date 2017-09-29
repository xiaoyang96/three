// require.config({
// 	urlArgs: "bust=" +  (new Date()).getTime(),//(版本号)时间戳解决浏览器缓存问题
// 	paths:{	//路径别名
// 		jQuery:'../lib/jquery-3.1.1',
// 		jQueryui:'../lib/jquery-ui-1.12.1/jquery-ui',
// 		carouselJS:'../lib/jquery.lxCarousel/jquery.lxCarousel'
// 	},
// 	shim:{
// 		jQueryui:['jQuery'],
// 		carouselJS:['jQuery']
// 	}
// });
//模块化加载 引入jQ jQui carouselJS(轮播图插件)
require(['jQuery','jQueryui','carouselJS'],function(){
//---------顶部导航JS特效---------------------------	
	var $zolTopUscent = $('.zol-topmenu').children().eq(1)
	.css({position:'relative',borderLeft:'1px solid #f5f5f5',borderRight:'1px solid #f5f5f5'});
	var $zolTopUscenter = $('<div/>').hide()
	.css({zIndex:'-999',width:'90px',paddingLeft:'10px',position:'absolute',left:'-1px',border:'1px solid #ddd',backgroundColor:'#fff'});
	var $usLikeShop = $('<a href="##">').html('关注的店铺'+'<br/>');
	var $usLikeGoods = $('<a href="##">').html('关注的商品');
		$zolTopUscent.on('mouseenter',function(){
			$zolTopUscenter.stop().show(100)
			.append($usLikeShop)
			.append($usLikeGoods)
			.appendTo($zolTopUscent);
			$zolTopUscent
			.css({backgroundColor:'#fff',borderLeft:'1px solid #ddd',borderRight:'1px solid #ddd',borderBottom:'1px solid #fff'})
		})
		.on('mouseleave',function(){
			$zolTopUscenter.stop().hide(100);
			$zolTopUscent.css({backgroundColor:'#f5f5f5',border:'1px solid #f5f5f5',borderBottom:'0 none'});
		});
//---------ul li 顶部手机商城二维码---------------------------
	var $zolTopPhone = $('.zol-topmenu').children().eq(5)
	.css({position:'relative',borderLeft:'1px solid #f5f5f5',borderRight:'1px solid #f5f5f5'});
	var $zolTopcode = $('<div/>');	//生成二维码div img
		$zolTopcode.hide().css({zIndex:'-999',width:'170px',height:'170px',border:'1px solid #ddd',position:'absolute',left:'-1px',backgroundColor:'#fff'});
	var $imgs = $("<img src='./src/img/shop_wechat.png' alt='' width='130' height='130'>");
		$zolTopPhone.on('mouseenter',function(){
			$zolTopcode.stop().show(100);
			$imgs.css({margin:'20px auto'});
			$zolTopcode.html($imgs);
			$zolTopcode.appendTo($zolTopPhone);
			$zolTopPhone.css({backgroundColor:'#fff',borderLeft:'1px solid #ddd',borderRight:'1px solid #ddd',borderBottom:'1px solid #fff'})
		})
		.on('mouseleave',function(){
			$zolTopcode.stop().hide(100);
			$zolTopPhone.css({backgroundColor:'#f5f5f5',border:'1px solid #f5f5f5',borderBottom:'0 none'});
		})
//---------ul li 顶部客服电话---------------------------
	var $zolTopServer = $('.zol-topmenu').children().eq(-1)
	.css({position:'relative',borderLeft:'1px solid #f5f5f5',borderRight:'1px solid #f5f5f5'});		
	var $zolServerNum = $('<p/>');
		$zolServerNum.hide().html('400-888-9999').css({zIndex:'-999',position:'absolute',left:'-29px',border:'1px solid #ddd',width:'100px',textAlign:'center',backgroundColor:'#fff'});
		$zolTopServer.on('mouseenter',function(){
			$zolServerNum
			.stop()
			.show(100)
			.appendTo($zolTopServer);
			$zolTopServer
			.css({backgroundColor:'#fff',borderLeft:'1px solid #ddd',borderRight:'1px solid #ddd',borderBottom:'1px solid #fff'})
		})
		.on('mouseleave',function(){
			$zolServerNum.stop().hide(100);
			$zolTopServer.css({backgroundColor:'#f5f5f5',border:'1px solid #f5f5f5',borderBottom:'0 none'});
		})	
/*-------鼠标移入移出时 li的border导致会抖动的感觉，先生成border 只是变化颜色，抖动解决
隐藏元素 负的zIndex通过底框白色 相连接形成一体---------------------------------*/
/*------TOP顶部JS特效--↑↑↑↑↑--------*/

/*------TOP左侧logo城市列表显示隐藏特效--↓↓↓--------*/
	var $zolCtMap = $('.zol-hdlogo');
	var $ctMaph2 =  $('.zol-hdlogo').find('div').eq(0).find('h2');
	var $zolCtInf = $('#zol-citymap');
		$zolCtInf.find('a').eq(-1).addClass('this-city');
//事件委托 h2（全国）触发事件
		$zolCtMap.on('mouseover','h2',function(){
			$ctMaph2.css({
				borderTop:'1px solid #e6e6e6',
				borderRight:'1px solid #e6e6e6',
				borderLeft:'1px solid #e6e6e6'
			});
			$ctMaph2.children('em').css({backgroundPosition:'-10px 10px'}); //背景图标位置
			$zolCtInf.show().css({border:'1px solid #e6e6e6'});
		})
		.on('mouseleave',function(){
			$zolCtInf.hide();
			$ctMaph2.css({border:'none'});
			$ctMaph2.children('em').css({backgroundPosition:'4px 10px'});
		});


		//选择ul li城市时添加样式
		$zolCtInf.on('mouseenter','a',function(){
			$zolCtInf.show();
			$(this).addClass('select-ctactive');
			$(this).closest('li').siblings().children('a').removeClass('select-ctactive');
		})
		.on('mouseleave',function(){
			$zolCtInf.stop().hide();
			$zolCtMap.css({border:'none'});
		});


/*------大导航菜单内容显示隐藏---↓↓↓↓↓↓----------*/
//商品分类信息 显示 隐藏 菜单特效是js加css
	var $zolNav = $('.zol-nav');	//菜单ul
		$zolNav.on('mouseover','li',function(){
			 var $zolNavsec2 = $(this).find('div').eq(0);
			$(this).find('.nav-menu-conbox').stop().show(10);
				$zolNavsec2.css({backgroundPosition:'144px -10px'}); //改变右侧箭头颜色
		})
		.on('mouseout','li',function(){
			var $zolNavsec2 = $(this).find('div').eq(0);
			$(this).find('.nav-menu-conbox').stop().hide(10);
				$zolNavsec2.css({backgroundPosition:'144px 10px'});	//还原右侧箭头颜色

		});
	/*让焦点内容外层高度等于菜单ul高度*/	
	var $navHt = $zolNav.outerHeight();	//获取菜单ul高度
		$('.zol-focusinfo').outerHeight($navHt);
/*--焦点轮播图插件引用--*/
		$('.zol-carousel-lt').lxCarousel({
			imgs:['./src/img/banner/ban1.jpg','./src/img/banner/ban2.jpg','./src/img/banner/ban3.jpg']
		});
		$('.prev').html('');
		$('.next').html('');
/*-----------轮播图下方活动图片展示特效---------------------------*/
	var $zolCarUnder = $('.zol-carousel-under');
	$zolCarUnder.on('mouseenter','a',function(){
		$(this).animate({right:'10px'},30);	//向左移动
	})
	.on('mouseleave','a',function(){
		$(this).animate({right:'1px'},50);	//回归位置
	})
/*-----侧边栏工具------*/
	var $toolbar = $('.toolbar-top');
		$toolbar.on('mouseenter','div',function(){
			$(this).find('span').show().animate({left:'-54px'},100);
			if($(this).find('i')){
				$(this).find('i').css({background:'#fff',color:'#f33'});
			}
		})
		.on('mouseleave','div',function(){
			$(this).find('span').hide().animate({left:'0px'},100);
			if($(this).find('i')){
				$(this).find('i').css({background:'#f33',color:'#fff'});
			}
		})
		//点击时 弹窗登录界面
		.on('click','div',function(){
			$('#layer_show').show();
		});

/*-----侧边栏工具 点击登录账号------*/
	//输入框样式
	/*找出要加效果的input类型*/
	var $putBox = $('.tool-login-inf :text,:password');
		$putBox.each(function(idx,ele){	
		//点击当前input添加样式		
			$(this).on('click',function(){
				$(this).addClass('reg-input-sty');
			})
		//失去焦点删除当前input添加的样式		
			.on('blur',function(){
				$(this).removeClass('reg-input-sty');
			})
		});	
		//点击 × 关闭登录窗口
		$('.close-layer').on('click',()=>{
			$('#layer_show').hide();	
		});
/*-----全国团购倒计时------*/
	//设置不同商品抢购倒计时间 转为毫秒
	var endDate1 = '2017-7-11 18:40:00';
	var endtime1 = Date.parse(endDate1);
	var endDate2 = '2017-7-13 14:50:00';
	var endtime2 = Date.parse(endDate2);
	var endDate3 = '2017-7-14 18:30:00';
	var endtime3 = Date.parse(endDate3);
	var endDate4 = '2017-7-14 20:00:00';
	var endtime4 = Date.parse(endDate4);
	
	var $tgTimer1 = $('.zol-tgou-timer1');
	var $tgTimer2 = $('.zol-tgou-timer2');
	var $tgTimer3 = $('.zol-tgou-timer3');
	var $tgTimer4 = $('.zol-tgou-timer4');

	overTime1();
	overTime2();
	overTime3();
	overTime4();
	var timer1 = setInterval(overTime1,1000);
	var timer2 = setInterval(overTime2,1000);
	var timer3 = setInterval(overTime3,1000);
	var timer4 = setInterval(overTime4,1000);

	function overTime1(){

		//获取现在的时间
		var nowTime = Date.now();
		var offsetT1 = Math.floor((endtime1 - nowTime)/1000);
		// 时间完成时停止计时器
		if(offsetT1<0){
			clearInterval(timer1);
			$tgTimer1.html(`活动已结束！`);
			return;
		}

		//把毫秒转换 秒 分 时 上升到天数时 对24取余
		sec1 = offsetT1%60;
		min1 = Math.floor(offsetT1/60)%60;
		hour1 = Math.floor(offsetT1/60/60);
		//时间单位数时 补0；
		sec1 = sec1<10 ? '0' +sec1 : sec1;
		min1 = min1<10 ? '0' +min1 : min1;
		hour1 =hour1<10 ? '0' +hour1 : hour1;	
		//写入页面
		$tgTimer1.html(`剩余时间：<b>${hour1}</b>时<b>${min1}</b>分<b>${sec1}</b>秒`);									
	}
	function overTime2(){
		//获取现在的时间
		var nowTime = Date.now();
		var offsetT2 = Math.floor((endtime2 - nowTime)/1000);
		// 时间完成时停止计时器
		if(offsetT2<0){
			clearInterval(timer2);
			$tgTimer2.html(`活动已结束！`);
			return;
		}

		//把毫秒转换 秒 分 时 上升到天数时 对24取余
		sec2 = offsetT2%60;
		min2 = Math.floor(offsetT2/60)%60;
		hour2 = Math.floor(offsetT2/60/60);
		//时间单位数时 补0；
		sec2 = sec2<10 ? '0' +sec2 : sec2;
		min2 = min2<10 ? '0' +min2 : min2;
		hour2 =hour2<10 ? '0' +hour2 : hour2;
		//写入页面
		$tgTimer2.html(`剩余时间：<b>${hour2}</b>时<b>${min2}</b>分<b>${sec2}</b>秒`);									
	}
	function overTime3(){
		//获取现在的时间
		var nowTime = Date.now();
		var offsetT3 = Math.floor((endtime3 - nowTime)/1000);
		// 时间完成时停止计时器
		if(offsetT3<0){
			clearInterval(timer3);
			$tgTimer3.html(`活动已结束！`);
			return;
		}

		//把毫秒转换 秒 分 时 上升到天数时 对24取余
		sec3 = offsetT3%60;
		min3 = Math.floor(offsetT3/60)%60;
		hour3 = Math.floor(offsetT3/60/60);
		//时间单位数时 补0；
		sec3 = sec3<10 ? '0' +sec3 : sec3;
		min3 = min3<10 ? '0' +min3 : min3;
		hour3 =hour3<10 ? '0' +hour3 : hour3;
		//写入页面
		$tgTimer3.html(`剩余时间：<b>${hour3}</b>时<b>${min3}</b>分<b>${sec3}</b>秒`);									
	}
	function overTime4(){
		//获取现在的时间
		var nowTime = Date.now();
		var offsetT4 = Math.floor((endtime4 - nowTime)/1000);
		// 时间完成时停止计时器
		if(offsetT4<0){
			clearInterval(timer4);
			$tgTimer4.html(`活动已结束！`);
			return;
		}

		//把毫秒转换 秒 分 时 上升到天数时 对24取余
		sec4 = offsetT4%60;
		min4 = Math.floor(offsetT4/60)%60;
		hour4 = Math.floor(offsetT4/60/60);	
		//时间单位数时 补0；
		sec4 = sec4<10 ? '0' +sec4 : sec4;
		min4 = min4<10 ? '0' +min4 : min4;
		hour4 =hour4<10 ? '0' +hour4 : hour4;
		//写入页面
		$tgTimer4.html(`剩余时间：<b>${hour4}</b>时<b>${min4}</b>分<b>${sec4}</b>秒`);	
	}			
	//倒计时选中效果
	$('.zol-tgou-img').on('mouseenter','div',function(){
		$(this).addClass('zol-tgoutime').siblings().removeClass('zol-tgoutime');
	})
	.on('mouseleave','div',function(){
		$(this).removeClass('zol-tgoutime');
	});
	/*--品牌精选板块--*/
	var brandsData = [
		{
			id:1,
			imgUrl:'./src/img/index/F11/ryao.jpg',
			title:'',
			price:''
		},
		{imgUrl:'./src/img/index/F11/ryao9.jpg',title:'荣耀 9 4GB+64GB 现货！',price: '2,588'},
		{imgUrl:'./src/img/index/F11/ryaov9.jpg',title:'荣耀 V9 高配版 6GB+64GB',price: '2,788'},
		{imgUrl:'./src/img/index/F11/ryao8.jpg',title:'荣耀8全网通 4GB+64GB',price: '2,195'},
		{imgUrl:'./src/img/index/F11/ryao6x.jpg',title:'荣耀 畅玩6X 3GB+32GB',price: '1,145'},
	];
	var brandsList = document.createElement('ul');
	 brandsList.innerHTML = brandsData.map(function(ele){
	 	return `<li class="brandsList">
	 		<a href="#"><img src="${ele.imgUrl}"></a>
	 		<a href="#">${ele.title}</a>
	 		<p>${ele.price}</p>
	 		</li>`
	 }).join('');
	$('.brands-list').append(brandsList);

/*------电竞热门板块 轮播 tag切换-*/
/*--焦点轮播图插件引用--*/
		$('.gm-cont1').lxCarousel({
			imgs:['./src/img/index/games/d1.jpg','./src/img/index/games/d2.jpg','./src/img/index/games/d3.jpg'],
			width:594,
			height:260,
			buttons:false
		});
		$('.prev').html('');
		$('.next').html('');	
	 $('.gm-cont1').find('span').html('');
/*-------------------------------------------------*/
		$('.gm-cont2').lxCarousel({
			imgs:['./src/img/index/games/s1.jpg','./src/img/index/games/s2.jpg','./src/img/index/games/s3.jpg'],
			width:594,
			height:260,
			buttons:false
		});
		$('.prev').html('');
		$('.next').html('');	
	 $('.gm-cont2').find('span').html('');
/*-------------------------------------------------*/
		$('.gm-cont3').lxCarousel({
			imgs:['./src/img/index/games/n1.jpg','./src/img/index/games/n2.jpg','./src/img/index/games/n3.jpg'],
			width:594,
			height:260,
			buttons:false
		});
		$('.prev').html('');
		$('.next').html('');	
	 $('.gm-cont3').find('span').html('');	
/*-------------------------------------------------*/
	//tag切换轮播
	var $carouselBox = $('.carousel-box');
	$carouselBox.slice(1).hide();
	$('.gm-guide').children().eq(0).addClass('guide-line');
	$('.gm-guide').on('click','li',function(){
		var $idx = $(this).index();
		$(this).addClass('guide-line').siblings().removeClass('guide-line');
		$carouselBox.eq($idx).show().siblings('.carousel-box').hide();
	})
/*-----电竞热门 foot板块 --*/
	var diyData1 = [
		{imgUrl:'./src/img/index/games/j1.jpg',title:'名龙堂 撸神机 I5 7500/GTX1060台式电脑主机',price: '¥4199.00'},
		{imgUrl:'./src/img/index/games/j2.jpg',title:'七代i5 DIY游戏主机',price: '¥2599.00'},
		{imgUrl:'./src/img/index/games/j3.png',title:'i7 7700K/GTX1060/8G/240G',price: '¥6388.00'},
	];
	var brandsDiy = document.createElement('ul');
	 brandsDiy.innerHTML = diyData1.map(function(ele){
	 	return `<li>
	 		<a href="#"><img src="${ele.imgUrl}"></a>
	 		<a href="#" class="title-inf">${ele.title}</a>
	 		<p>${ele.price}</p>
	 		</li>`
	 }).join('');
	$('.gmlt-under').append(brandsDiy);

/*-----电竞热门 right板块 --*/
	var diyData2 = [
		{imgUrl:'./src/img/index/diy/diy1.jpg',title:'影驰8G内存',price: '¥389.00'},
		{imgUrl:'./src/img/index/diy/diy2.jpg',title:'影驰120G固态硬盘',price: '￥339.00'},
		{imgUrl:'./src/img/index/diy/diy3.jpg',title:'i7 7700K中文盒装CPU',price: '¥2469.00'},
		{imgUrl:'./src/img/index/diy/diy4.jpg',title:'七彩虹 战斧主板',price: '¥369.00'},
		{imgUrl:'./src/img/index/diy/diy5.jpg',title:'美商海盗船VS450电源',price: '¥239.00'},
		{imgUrl:'./src/img/index/diy/diy6.jpg',title:'华硕Z270-AR台式机游戏电脑主板',price: '¥1199.00'},
	];
	var brandsDiyRt = document.createElement('ul');
	 brandsDiyRt.innerHTML = diyData2.map(function(ele){
	 	return `<li>
	 		<a href="#"><img src="${ele.imgUrl}"></a>
	 		<a href="#" class="title-inf">${ele.title}</a>
	 		<p>${ele.price}</p>
	 		</li>`
	 }).join('');
	$('.gmrt-list').append(brandsDiyRt);
/*--3C数码集市--*/	
/*-----3C数码板块left板块 --*/
	var digitalData1 = [
		{imgUrl:'./src/img/index/ncode/dv1.jpg',title:'索尼A9全画幅微单单机',price: '¥28888.00'},
		{imgUrl:'./src/img/index/ncode/dv2.jpg',title:'佳能77D(18-200mm)套机',price: '¥7199.00'},
		{imgUrl:'./src/img/index/ncode/dv3.jpg',title:'索尼 A7RII单机身',price: '¥15100.00'},
		{imgUrl:'./src/img/index/ncode/dv4.jpg',title:'佳能 5D Mark IV(单机)',price: '¥21699.00'},
		{imgUrl:'./src/img/index/ncode/dv5.jpg',title:'佳能 EOS M6套机(15-45mm )',price: '¥4259.00'},
		{imgUrl:'./src/img/index/ncode/dv6.jpg',title:'尼康 D7100 （18-140mm)套机',price: '¥5789.00'},
	];
	var digitalLt = document.createElement('ul');
	digitalLt.innerHTML = digitalData1.map(function(ele){
	 	return `<li>
	 		<a href="#"><img src="${ele.imgUrl}"></a>
	 		<a href="#" class="digbox-title">${ele.title}</a>
	 		<p>${ele.price}</p>
	 		</li>`
	 }).join('');
	$('.digbox-goods').append(digitalLt);
/*-----3C数码板块right板块 --*/
	var digitalData2 = [
		{imgUrl:'./src/img/index/ncode/nb1.png',title:'戴尔 热血游匣2游戏本',price: '¥3888.00'},
		{imgUrl:'./src/img/index/ncode/nb2.jpg',title:'ThinkPad S2-11CD商务笔记本电脑8G 256G',price: '¥5488.00'},
		{imgUrl:'./src/img/index/ncode/nb3.jpg',title:'惠普 暗影精灵2 Pro游戏本',price: '¥4388.00'},
		{imgUrl:'./src/img/index/ncode/nb4.jpg',title:'联想小新700电竞版',price: '¥4699.00'},
		{imgUrl:'./src/img/index/ncode/nb5.jpg',title:'msi微星GL62M 7RD-233CN游戏本',price: '¥5388.00'},
		{imgUrl:'./src/img/index/ncode/nb6.jpg',title:'华硕 飞行堡垒尊享版',price: '¥4399.00'}
	];
	var digitalRt = document.createElement('ul');
	digitalRt.innerHTML = digitalData2.map(function(ele){
	 	return `<li>
	 		<a href="#"><img src="${ele.imgUrl}"></a>
	 		<a href="#" class="digbox-title">${ele.title}</a>
	 		<p>${ele.price}</p>
	 		</li>`
	 }).join('');
	$('.digbox-rtgoods').append(digitalRt);
/*-----数码超市板块 --*/
	var shopData = [
		{imgUrl:'./src/img/index/shop/s1.jpg',title:'戴尔 热血游匣2游戏本',price: '¥3888.00'},
		{imgUrl:'./src/img/index/shop/s2.jpg',title:'ThinkPad S2-11CD商务笔记本电脑8G 256G',price: '¥5488.00'},
		{imgUrl:'./src/img/index/shop/s3.jpg',title:'惠普 暗影精灵2 Pro游戏本',price: '¥4388.00'},
		{imgUrl:'./src/img/index/shop/s4.jpg',title:'联想小新700电竞版',price: '¥4699.00'},
		{imgUrl:'./src/img/index/shop/s5.jpg',title:'msi微星GL62M 7RD-233CN游戏本',price: '¥5388.00'},
		{imgUrl:'./src/img/index/shop/s6.jpg',title:'华硕 飞行堡垒尊享版',price: '¥4399.00'},
		{imgUrl:'./src/img/index/shop/s7.jpg',title:'华硕 飞行堡垒尊享版',price: '¥4399.00'},
		{imgUrl:'./src/img/index/shop/s8.jpg',title:'华硕 飞行堡垒尊享版',price: '¥4399.00'},
		{imgUrl:'./src/img/index/shop/s9.jpg',title:'华硕 飞行堡垒尊享版',price: '¥4399.00'},
		{imgUrl:'./src/img/index/shop/s10.jpg',title:'华硕 飞行堡垒尊享版',price: '¥4399.00'},
	];
	var shopGoods = document.createElement('ul');
	shopGoods.innerHTML = shopData.map(function(ele){
	 	return `<li>
	 		<a href="#"><img src="${ele.imgUrl}"></a>
	 		<a href="#" class="shopbox-title">${ele.title}</a>
	 		<p>${ele.price}</p>
	 		</li>`
	 }).join('');
	$('.zol-shopbox').append(shopGoods);
/*-----页脚板块 --*/
	var infoData = [
		{title:'先行赔付',info:'权益受损先行赔付'},
		{title:'正品保障',info:'正规渠道售后有保障'},
		{title:'无忧退换',info:'严格按照消法处理'},
		{title:'发票保障',info:'售卖商品可提供发票'},
		{title:'快递包邮',info:'满399快递包邮'},
		{title:'急速发货',info:'24小时内发货'}
	];
	var footInfo = document.createElement('ul');
	footInfo.innerHTML = infoData.map(function(ele){
		return `<li style="background:url(./src/img/footer/service-bg.png) no-repeat">
			<a href="#" target="_blank">
			<p>${ele.title}</p>
			<p>${ele.info}</p>
			</a>
			</li>`		
	}).join('');
	$('.foot-page').append(footInfo);

});




