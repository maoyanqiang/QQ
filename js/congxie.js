window.onload = function(){
	//拖曳效果
	var otitle = document.getElementById("title"),
		colse = document.getElementById("colse");
	otitle.onmousedown = darg;
	colse.onclick = function(){
		 document.getElementById("box").style.display = 'none';
	}
	
	
	//下拉效果
	var obox = document.getElementById("select"),
		omenu = document.getElementById("select_menu"),
		olis = omenu.getElementsByTagName("li"),
		otext = document.getElementById("select_text"),
		oicon = document.getElementById("icon");
		obox.onclick = function(event){
			event = event || window.event;
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble;
			}
			omenu.style.display = 'block';
		}
		
		for(i = 0;i<olis.length;i++){
			olis[i].onclick = function(){
				var olis_text = this.innerText,
					olis_class = this.className;
				otext.innerText = olis_text;
				oicon.className = "icon "+olis_class;
				omenu.style.display = 'none';
			}
		}
		
		document.onclick = function(){
			omenu.style.display = 'none';
		}
	}

//单击的时候触发的操作
function darg(event){
	var box = document.getElementById("box"),
		x = event.clientX - box.offsetLeft,
		y = event.clientY - box.offsetTop;
	
	document.onmousemove = function(event){
		fnMove(event,x,y);
	}
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmouseup = null;
	}
}

//移动的时候触发的操作
function fnMove(event,postX,postY){
	var box = document.getElementById("box"),
		l = event.clientX - postX,
		t = event.clientY - postY,
		winW = document.documentElement.clientWidth,
		winH = document.documentElement.clientHeight;
		maxW = winW - box.offsetWidth,
		maxH = winH - box.offsetHeight;
		
	if(l<0){
		l=0;
	}else if(l>maxW){
		l=maxW;
	};
	
	if(t<0){
		t=0;
	}else if(t>maxH){
		t=maxH;
	}
	
	box.style.left = l + 'px';
	box.style.top = t + 'px';
}


