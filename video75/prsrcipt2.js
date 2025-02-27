function loadscript(src,callbck) {
	var script = document.createElement('script');
	script.src = src;
	script.onload = function(){
		callbck(null,src); 
	}
	script.onerror = function(){
		callbck(new Error("Src not loaded"), src);
	}

	document.body.appendChild(script);
}

loadscript("https://code.jquery.com/jquery-3.3.1.slim.min.js",heyyDOne)

function heyyDOne(pr,src) {
	if(pr){
		console.log(pr);
	} else{
		console.log('the src is loaded:' + src);
	}
}







