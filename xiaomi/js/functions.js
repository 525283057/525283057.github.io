/*
* @Author: lenovo
* @Date:   2017-04-28 14:51:28
* @Last Modified by:   lenovo
* @Last Modified time: 2017-05-04 16:06:20
*/

'use strict';

	function $(selector,ranger=document){

		let type=typeof selector;
		// 判断是不是字符串
		if(type=='string'){
			//先去空
			let select=selector.trim();
			// 获取首字符
			let first=select.charAt(0);
			// 判断首字符类型
			if(first=='.'){
				// 从第一个位置开始截取
				return ranger.getElementsByClassName(select.substring(1));
			}else if(first=='#'){
				return document.getElementById(select.substring(1));
			}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
				return ranger.getElementsByTagName(select);
			}else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(select)){
				return  document.createElement(select.slice(1,-1))
			}
		}
		// 如果是函数
		else if(type=='function'){
				addEvent(window,'load',selector);
		}
	}
	/*$(function(){
		let list=$('  .list')
		console.log(list)
	})*/
	// ranger表示范围，用于找类似ul下的li,或者是父元素下面的子元素


	// getComputedStyle(obj,null).attr   w3c
	// obj.currentStyle.attr    IE
	// 兼容  1、判断浏览器，看一下当前浏览器适合哪种方法
	// 		    如何判断  访问结果是不是undefined	// 
	// 		 getStyle(obj,attr)  obj是对象，attr是对象制定的样式属性,注意attr是字符串，需要加[]
	function getStyle(obj,attr){
		if(window.getComputedStyle){
			return getComputedStyle(obj,null)[attr];
		}else{
			return obj.currentStyle[attr];
		}
	}


	function html(obj,content){
		if(content){
			obj.innerHTML=content;
		}else{
			return obj.innerHTML;
		}
	}
	// html(box[0],'1111')   html(box[0])

	
	/*getChild()
		获取指定元素的子元素节点
		1、获取所有的子节点
		2、筛选
		3、数组输出
	*/
	function getChilds(obj){
		let childs=obj.childNodes;
		let arr=[];
		childs.forEach(function(value){
			if(value.nodeType==1){
				arr.push(value);
			}
		})
		return arr;
	}
	/*getFirst() 第num个元素子节点*/
	function getFirst(obj){
		return getChilds(obj)[0];
	}
	function getLast(obj){
		let childs=getChilds(obj);
		return childs[childs.length-1];
	}
	function getNum(obj,num){
		let childs=getChilds(obj);
		return childs[num];
	}
	/*getNext
		1、下一个兄弟节点
		2、判断  是元素节点  输出 a
		         不是  a的下一个 直到找到为止
		         找不见下一个兄弟节点 null  或找不见下一个元素节点
	*/
	function getNext(obj){
		let a=obj.nextSibling;
		// 判断当前节点
		if(a===null){
			return '找不见下一个兄弟节点';
		}
		while(a.nodeType!=1){
			a=a.nextSibling;
			if(a===null){
				return '下一个元素节点不存在';
			}
		}
		return a;
	}

	function getPrev(obj){
		let a=obj.previousSibling;
		// 判断当前节点
		if(a===null){
			return '找不见上一个兄弟节点';
		}
		while(a.nodeType!=1){
			a=a.previousSibling;
			if(a===null){
				return '上一个元素节点不存在';
			}
		}
		return a;
	}
	//把一个子元素插入到父对象里  调用：box.appendTo(ele)
	/*function appendTo(ele,parent){
        parent.appendChild(ele);
	}*/

	function addEvent(obj,type,fn){
		obj.addEventListener(type,fn,false)
	}
//   放大镜
	function mousemove(obj,upFn,downFn){
		obj.addEventListener('mouseswheel',fn,false);
		function fn(e){
            e.preventDefault();
            let dir=e.wheelDelta;
            if(dir==120||dir==150){
                //up
                upFn.apply(obj)
            }
            else if(dir==-120||dir==-150){
                //down
                downFn.call(obj)
            }
		}
	}
	function DOMMouseScroll(obj,upFn,downFn){
		obj.addEventListener('DOMMouseScroll',fn,false);
		function fn(e){
            e.preventDefault();
            let dir=e.detail;
            if(dir==-3){
                //up
                upFn.apply(obj)
            }
            else if(dir==3){
                //down
                downFn.call(obj)
            }
		}


	}







