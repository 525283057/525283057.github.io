/*
* @Author: hp
* @Date:   2017-04-27 17:51:31
* @Last Modified by:   hp
* @Last Modified time: 2017-05-08 22:02:33
*/

'use strict';
window.onload=function () {
    let e11 = document.getElementsByClassName('e11');
    let e13 = document.getElementsByClassName('e13');
    let r10 = document.getElementsByClassName('r10');
    let b3 = document.getElementsByClassName('b3');
    let b35 = document.getElementsByClassName('b35');
    let b36 = document.getElementsByClassName('b36');
    let m1 = document.getElementsByClassName('m1');
    let m13 = document.getElementsByClassName('m13');
    for (let i = 0; i < 10; i++) {
        e11[i].onmouseover = function () {
            e11[i].style.background = '#FF6700';
            e13[i].style.display = 'block'
        }
        e11[i].onmouseout = function () {
            e11[i].style.background = 'rgba(96, 89, 82, 0.0)';
            e13[i].style.display = 'none'
        }
    }
    for (let i = 0; i < r10.length; i++) {
        r10[i].onmouseover = function () {
            r10[i].style.color = '#fff'
        }
        r10[i].onmouseout = function () {
            r10[i].style.color = '#CDCAC2'
        }
    }
    for (let i = 0; i < b3.length; i++) {
        b3[i].onmouseover = function () {
            b35[i].style.opacity = '1';
            b36[i].style.opacity = '1';
        }
        b3[i].onmouseout = function () {
            b35[i].style.opacity = '0';
            b36[i].style.opacity = '0';
        }
        b35[i].onmouseover = function () {
            b35[i].style.background = '#A9A9A9';
        }
        b35[i].onmouseout = function () {
            b35[i].style.background = '#D9D9D9';
        }
        b36[i].onmouseover = function () {
            b36[i].style.background = '#A9A9A9';
        }
        b36[i].onmouseout = function () {
            b36[i].style.background = '#D9D9D9';
        }
    }
    for (let i = 0; i < m1.length; i++) {
        m1[i].onmouseover = function () {
            m13[i].style.background = '#FF6700';
            m13[i].style.border = '2px solid#FF6700';
        }
        m1[i].onmouseout = function () {
            m13[i].style.background = '';
            m13[i].style.border = '2px solid#fff';
        }
    }
// 轮播
    let win=$('.e')[0];
    let imgBox=$('.imgBox')[0];
    let imgs=$('li',imgBox);
    let imgw=parseInt(getComputedStyle(imgBox,null).width);
    let current=0,next=0;
// console.log(imgw)
//图片放位置
    for(let i=0;i<imgs.length;i++){
        if(i==0){
            continue
        }
        imgs[i].style.left=imgw+'px'
    };
    let t=setInterval(move,2000);
    win.onmouseenter=function () {
        clearInterval(t)
    };
    win.onmouseleave=function () {
        t=setInterval(move,2000)
    };
    function move() {
        next++
        if(next==imgs.length){
            next=0
        }
        btn[current].className=''
        btn[next].className='hot'
        imgs[next].style.left=imgw+'px'
        animate(imgs[current],{left:-imgw})
        animate(imgs[next],{left:0})
        current=next
    }
//点击操作
    let lis=$('.list')[0];
    let btn=$('li',lis);
    for(let i=0;i<btn.length;i++){
        btn[i].index=i
        btn[i].onclick=function () {
            btn[current].className=''
            this.className='hot'
            imgs[this.index].style.left=imgw+'px'
            animate(imgs[current],{left:-imgw})
            animate(imgs[this.index],{left:0})
            current=next=this.index
        }
    }
//右滑动
    let right=$('.right')[0]
    let left=$('.left')[0]
// console.log(left)
    right.onclick=function () {
        move()
    }
//左滑动
    left.onclick=function moveleft() {
        next--
        if(next<0){
            next=imgs.length-1
        }
        btn[current].className=''
        btn[next].className='hot'
        imgs[next].style.left=-imgw+'px'
        animate(imgs[current],{left:imgw})
        animate(imgs[next],{left:0})
        current=next
    }
// 搭配的移入效果
    let re=document.getElementsByClassName('da')[0];
    let re1=document.getElementsByClassName('a2');
    let re2=document.getElementsByClassName('s2');
    re.onmouseenter=function(){
        re.style.color='#FD674C';
        er.style.color='';
        dian.style.color='';
        chi.style.color='';
        re.style.textDecoration='underline';
        er.style.textDecoration='';
        chi.style.textDecoration='';
        dian.style.textDecoration='';
        for(let i=0;i<re1.length;i++){
            re1[i].style.display='block';
            er1[i].style.display='none';
            dian1[i].style.display='none';
            chi1[i].style.display='none';
        }
        for(let i=0;i<re2.length;i++){
            re2[i].style.display='block';
            er2[i].style.display='none';
            dian2[i].style.display='none';
            chi2[i].style.display='none';
        }
    };

    let er=document.getElementsByClassName('da')[1];
    let er1=document.getElementsByClassName('a3');
    let er2=document.getElementsByClassName('s3');
    er.onmouseenter=function(){
        er.style.textDecoration='underline';
        re.style.textDecoration='none';
        chi.style.textDecoration='';
        dian.style.textDecoration='';
        er.style.color='#FD674C';
        re.style.color='#000';
        dian.style.color='';
        chi.style.color='';
        for(let i=0;i<re1.length;i++){
            er1[i].style.display='block';
            re1[i].style.display='none';
            dian1[i].style.display='none';
            chi1[i].style.display='none';
        }
        for(let i=0;i<re2.length;i++){
            er2[i].style.display='block';
            re2[i].style.display='none';
            dian2[i].style.display='none';
            chi2[i].style.display='none';
        }
    }

    let dian=document.getElementsByClassName('da')[2];
    let dian1=document.getElementsByClassName('a4');
    let dian2=document.getElementsByClassName('s4');
    dian.onmouseenter=function(){
        dian.style.textDecoration='underline';
        re.style.textDecoration='none';
        chi.style.textDecoration='';
        er.style.textDecoration='';
        dian.style.color='#FD674C';
        re.style.color='#000';
        er.style.color='';
        chi.style.color='';
        for(let i=0;i<re1.length;i++){
            dian1[i].style.display='block';
            re1[i].style.display='none';
            er1[i].style.display='none';
            chi1[i].style.display='none';
        }
        for(let i=0;i<re2.length;i++){
            dian2[i].style.display='block';
            re2[i].style.display='none';
            er2[i].style.display='none';
            chi2[i].style.display='none';
        }
    }

    let chi=document.getElementsByClassName('da')[3];
    let chi1=document.getElementsByClassName('a5');
    let chi2=document.getElementsByClassName('s5');
    chi.onmouseenter=function(){
        chi.style.textDecoration='underline';
        re.style.textDecoration='none';
        dian.style.textDecoration='';
        er.style.textDecoration='';
        chi.style.color='#FD674C';
        er.style.color='';
        re.style.color='#000';
        dian.style.color='';
        for(let i=0;i<re1.length;i++){
            chi1[i].style.display='block';
            re1[i].style.display='none';
            er1[i].style.display='none';
            dian1[i].style.display='none';
        }
        for(let i=0;i<re2.length;i++){
            chi2[i].style.display='block';
            re2[i].style.display='none';
            er2[i].style.display='none';
            dian2[i].style.display='none';
        }
    }

// 配件的移入效果
    let men=document.getElementsByClassName('pei')[0];
    let men1=document.getElementsByClassName('f2');
    let men2=document.getElementsByClassName('g2');
    men.onmouseenter=function(){
        men.style.color='#FD674C';
        bao.style.color='';
        tie.style.color='';
        qi.style.color='';
        men.style.textDecoration='underline';
        bao.style.textDecoration='';
        tie.style.textDecoration='';
        qi.style.textDecoration='';
        for(let i=0;i<re1.length;i++){
            men1[i].style.display='block';
            bao1[i].style.display='none';
            tie1[i].style.display='none';
            qi1[i].style.display='none';
        }
        for(let i=0;i<re2.length;i++){
            men2[i].style.display='block';
            bao2[i].style.display='none';
            tie2[i].style.display='none';
            qi2[i].style.display='none';
        }
    };

    let bao=document.getElementsByClassName('pei')[1];
    let bao1=document.getElementsByClassName('f3');
    let bao2=document.getElementsByClassName('g3');
    bao.onmouseenter=function(){
        bao.style.textDecoration='underline';
        men.style.textDecoration='none';
        tie.style.textDecoration='';
        qi.style.textDecoration='';
        bao.style.color='#FD674C';
        men.style.color='#000';
        tie.style.color='';
        qi.style.color='';
        for(let i=0;i<re1.length;i++){
            bao1[i].style.display='block';
            men1[i].style.display='none';
            tie1[i].style.display='none';
            qi1[i].style.display='none';
        }
        for(let i=0;i<re2.length;i++){
            bao2[i].style.display='block';
            men2[i].style.display='none';
            tie2[i].style.display='none';
            qii2[i].style.display='none';
        }
    }

    let tie=document.getElementsByClassName('pei')[2];
    let tie1=document.getElementsByClassName('f4');
    let tie2=document.getElementsByClassName('g4');
    tie.onmouseenter=function(){
        tie.style.textDecoration='underline';
        men.style.textDecoration='none';
        bao.style.textDecoration='';
        qi.style.textDecoration='';
        tie.style.color='#FD674C';
        men.style.color='#000';
        bao.style.color='';
        qi.style.color='';
        for(let i=0;i<re1.length;i++){
            tie1[i].style.display='block';
            men1[i].style.display='none';
            bao1[i].style.display='none';
            qi1[i].style.display='none';
        }
        for(let i=0;i<re2.length;i++){
            tie2[i].style.display='block';
            men2[i].style.display='none';
            bao2[i].style.display='none';
            qi2[i].style.display='none';
        }
    }

    let qi=document.getElementsByClassName('pei')[3];
    let qi1=document.getElementsByClassName('f5');
    let qi2=document.getElementsByClassName('g5');
    qi.onmouseenter=function(){
        qi.style.textDecoration='underline';
        men.style.textDecoration='none';
        bao.style.textDecoration='';
        tie.style.textDecoration='';
        qi.style.color='#FD674C';
        bao.style.color='';
        men.style.color='#000';
        tie.style.color='';
        for(let i=0;i<re1.length;i++){
            qi1[i].style.display='block';
            men1[i].style.display='none';
            bao1[i].style.display='none';
            tie1[i].style.display='none';
        }
        for(let i=0;i<re2.length;i++){
            qi2[i].style.display='block';
            men2[i].style.display='none';
            bao2[i].style.display='none';
            tie2[i].style.display='none';
        }
    }

// 周边的移入效果
    let remen=document.getElementsByClassName('zhou')[0];
    let remen1=document.getElementsByClassName('j2');
    let remen2=document.getElementsByClassName('k2');
    remen.onmouseenter=function(){
        remen.style.color='#FD674C';
        fu.style.color='';
        mi.style.color='';
        sheng.style.color='';
        xiang.style.color='';
        remen.style.textDecoration='underline';
        fu.style.textDecoration='';
        mi.style.textDecoration='';
        sheng.style.textDecoration='';
        xiang.style.textDecoration='';
        for(let i=0;i<4;i++){
            remen1[i].style.display='block';
            fu1[i].style.display='none';
            mi1[i].style.display='none';
            sheng1[i].style.display='none';
            xiang1[i].style.display='none';
        }
        for(let i=0;i<5;i++){
            remen2[i].style.display='block';
            fu2[i].style.display='none';
            mi2[i].style.display='none';
            sheng2[i].style.display='none';
            xiang2[i].style.display='none';
        }
    };

    let fu=document.getElementsByClassName('zhou')[1];
    let fu1=document.getElementsByClassName('j3');
    console.log()
    let fu2=document.getElementsByClassName('k3');
    fu.onmouseenter=function(){
        fu.style.textDecoration='underline';
        remen.style.textDecoration='none';
        mi.style.textDecoration='';
        sheng.style.textDecoration='';
        xiang.style.textDecoration='';
        fu.style.color='#FD674C';
        remen.style.color='#000';
        mi.style.color='';
        sheng.style.color='';
        xiang.style.color='';
        for(let i=0;i<4;i++){
            fu1[i].style.display='block';
            remen1[i].style.display='none';
            mi1[i].style.display='none';
            sheng1[i].style.display='none';
            xiang1[i].style.display='none';
        }
        for(let i=0;i<5;i++){
            fu2[i].style.display='block';
            remen2[i].style.display='none';
            mi2[i].style.display='none';
            sheng2[i].style.display='none';
            xiang2[i].style.display='none';
        }
    }

    let mi=document.getElementsByClassName('zhou')[2];
    let mi1=document.getElementsByClassName('j4');
    let mi2=document.getElementsByClassName('k4');
    mi.onmouseenter=function(){
        mi.style.textDecoration='underline';
        remen.style.textDecoration='none';
        fu.style.textDecoration='';
        sheng.style.textDecoration='';
        xiang.style.textDecoration='';
        mi.style.color='#FD674C';
        remen.style.color='#000';
        fu.style.color='';
        sheng.style.color='';
        xiang.style.color='';
        for(let i=0;i<4;i++){
            mi1[i].style.display='block';
            remen1[i].style.display='none';
            fu1[i].style.display='none';
            sheng1[i].style.display='none';
            xiang1[i].style.display='none';
        }
        for(let i=0;i<5;i++){
            mi2[i].style.display='block';
            remen2[i].style.display='none';
            fu2[i].style.display='none';
            sheng2[i].style.display='none';
            xiang2[i].style.display='none';
        }
    }

    let sheng=document.getElementsByClassName('zhou')[3];
    let sheng1=document.getElementsByClassName('j5');
    let sheng2=document.getElementsByClassName('k5');
    sheng.onmouseenter=function(){
        sheng.style.textDecoration='underline';
        remen.style.textDecoration='none';
        fu.style.textDecoration='';
        mi.style.textDecoration='';
        xiang.style.textDecoration='';
        sheng.style.color='#FD674C';
        remen.style.color='#000';
        fu.style.color='';
        mi.style.color='';
        xiang.style.color='';
        for(let i=0;i<re1.length;i++){
            sheng1[i].style.display='block';
            remen1[i].style.display='none';
            fu1[i].style.display='none';
            mi1[i].style.display='none';
            xiang1[i].style.display='none';
        }
        for(let i=0;i<re2.length;i++){
            sheng2[i].style.display='block';
            remen2[i].style.display='none';
            fu2[i].style.display='none';
            mi2[i].style.display='none';
            xiang2[i].style.display='none';
        }
    }

    let xiang=document.getElementsByClassName('zhou')[4];
    let xiang1=document.getElementsByClassName('j6');
    let xiang2=document.getElementsByClassName('k6');
    xiang.onmouseenter=function(){
        xiang.style.textDecoration='underline';
        remen.style.textDecoration='none';
        fu.style.textDecoration='';
        mi.style.textDecoration='';
        sheng.style.textDecoration='';
        xiang.style.color='#FD674C';
        fu.style.color='';
        remen.style.color='#000';
        mi.style.color='';
        sheng.style.color='';
        for(let i=0;i<re1.length;i++){
            xiang1[i].style.display='block';
            remen1[i].style.display='none';
            fu1[i].style.display='none';
            mi1[i].style.display='none';
            sheng1[i].style.display='none';
        }
        for(let i=0;i<re2.length;i++){
            xiang2[i].style.display='block';
            remen2[i].style.display='none';
            fu2[i].style.display='none';
            mi2[i].style.display='none';
            sheng2[i].style.display='none';
        }
    }

// 明星的效果
        let imgbox=$('.imgbox')[0];
        let t1=$('.t')[0];
        let div=$('div',imgbox);
        let widths=1226;
        let win1=$('.win1')[0];
        let btnL=$('.btnL',t1)[0];
        let btnR=$('.btnR',t1)[0];
        let t2,flag1=true;

        // 点击左右
        btnL.onclick=function(){
            if(!flag1){
                flag1=false;
            }
            moveR();
        }
        btnR.onclick=function(){
            if(!flag1){
                flag1=false;
            }
            move1();
        }

        // 移入停止  移出开始
         t2=setInterval(move1, 5000)
         win1.onmouseover=function(){
         clearInterval(t2)
         }
         win1.onmouseout=function(){
         t2=setInterval(move1, 5000)
         }

        // 左右轮播
        function move1(){
            animate(imgbox,{left:-widths},function(){
                let first=getFirst(imgbox);
                imgbox.appendChild(first);
                imgbox.style.left=0;
            })
        }
        function moveR(){
            let last=getLast(imgbox);
            let first=getFirst(imgbox);
            imgbox.insertBefore(last,first);
            imgbox.style.left=-widths+'px';
            animate(imgbox,{left:0},function(){
                flag1=true
            })
        }
//内容
    let imgkey=$('.kuai')[0];
    let widthq=298;
    let btnl=$('.b35')[0];
    let btnr=$('.b36')[0];
    let flag2=true;

    // 点击左右
    btnl.onclick=function(){
        if(!flag2){
            flag2=false;
        }
        moveR2();
    }
    btnr.onclick=function(){
        if(!flag2){
            flag2=false;
        }
        move2();
    }

    // 左右轮播
    function move2(){
        animate(imgkey,{left:-widthq},function(){
            let first=getFirst(imgkey);
            imgkey.appendChild(first);
            imgkey.style.left=0;
        })
    }
    function moveR2(){
        let last=getLast(imgkey);
        let first=getFirst(imgkey);
        imgkey.insertBefore(last,first);
        imgkey.style.left=-widthq+'px';
        animate(imgkey,{left:0},function(){
            flag2=true
        })
    }
};