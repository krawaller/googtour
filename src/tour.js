if (window.location.search!=="?pure") {
	document.body.setAttribute("class","tour");
	var currentarticle;
	[].forEach.call(document.querySelectorAll("article"),function(a){
		a.addEventListener("click",function(){
			currentarticle && currentarticle.setAttribute("class","hiding");
			a.setAttribute("class","showing");
			currentarticle = a;
		});
	});
}