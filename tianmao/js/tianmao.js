/*
* @Author: Administrator
* @Date:   2017-05-01 18:30:59
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-01 23:43:38
*/

'use strict';

	function $(selector,can=document){
	let type = typeof selector;
	if(type=='string'){
		//元素的获取
		let select =selector.trim();
		let first = selector.charAt(0);
		if(first=='.'){
			return can.getElementsByClassName(select.substring(1));
		}else if(first=='#'){
			return document.getElementById(select.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
			//正则
			return can.getElementsByTagName(select);
		}else{
			return ;
		}
	}else if(type=='function'){
		//添加事件
		window.onload = function(){
			selector();
		}
	}else{
		return false;
	}

}