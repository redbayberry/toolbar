define(['jquery','scrollto'],function($,scrollto){
	function BackTop(el,opts){
		console.log(opts);
		this.opts= $.extend({},BackTop.DEFAULTS,opts);
		this.$el = $(el);
		this.scroll = new scrollto.ScrollTo({dest:0,speed:this.opts.speed});
		this._checkpos();
		var _self =this;
		$(window).on('scroll',$.proxy(this._checkpos,this));
		this.$el.on('click',function(){
			console.log(_self);
			if(_self.opts.mode === "move"){
				$.proxy(_self._move,_self);
			}else{
				$.proxy(_self._go,_self);
			}
		});
	} 
	BackTop.DEFAULTS = {
		mode:"move",
		pos:$(window).height(),
		speed:800
	};
	BackTop.prototype._move = function(){
		this.scroll.move();
	};
	BackTop.prototype._go = function(){
		this.scroll.go();
	};
	BackTop.prototype._checkpos = function(){
		if($(window).scrollTop() > this.opts.pos){
			this.$el.fadeIn();
		}else{
			this.$el.fadeOut();
		}
	};
	//jquery插件的常用格式
	$.fn.extend({
		backtop:function(opts){
			return this.each(function(){
				new BackTop(this,opts);
			});
		}
	})
	return{
		BackTop:BackTop
	};
});