<?php
	/*
		* public（公有，默认）：公有的类成员可以在任何地方被访问。
		* private（私有）：私有的类成员只能在类本身中访问。
		* static（静态）：声明类属性或方法为静态，就可以不实例化类而直接访问
			访问方式：类名::方法
		* protected（受保护）：受保护的类成员只能在类本身、子类、父类中访问。
	 */
	// 创建一个对象
	// 类
	class Person{
		//成员属性
		// var $name = "laoxie";
		var $type = "人类";

		// 构造函数
		function __construct($name,$age){
			// this指向实例
			$this->name = $name;
			$this->age = $age;
			
		}


		// 成员方法
		// 公共方法
		public function coding(){
			echo "$this->name coding....<br>";

			$this->sing();
		}


		// 私有
		private function sing(){
			echo "看， $this->name 在唱歌...<br>";
		}


		// 静态方法
		static function run(){
			echo "我在跑步...<br>";
		}

		protected function go(){
			echo "城市套路深，我向回农村。。。";
		}
	}

	// 实例
	$p1 = new Person("laoxie",18);
	var_dump($p1);

	$p2 = new Person("lemon",28);
	var_dump($p2);

	// 如何调用属性/方法
	echo "name属性获取：$p1->name <br>";

	echo "coding方法的调用：";
	$p1->coding();
	$p2->coding();

	// $p1->sing();//私有方法不能被实例调用

	// 静态方法的调用
	// $p1->run();
	Person::run();

	// 受保护的方法
	// protected
	// $p1->go();
	Person::go();
?>