<?php
	// 创建一个数值数组
	$arr = array('张三','张四','马五');

	// 往后面添加
	$arr[] = '马蓉';
	$arr[] = '宝强';

	// 获取数组长度
	echo "数组长度" . count($arr) . PHP_EOL;

	print_r($arr);
	var_dump($arr);


	// 数组遍历
	for($i=0;$i<count($arr);$i++){
		echo $arr[$i]. PHP_EOL;
	}


	// 关联数组
	// js中的对象
	$arr2 = array("name"=>"关羽","age"=>48);

	var_dump($arr2);

	// 遍历关联数组
	foreach ($arr2 as $attr=>$item) {
		echo $attr . ": " .$item . "<br>";
	}
?>