<?php
	/*
		根据ip获取城市
		* http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=27.46.236.176
	 */
	
	$ip = isset($_GET['ip']) ? $_GET['ip'] : '';
	
	$content = file_get_contents("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=$ip");

	$res = json_decode($content,true);

	echo $res['city'];


?>