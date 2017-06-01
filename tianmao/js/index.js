/*
* @Author: hp
* @Date:   2017-05-01 23:09:36
* @Last Modified by:   hp
* @Last Modified time: 2017-05-07 18:43:09
*/

'use strict';
window.onload=function(){
	let liq=document.getElementsByClassName('w');
    let box=$('.w1')[0];
    let widths=parseInt(getComputedStyle(box,null).width);
    console.log(widths);

    // 初始化
    for(let i=0;i<liq.length;i++){
        if(i==0){
            continue;
        }
        liq[i].style.left=widths+'px'
    }
    let now=0,next=0;
    let dian=document.getElementsByClassName('w2');
    let t;
    t=setInterval(move,2000);
    function move(){
        next++
        if(next==liq.length){
           next=0;
        }
    liq[next].style.left=widths+'px';
    dian[now].style.background='rgba(0, 0, 0, 0.2)';
    dian[next].style.background='rgba(255, 255, 255, 0.5)';

    animate(liq[now],{left:-widths});
    animate(liq[next],{left:0})
    now=next;
    }
            
    // 轮播点
    for(let i=0;i<dian.length;i++){
        dian[i].onmouseover=function(){
            dian[now].style.background='rgba(0, 0, 0, 0.2)';
            dian[i].style.background='rgba(255, 255, 255, 0.5)';
            if(i==now){
                return;
            }   
            if(i<now){
                liq[i].style.left=`${-widths}px`;
                animate(liq[i],{left:0});
                animate(liq[now],{left:widths});
            }else{
                liq[i].style.left=`${widths}px`;
                animate(liq[i],{left:0});
                animate(liq[now],{left:-widths});
            }
            now=next=i;
        }
    }
    box.onmouseenter=function(){
        clearInterval(t)
    }
    box.onmouseleave=function(){
        t=setInterval(move,2000);
    }


    let yin=document.getElementsByClassName('e30');
    let q1=document.getElementsByClassName('e3');
    for(let i=0;i<q1.length;i++){
        q1[i].onmouseover=function(){
            yin[i].style.opacity='1';
        }
        q1[i].onmouseout=function(){
            yin[i].style.opacity='0'
        }
    }

    // 猜你喜欢
    let b1=document.getElementsByClassName('b1');
    let lia=b1[0].getElementsByTagName('li');
    let lib=b1[1].getElementsByTagName('li');
    for(let i=0;i<lia.length;i++){
        lia[i].onmouseover=function(){
            lia[i].style.border='1px solid red'
        }
        lia[i].onmouseout=function(){
            lia[i].style.border='1px solid#fff'
        }
        lib[i].onmouseover=function(){
            lib[i].style.border='1px solid red'
        }
        lib[i].onmouseout=function(){
            lib[i].style.border='1px solid#fff'
        }
    }

    // 直播间
    let maotou=document.getElementsByClassName('maotou2');
    let zhibojian=document.getElementsByClassName('zhibojian');
    zhibojian[0].onmouseover=function(){
        maotou[0].style.width=`80px`;
        maotou[0].style.height=`67px`
    }
    zhibojian[0].onmouseout=function(){
        maotou[0].style.width=`70px`;
        maotou[0].style.height=`57px`
    }

    // 左边栏
    let n=0,flag3=true;
    let ce=document.getElementsByClassName('ce')[0];
    let liz=ce.getElementsByTagName('li');
    let floors=document.querySelectorAll('.floor');
    let arr=[];
        floors.forEach(function(value,index){
            arr.push(value.offsetTop);
        })
    for(let i=0;i<liz.length;i++){
        liz[i].onclick=function(){
            flag3=false;
            delete arr[0,1];
            animate(document.body,{scrollTop:arr[i+1]-100},function(){flag3=true});
            n=i;
        }
    }

}
window.onscroll=function(){
    let flag=true,flag1=true;
    let tops=document.body.scrollTop;
    let nav=document.getElementsByClassName('nav');


    let ch=window.innerHeight;
    let floors=document.querySelectorAll('.floor');
    let arr=[];
        floors.forEach(function(value,index){
            arr.push(value.offsetTop);
        })
    if(!flag){
        return;
    }
    for(let i=0;i<arr.length;i++){
        if(tops+ch>arr[i]+200){
            let floor=document.getElementsByClassName('floor');
            let imgs=floor[i].getElementsByTagName('img');
            for(let j=0;j<imgs.length;j++){
                imgs[j].src=imgs[j].alt;
            }
        }
    }


    let ce=document.getElementsByClassName('ce')[0];
    let liz=ce.getElementsByTagName('li');
    if(tops>=550){
        if(flag1){
            flag1=!flag1;
            nav[0].style.transform=`translateY(50px)`
            ce.style.transform=`translateX(38px)`
            ce.style.height=`332px`
        }
    }else if(tops<550){
        if(flag1){
            flag1=!flag1;
            nav[0].style.transform=`translateY(-50px)`
            ce.style.transform=`translateX(-38px)`
            ce.style.height=`0`
        }
    }
    
    delete arr[0];
    arr.forEach(function(value,index){//0-6
                if((ch-500)+(tops)>value+100){
                    // lcs[index].style.background='#6C0ADA';
                    // console.log(typeof index);
                    for(let b=1;b<liz.length;b++){
                        liz[b].style.background='#626262';
                    }
                    switch(index){
                            case 1: liz[index].style.background='#EA5F8D';break;
                            case 2: liz[index].style.background='#0AA6E8';break;
                            case 3: liz[index].style.background='#64C333';break;
                            case 4: liz[index].style.background='#F15453';break;
                            case 5: liz[index].style.background='#19C8A9';break;
                            case 6: liz[index].style.background='#F7A945';break;
                            case 7: liz[index].style.background='#DD2727';break;
                    }                               
                }       
        })
}