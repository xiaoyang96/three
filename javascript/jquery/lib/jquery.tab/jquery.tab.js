/*
	原理：扩展jQuery的原型对象
 */
;(function($){
	// $.prototype.tab = function(){
	$.fn.gdstab = function(options){
		//这里的this为实例，jquery对象

		this.each(function(idx,ele){
			//这里的this就是ele

		});
	}
})(jQuery);

//$('#box').tab();
//$('.box').tab();
