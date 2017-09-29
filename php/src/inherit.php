<?php
	//hard code
	class Car{
		function __construct($brand,$color){
			$this->brand = $brand;
			$this->color = $color;
		}

		function move(){
			echo "看，$this->color 的 $this->brand 在动....<br>";
		}

		function stop(){
			echo "前面是弯道，快停车<br>";
			if($this->brand == '五菱宏光V5'){
				echo "我要漂移<br>";
			}else{
				echo "紧急制动<br>";
			}
		}
	}

	$c1 = new Car('红旗','银色');

	$c1->move();
	$c1->stop();


	// 五菱宏光继承Car
	class WuLing extends Car{
		function __construct($color){
			parent::__construct('五菱宏光V5',$color);
		}
	}

	$w1 = new WuLing('红色');
	$w1->move();
	$w1->stop();
?>