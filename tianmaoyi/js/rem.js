/*
* @Author: hp
* @Date:   2017-04-01 16:57:58
* @Last Modified by:   hp
* @Last Modified time: 2017-04-01 17:00:11
*/

'use strict';
window.onload = function(){
	var designWidth = 375;

	function fontSize(){
		var CW = document.documentElement.clientWidth;
		var size = CW/designWidth*100+"px";
		document.querySelector("html").style .fontSize=size;
		console.log(size);
	}
	fontSize();
	window . onresize=fontSize;
}
