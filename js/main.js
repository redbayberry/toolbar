requirejs.config({
	paths:{
		jquery:"jquery-1.11.3",
		 backtop:"backtop"
	}
});
requirejs(['jquery','backtop'],function($,backtop){
	/*new backtop.BackTop("#top",{
		mode:"move",
		pos:400,
		speed:800
	});*/
	// 用jquery插件的方法
	$("#top").backtop({mode:"move"});
	/*var scroll = new scrollto.ScrollTo({});
	$("#top").on('click',$.proxy(scroll.move,scroll));
	$(window).on('scroll',function(){
		checkPosition($(window).height());
	});
	checkPosition($(window).height());
	// function move(){
	// 	$('html,body').animate({
	// 		scrollTop:0
	// 	},800);
	// }
	// function go(){
	// 	$('html,body').scrollTop(0);
	// }
	function checkPosition(pos){
		if($(window).scrollTop() < pos){
			$("#top").fadeOut();
		}else{
			$("#top").fadeIn();
		}
	}
*/
});