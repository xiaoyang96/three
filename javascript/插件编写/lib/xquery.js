function $(selector,context){
	return new Element(selector,context);
}

// 获取页面元素
function Element(selector,context){
	this._init(selector,context);
}

Element.prototype = {
	// 内部方法(私有)
	_init(selector,context){
		// 获取页面指定元素下的节点
		context = context || document;

		// 标准浏览器获取元素方式
		try{
			this.ele = context.querySelectorAll(selector);
		}catch(err){
			if(/^#/.test(selector)){
				this.ele = [document.getElementById(selector.slice(1))];
			}else if(/^\./.test(selector)){
				try{
					this.ele = context.getElementsByClassName(selector.slice(1))
				}catch(e){
					this.ele = [];
					var res = context.getElementsByTagName('*');
					var reg = new RegExp('\\b' + selector.slice(1) + '\\b');
					for(var i=0;i<res.length;i++){
						if(reg.test(res[i].className)){
							this.ele.push(res[i]);
						}
					}
				}
			}
		}
		
	},

	// 显示元素
	show(){
		for(var i=0;i<this.ele.length;i++){
			this.ele[i].style.display = 'block';
		}

		return this;
	},

	// 隐藏元素
	hide(){
		for(var i=0;i<this.ele.length;i++){
			this.ele[i].style.display = 'none';
		}

		return this;
	},

	// 事件绑定
	on(type,handler){
		// this.ele.forEach(fn)
		Array.prototype.forEach.call(this.ele,function(ele,idx){
			try{
				// 标准浏览器
				ele.addEventListener(type,handler);
			}catch(err){
				try{
					// ie8-
					ele.attachEvent('on' + type,handler);
				}catch(e){
					ele['on'+type] = handler;
				}
			}
		})
	},

	// css样式操作
	// 一个方法两种功能：
	// * 获取：获取第一个元素的样式
	// * 设置：设置每一个元素的样式
	css(name,val){
		if(val === undefined){
			var res;

			// 获取
			try{
				res = getComputedStyle(this.ele[0])[name]
			}catch(err){
				res = this.ele[0].currentStyle[name];
			}

			return res;
			
		}
		for(var i=0;i<this.ele.length;i++){
			this.ele[i].style[name] = val;
		}

		return this;
	}
}



// 操作对象
// new Element('#box')
// new Element('.box').show()
// new Element('div')

/*
	* html属性
	* DOM绑定
	* 事件监听addEventListener
 */