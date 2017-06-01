/*
* @Author: DELL
* @Date:   2017-04-28 13:32:55
* @Last Modified by:   DELL
* @Last Modified time: 2017-05-06 16:06:28
*/

'use strict';
/*'.list';
'#li';
'div';
function(){

}
字符串
  判断类型
     .   类名
     #   id
     tag 标签
函数
*/
/*function $(selector){
	let select=selector.trim();//去空
	let type=typeof select;
	if(type=='string'){
		let first=select.charAt(0);
		if(first=='.'){
			return document.getElementsByClassName(select.substring(1));
		}else if(first=='#'){
			return document.getElementsById(select.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z]{0,8}$/.test(select)){//正则：/^[a-zA-Z][a-zA-Z]{0,8}$/(^表开头$表结尾,[]表内容要以字母开头，{}表最大最小的个数)
			return document.getElementsByTagName(select);//一个表达式是否符合规则
		}
	}else if(type=='function'){
		window.onload=function(){
			selector();
		}
	}
}*/

//获取类型
function $(selector,ranger=document){
	if(typeof selector=='string'){//字符串
		let select=selector.trim();//去空
		let first=select.charAt(0);
		if(first=='.'){//classname
			return ranger.getElementsByClassName(select.substring(1));
		}else if(first=='#'){//id
			return document.getElementById(select.substring(1));
		}else if(/^[a-zA-Z][a-zA-Z]{0,8}$/.test(select)){//tag
			return ranger.getElementsByTagName(select);
		}
	}else if(typeof selector=='function'){//函数
		window.onload=function(){
			selector();
		}
	}
}


//change.html
	/*obj.currentStyle.attr(IE)
	get.ComputedStyle().
	getStyle(obj,attr)获取某个对象指定样式属性，attr样式，obj对象
	getStyle(box,'width')获取宽度属性
	判断浏览器(有就是w3c，没有就是ie)将括号去掉，把get.ComputedStyle当作一个属性用；对象.属性不能传进字符串，改用对象[属性]
	   ie    ie
	   w3c   */
	//e：console.log(zhangsan.play)
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}


/*
html(obj[,content])
设置或获取某个元素的内容
obj指定对象
[content]设置的内容，
没有  获取obj内容
有    设置
 */
/*function html(obj,content){
	if(content){
		//设置
		obj.innerHTML=content;
	}else{
		//获取
		return obj.innerHTML;
	}
}*/

     /*封装 获取指定元素的子元素节点 
		1.获取所有子节点
		2.筛选元素子节点
		3.数组*/
function getChilds(obj){
	let arr=[];
	let childs=obj.childNodes;
	childs.forEach(function(value){
		if(value.nodeType==1){
			arr.push(value);
		}
	})
	return arr;
}
// let child=getChilds(box);
// console.log(child);

/*封装 获取第1,最后，第num个元素节点*/
function getFirst(obj){
	return getChilds(obj)[0];
}
function getLast(obj){
	let child=getChilds(obj);
	return getLast(obj)[childs.length];
}
/*function getNum(obj,num){
	let child=getChilds(obj);
	return getChilds(obj)[num];
}*/


/*getNext找兄弟节点中第一个元素节点
   1.下一个兄弟节点是否是元素节点
   2.不是，继续找下一个兄弟节点*/
function getNext(obj){
	let a=obj.nextSibling;
	if(a===null){
		return false;
	}
	while(a.nodeType!=1){
		a=a.nextSibling;
		if(a===null){
		return false;
		}
	}
	return a;
}