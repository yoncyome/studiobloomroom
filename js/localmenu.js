$(window).scroll(function(){
	var pageHeight = document.documentElement.scrollTop  || document.body.scrollTop;
	var mainHeight = $("#carousel-example-1z").height();
	var pageState = pageHeight - mainHeight;
	
	 /* $("#height").text(pageState); */
	
	if((pageState > -713) && (pageState <= -153)){
		$(".navbar-nav li").removeClass("active");
		$(".navbar-nav li#menu01").addClass("active");
	}else if((pageState > -199) && (pageState <= 6900)){
		$(".navbar-nav li").removeClass("active");
		$(".navbar-nav li#menu02").addClass("active");
	}else if((pageState > 6900) && (pageState <= 30000)){
		$(".navbar-nav li").removeClass("active");
		$(".navbar-nav li#menu03").addClass("active");
	}
});
