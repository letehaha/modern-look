$(function(){

	$("a[href*='#']").mPageScroll2id();

	$(".list_mix li").click(function() {
		$(".list_mix li").removeClass("active").animate();
		$(this).addClass("active").animate();
	});
});