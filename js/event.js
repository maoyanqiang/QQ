// JavaScript Document
var EventUtil = {
	//侦听事件
	addhandler:function(element,type,handler){
		if(element.addEventListener){		//IE9+
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){		//IE8-
			element.attachEvent('on' + type,handler);
		}
	},
	//删除侦听
	removehandler:function(element,type,handler){
		if(element.removeEventListener){		//IE9+
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){		//IE8-
			element.detachEvent('on' + type,handler);
		}
	},
	//阻止冒泡
	stopPro:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;
		}
	},
	prevent:function(event){
		if(event.preventDefault){
			event.preventDefault();			
		}else{
			event.returnValue = false;
		}
	}
};