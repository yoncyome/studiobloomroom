$(window).scroll(function(){
	var pageHeight = document.documentElement.scrollTop  || document.body.scrollTop;
	var mainHeight = $("#carousel-example-1z").height();
	var pageState = pageHeight - mainHeight;
	
	 /* $("#height").text(pageState); */
	
	if((pageState > -713) && (pageState <= -153)){
		$(".navbar-nav li").removeClass("active");
		$(".navbar-nav li#menu01").addClass("active");
	}else if((pageState > -199) && (pageState <= 480)){
		$(".navbar-nav li").removeClass("active");
		$(".navbar-nav li#menu02").addClass("active");
	}else if((pageState > 480) && (pageState <= 2480)){
		$(".navbar-nav li").removeClass("active");
		$(".navbar-nav li#menu03").addClass("active");
	}else if((pageState > 2480) && (pageState <= 2700)){
		$(".navbar-nav li").removeClass("active");
		$(".navbar-nav li#menu04").addClass("active");
	}else if((pageState > 2700) && (pageState <= 3200)){
		$(".navbar-nav li").removeClass("active");
		$(".navbar-nav li#menu05").addClass("active");
	}else if((pageState > 3200)){
		$(".navbar-nav li").removeClass("active");
		$(".navbar-nav li#menu06").addClass("active");
	}
});
