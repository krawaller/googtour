if (window.location.search!=="?pure") {$("body").addClass("tour");}

$("article").on("click",function(){
	$el = $(this);
	if (!$el.hasClass("showing")){
		$(".showing").removeClass("showing").addClass("hiding");
		$el.removeClass("hiding").addClass("showing");
	}
});