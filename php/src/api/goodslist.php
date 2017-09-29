<?php
	// 创建空数组
	$goodslist = array();

	$price = array(998,1998,2998,4998,5998);

	// 遍历把商品信息写入数组
	for($i=1;$i<=5;$i++){
		// 商品信息（关联数组）
		$goods = array(
			'guid'=>"goods$i",
			'title'=>"万年美少女00$i",
			'imgurl'=>"img/g$i.jpg",
			'price'=>$price[array_rand($price)]
		);
		$goodslist[] = $goods;
	}

	
	echo json_encode($goodslist,JSON_UNESCAPED_UNICODE);
	
?>