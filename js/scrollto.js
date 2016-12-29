define(['jquery'],function(){
	function ScrollTo(opts){
		this.opts = $.extend({},ScrollTo.DEFAULT,opts)//将opts覆盖ScrollTo.DEFAULT对象生成一个新的对象然后返回
		this.$el = $('html,body');
	}
	//将所有方法添加在构造函数的原型上，这样可以使所有方法只有一份
	ScrollTo.prototype.move =function(){

		var opts = this.opts;
		if(this.$el.scrollTop()!= opts.dest){
			if(!this.$el.is(':animated')){
				this.$el.animate({
					scrollTop:opts.dest
				},opts.speed);
			}
		}
		
	};
	ScrollTo.prototype.go = function(){
		var dest = this.opts.dest;
		if(this.$el.scrollTop()!= dest){
			this.$el.scrollTop(dest);
		}
		
	}
	ScrollTo.DEFAULT = {//形成一个静态属性
		dest:400,
		speed:800
	};
	return {
		ScrollTo:ScrollTo
	}

});