$(document).ready(function () {
	var hamburger = $(".hamburger")
	var menuList = $(".menu")

	hamburger.on("click", function () {
		menuList.slideToggle();
	});

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
		var child = fullScreen.find("img");
		child.hide();
		fullScreen.fadeOut();
		fullScreen.addClass("hidden");
	})
	
});
