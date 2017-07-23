window.onload = darg;

function darg(){
	var otitle = document.getElementById("title");
	otitle.onmousedown = fnDown;
	document.getElementById("colse").onclick = function(){
		document.getElementById("box").style.display = 'none';
	}
}
function fnDown(event){
	var box = document.getElementById("box"),
		disX = event.clientX - box.offsetLeft;
		disY = event.clientY - box.offsetTop;
	
	document.onmousemove = function(event){
		fnMove(event,disX,disY);
	}
	
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmouseup = null;
	}
	
}
function fnMove(event,postX,postY){
	var box = document.getElementById("box"),
		l = event.clientX - postX,
		t = event.clientY - postY,
		winW = document.documentElement.clientWidth,
		winH = document.documentElement.clientHeight,
		maxW = winW - box.offsetWidth,
		maxH = winH - box.offsetHeight;
		if(l<0){
			l=0;
		}else if(l>maxW){
			l=maxW;
		}
		
		if(t<0){
			t=0;
		}else if(t>maxH){
			t=maxH;
		}
	box.style.left = l + 'px';
	box.style.top = t + 'px';
}
