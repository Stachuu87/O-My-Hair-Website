$(document).ready(function () {
	
	/* show / hide hamburger menu */
	
	var hamburger = $(".hamburger")
	var menuList = $(".menu")

	hamburger.on("click", function () {
		menuList.slideToggle();
	});
	
	menuList.on("click", function(){
		if (window.innerWidth < 640) {
			menuList.slideToggle();
		}
	})

	var resize = function () {
		if (window.innerWidth >= 640) {
			menuList.fadeIn();
			hamburger.hide();
		} else {
			menuList.hide();
			hamburger.fadeIn();
		}
	}
	resize();

	window.addEventListener("resize", function () {
		resize();
	});
	
	/* portolio pictures full screen controll */
	
	var allPics = $(".pics").find("img");
	var stylePics = $(".pics").find(".style");
	var colourPics = $(".pics").find(".colour");
	var cutPics = $(".pics").find(".cut");
	var styleBtn = $(".styleBtn");
	var colourBtn = $(".colourBtn");
	var cutBtn = $(".cutBtn");
	var allBtn = $(".allBtn");
	var fullScreen = $(".fullScreen");
	var closeBtn = $(".fullScreenClose")

	styleBtn.on("click", function(){
		allPics.hide();
		stylePics.fadeIn();
	})
	cutBtn.on("click", function(){
		allPics.hide();
		cutPics.fadeIn();
	})
	colourBtn.on("click", function(){
		allPics.hide();
		colourPics.fadeIn();
	})
	allBtn.on("click", function(){
		allPics.fadeIn();
	})
	
	allPics.on("click", function(event){
		var toAppend = $(event.target).clone();
		fullScreen.find(".picContainer").append(toAppend);
		fullScreen.fadeIn();
		fullScreen.removeClass("hidden");
	})
	
	closeBtn.on("click", function(){
		var child = fullScreen.find(".picContainer");
		child.empty();
		fullScreen.fadeOut();
		fullScreen.addClass("hidden");
	})
	
	/* controll script of arrows in promotions slides */
	
	var banners = $(".promo");
	var leftArrows = $(".leftArrow");
	var rightArrows = $(".rightArrow");

	leftArrows.on("click", function(event){
		var visible = banners.eq(0).parent().find(".visible");
		visible.removeClass("visible");
		visible.fadeOut();
		visible.addClass("hidden");
		if(banners.index(visible) ==0) {
			banners.eq(banners.length-1).fadeIn();
			banners.eq(banners.length-1).removeClass("hidden");
			banners.eq(banners.length-1).addClass("visible");
		} else {
			visible.prev().fadeIn();
			visible.prev().addClass("visible");
			visible.prev().removeClass("hidden");
		}	
	})
	
	function nextSlide () {
		var visible = banners.eq(0).parent().find(".visible");
		visible.removeClass("visible");
		visible.fadeOut();
		visible.addClass("hidden");
		if(banners.index(visible) == banners.length -1) {
			banners.eq(0).removeClass("hidden");
			banners.eq(0).fadeIn();
			banners.eq(0).addClass("visible");
		} else {
			visible.next().addClass("visible");
			visible.next().fadeIn();
			visible.next().removeClass("hidden");
		}	
	}
	
	rightArrows.on("click", function(event){
		nextSlide();
	})
	
	/* interval for scrolling promotions screens */
	
	var promotions = $(".promotions")
	
	var intervalId = setInterval(function(){
		nextSlide();
	}, 2500)
	
	promotions.on("mouseover", function(){
		clearInterval(intervalId);
	})
	
	promotions.on("mouseleave", function(){
		intervalId = setInterval(function(){
			nextSlide();
		}, 2500)
	})
	
	/* form controll */
	
	var submitBtn = $("#submit");
	var form = $("form");
	
	submitBtn.on("click", function(){
		event.preventDefault();
		var name = form.find("input").eq(0);
		var phone = form.find("input").eq(1);
		var mail = form.find("input").eq(2);
		var message = form.find("textarea");
		
		if(name.val().length == 0 || phone.val().length < 7 || mail.val().indexOf("@") < 0) {
			alert("Prosimy uzupełnić wszystkie dane w formularzu. !!UWAGA, ADRES MAIL POWINIEN ZAWIERAĆ ZNAK @!!")
		} else {
			name.val("");
			phone.val("");
			mail.val("");
			message.val("");
			var messageSent = document.createElement("h1");
			messageSent.innerText = "Dziękujemy, Twoja wiadomość została wysłana"
			fullScreen.find(".picContainer").append(messageSent);
			fullScreen.fadeIn();
			fullScreen.removeClass("hidden");
			this.timeoutId = setTimeout(function(){
				var child = fullScreen.find(".picContainer");
				child.empty();
				fullScreen.fadeOut();
				fullScreen.addClass("hidden");
			}, 1500)
		}
	})
	
	$(document).on('click', 'a', function(event){
		var diff = 0;
		if (window.innerWidth < 640) {
			diff = 300;
		} else {
			diff = 0;
		}
		event.preventDefault();
		$('body').animate({
			scrollTop: ($($.attr(this, 'href')).offset().top) -diff
		}, 800);
	});
	
});
