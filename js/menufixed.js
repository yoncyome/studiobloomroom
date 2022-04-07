$(function(){
	var menu = $("#navi");
	var menuTop = menu.offset().top;
	$(window).scroll(function(){
		if($(window).scrollTop() >= menuTop){
			menu.addClass("fixed");
			$("body").css("margin-top","72px");
		}else {
			menu.removeClass("fixed");
			$("body").css("margin-top","0");
		}
		
	});
});