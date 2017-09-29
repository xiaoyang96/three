<?php
	//http://localhost:1704/api/reg.php?username=laoxie
	$username = $_GET['username'];

	$reged = array('张三','李四','王尼玛','奥巴马','laoxie');

	if(in_array($username,$reged)){
		echo "no";
	}else{
		echo "yes";
	}

	
?>