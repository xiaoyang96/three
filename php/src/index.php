<?php
	/*
		输出
		* echo
		* print_r()
		* var_dump()
	 */
	echo "html5_1704<br>", "guangzhou<br>";

	print_r('laoxie<br>');

	var_dump(123);
	var_dump(123.22);


	/*
		声明变量
		标识：$
	 */
	$myName = 'laoxie';


	/*
		作用域
		* 全局
		* 局部
		

		* PHP_EOL
		* 并置：.
	 */

	//声明函数
	function show(){
		// echo $myName;//直接使用报错的

		//在函数内使用全局变量
		//* $GLOBALS
		//* global
		echo $GLOBALS['myName'] . PHP_EOL;

		global $myName;
		echo $myName;

		echo "<p>show函数的执行</p>";


		// 局部变量|
		$num1 = 10;
		$num2 = 20;

		echo $num1 + $num2;

		echo "<p>我的数字是： $num1 </p>";
	}

	show();
?>