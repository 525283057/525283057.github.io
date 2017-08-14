/**
 * Created by hp on 2017/5/18.
 */
window.onload=function () {
    let canvas=document.querySelector('canvas');
    let zhe=document.querySelector('.zhe');
    let pi=document.querySelector('.pi');
    let ctx=canvas.getContext('2d');
    let palette=new Palette(canvas,ctx,zhe);

    //线条
    let xiantiao1= document.querySelector('.icon-xiantiao');
    xiantiao1.onclick=function () {
        palette.xiantiao()
    };

    //铅笔
    let qianbi1=document.querySelector('.icon-qianbi');
    qianbi1.onclick=function () {
        palette.qianbi()
    }

    //矩形
    let juxing1=document.querySelector('.icon-juxing');
    juxing1.onclick=function () {
        palette.juxing()
    }

    //多边形
    let duobianxing1=document.querySelector('.icon-duobianxing');
    duobianxing1.onclick=function () {
        palette.n=prompt('请输入边数','6')
        palette.duobianxing()
    }

    //圆
    let yuan1=document.querySelector('.icon-yuan');
    yuan1.onclick=function () {
        palette.yuan()
    }

    //撤销
    let chexiao1=document.querySelector('.icon-iocnchexiao');
    document.body.onkeydown=function (e) {
        if(e.ctrlKey&&e.keyCode==90){
            palette.chexiao()
        }
    };
    chexiao1.onclick=function () {
        palette.chexiao()
    }

    //保存
    let baocun=document.querySelector('.icon-73');
    let img=document.querySelector('img');
    baocun.onclick=function () {
        let data=canvas.toDataURL('image/png');
        img.src=data;
    }

    //下载
    let xiazai=document.querySelector('.icon-download');
    xiazai.onclick=function () {
        let data=canvas.toDataURL('image/png').replace('data:image/png','data:stream/octet');  //保存
        location.href=data;
    };

    //虚线
    let xuxian1=document.querySelector('.icon-xuxian');
    xuxian1.onclick=function () {
        palette.xuxian()
    }

    //橡皮
    let xiangpi1=document.querySelector('.icon-xiangpi');
    xiangpi1.onclick=function () {
        let w=prompt('请输入橡皮的尺寸','40')
        palette.xiangpi(w,w,pi)
    }

    //多角形
    let duojiaoxing1=document.querySelector('.icon-wujiaoxingkong');
    duojiaoxing1.onclick=function () {
        palette.n=prompt('请输入边数','6')
        palette.duojiaoxing()
    }

    //圆角矩形
    let yuanjiao1=document.querySelector('.icon-yuanjiaojuxing');
    yuanjiao1.onclick=function () {
        palette.yuanjiao()
    }

    //填充
    let tianchong=document.querySelector('.icon-tianchong');
    let fil=document.querySelector('.fil');
    tianchong.onclick=function () {
        palette.type='fill';
    }
    fil.onchange=function () {
        console.log(palette.fillStyle=`${this.value}`);
    }

    //描边
    let miaobian=document.querySelector('.icon-qianbi1');
    let storke=document.querySelector('.storke');
    miaobian.onclick=function () {
        palette.type='stroke';
    }
    storke.onchange=function () {
        console.log(palette.strokeStyle=`${this.value}`);
    }

    //文字
    let wenzi1=document.querySelector('.icon-wenzi');
    wenzi1.onclick=function () {
        palette.wenzi()
    }

    //新建
    let xinjian1=document.querySelector('.icon-xinjian');
    xinjian1.onclick=function () {
        palette.xinjian()
    }

    //裁剪
    let clip=document.querySelector('.clip');
    let caijian1=document.querySelector('.icon-caiqie');
    caijian1.onclick=function () {
        palette.caijian(clip);
    }
}