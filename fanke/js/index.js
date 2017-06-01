/**
 * Created by hp on 2017/5/31.
 */
window.onload=function () {
// 轮播
    let win = $('.win')[0];
    let imgBox = $('.imgBox')[0];
    let imgs = $('li', imgBox);
    let imgw = parseInt(getComputedStyle(imgBox, null).width);
    let current = 0, next = 0;
    console.log(imgw)
//图片放位置
    for (let i = 0; i < imgs.length; i++) {
        if (i == 0) {
            continue
        }
        imgs[i].style.left = imgw + 'px'
    }
    ;
    let t = setInterval(move, 2500);
    win.onmouseenter = function () {
        clearInterval(t)
    };
    win.onmouseleave = function () {
        t = setInterval(move, 2500)
    };
    function move() {
        next++
        if (next == imgs.length) {
            next = 0
        }
        btn[current].className = ''
        btn[next].className = 'hot'
        imgs[next].style.left = imgw + 'px'
        animate(imgs[current], {left: -imgw})
        animate(imgs[next], {left: 0})
        current = next
    }

//点击操作
    let lis = $('.list')[0];
    let btn = $('li', lis);
    for (let i = 0; i < btn.length; i++) {
        btn[i].index = i
        btn[i].onclick = function () {
            btn[current].className = ''
            this.className = 'hot'
            imgs[this.index].style.left = imgw + 'px'
            animate(imgs[current], {left: -imgw})
            animate(imgs[this.index], {left: 0})
            current = next = this.index
        }
    }
//右滑动
    let right = $('.right')[0]
    let left = $('.left')[0]
// console.log(left)
    right.onclick = function () {
        move()
    }
//左滑动
    left.onclick = function moveleft() {
        next--
        if (next < 0) {
            next = imgs.length - 1
        }
        btn[current].className = ''
        btn[next].className = 'hot'
        imgs[next].style.left = -imgw + 'px'
        animate(imgs[current], {left: imgw})
        animate(imgs[next], {left: 0})
        current = next
    }
}