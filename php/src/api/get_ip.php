<?php
	/*
		获取外网ip
		* file_get_contents
		* url:http://1212.ip138.com/ic.asp
		* 修改编码：iconv(current,target,str)
	 */
	
	$content = file_get_contents('http://1212.ip138.com/ic.asp');

	$content = iconv('gb2312','utf-8',$content);

	// 正则表达式
	preg_match('/\[([\d\.]+)\]/',$content,$res);

	// var_dump($res);

	echo $res[1];


?>