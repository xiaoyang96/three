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

	// echo json_encode($goodslist,JSON_UNESCAPED_UNICODE);
	
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>商品列表</title>
</head>
<body>
	<div class="goodslist">
		<ul>
			<?php
				for($i=0;$i<count($goodslist);$i++){
					echo "<li data-guid=\"{$goodslist[$i]["guid"]}\">
						<img src=\"{$goodslist[$i]["imgurl"]}\">
						<h4>{$goodslist[$i]["title"]}</h4>
						<p class=\"price\">价格：<span>{$goodslist[$i]["price"]}</span></p>
					</li>";
				}
				
			?>
		</ul>
	</div>
</body>
</html>