$(document).ready(function () {
	var hamburger = $(".hamburger")
	var menuList = $(".menu")

	hamburger.on("click", function () {
		menuList.slideToggle();
	});

	var resize = function () {
		if (window.innerWidth >= 640) {
			menuList.fadeIn();
			hamburger.fadeOut();
		} else {
			menuList.hide();
			hamburger.fadeIn();
		}
	}
	resize();

	window.addEventListener("resize", function () {
		resize();
	});
});
