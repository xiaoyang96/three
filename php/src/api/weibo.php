<?php

	/*
		点赞思路：
			1）获取所有数据
			2）找出点赞对应的数据，点赞数量+1
			3）重新写入文件
				fwrite()
		微博消息获取：
	    返回包含多条微博记录的json数据
	 */
	$file_url = './data/weibo.json';
	$myfile = fopen($file_url, 'r') or die("打开文件失败");
	$content = fread($myfile, filesize($file_url));
	

	// 获取前端参数like&id
	// $like = isset($_GET['type']) ? $_GET['type'] : '';
	// $id = isset($_GET['id']) ?  $_GET['id'] : '';
	$like = isset($_POST['type']) ? $_POST['type'] : '';
	$id = isset($_POST['id']) ?  $_POST['id'] : '';

	if($like == 'like'){

		// 把读取到的内容转成数组
		$arr_data = json_decode($content);

		// 返回修改的那条数据
		$res;

		foreach ($arr_data as $idx => $value) {
			// 找出与传入id相同的数据
			if($value->id == $id){
				$arr_data[$idx]->likecnt++;

				// 将修改的数据赋值给$res
				$res = $arr_data[$idx];
			}
		}

		// 关闭之前打开的文件
		fclose($myfile);

		// 以写入模式打开文件
		$myfile = fopen($file_url, 'w');

		//重新写入文件
		fwrite($myfile, json_encode($arr_data,JSON_UNESCAPED_UNICODE));

		// 把修改的数据返回前端
		echo json_encode($res,JSON_UNESCAPED_UNICODE);
	}else{
		
		echo $content;
	}
	
	fclose($myfile);
?>