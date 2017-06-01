/**
 * Created by hp on 2017/5/23.
 */
window.addEventListener('load',function () {
    let win=document.querySelector('.win');
    let imgbox=document.querySelector('.imgbox');
    let winwidth=win.offsetWidth;
    let ox,offset;
    imgbox.innerHTML+=imgbox.innerHTML;
    let length=imgbox.children.length;
    imgbox.style.width=winwidth*length+'px';
    win.addEventListener('touchstart',function (e) {
        let num=Math.round(imgbox.offsetLeft/winwidth);
        console.log(num)
        if(num==0){
            num=-8
        }
        if(num==-15){
            num=-7
        }
        imgbox.style.left=num*winwidth+'px'
        imgbox.style.transition=''
        let ev=e.changedTouches[0];
        ox=ev.pageX;
        offset=imgbox.offsetLeft;
    },false);
    win.addEventListener('touchmove',function (e) {
        let ev=e.changedTouches[0];
        let cx=ev.pageX;
        let lefts=cx-ox+offset;
        imgbox.style.left=lefts+'px';
    },false);
    win.addEventListener('touchend',function () {
        let num=Math.round(imgbox.offsetLeft/winwidth);
        imgbox.style.left=num*winwidth+'px';
        imgbox.style.transition=0.5+'s'
    })
})