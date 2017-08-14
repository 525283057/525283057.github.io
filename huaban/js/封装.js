/**
 * Created by hp on 2017/5/18.
 */
function Palette(obj,ctx,zhe){
    //obj=canvas   ctx=环境
    this.obj=obj;
    this.ctx=ctx;
    this.zhe=zhe;
    //画板宽高
    this.width=obj.width;
    this.height=obj.height;
    this.lineWidth=2;
    this.fillStyle='#000000';
    this.strokeStyle='#000000';
    this.type='stroke';  //设置填充或者描边
    //历史记录
    this.history=[];
    this.n = 6;
}
Palette.prototype= {
    //初始化样式
    init: function () {
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.fillStyle;
    },

    //新建
    xinjian:function () {
        this.init();
        this.lineWidth=2;
        this.fillStyle='#000000';
        this.strokeStyle='#000000';
        this.type='stroke';
        this.history=[];
        this.n = 6;
        this.ctx.clearRect(0,0,this.width,this.height);
    },
    //直线
    xiantiao: function () {
        let self = this
        self.zhe.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.zhe.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.init();
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.closePath()
                self.ctx.stroke();
            }
            self.zhe.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.zhe.onmouseup = null;
                self.zhe.onmousemove = null;
            }
        }
    },

    //铅笔
    qianbi: function () {
        let self = this;
        self.zhe.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.init();
            self.ctx.clearRect(0, 0, self.width, self.height);
            if (self.history.length > 0) {
                self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
            }
            self.ctx.beginPath();
            self.ctx.moveTo(ox, oy);
            self.zhe.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                self.ctx.lineTo(cx, cy);
                self.ctx.stroke();
            };
            self.zhe.onmouseup = function () {
                self.ctx.closePath();
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.zhe.onmousemove = null;
                self.zhe.onmouseup = null;
            }
        }
    },

    //矩形
    juxing: function () {
        let self = this;
        self.zhe.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.zhe.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                self.init();
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.rect(ox, oy, cx - ox, cy - oy)
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.zhe.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.zhe.onmouseup = null;
                self.zhe.onmousemove = null;
            }
        }
    },
    //多边形
    duobianxing: function () {
        let self = this;
        let angle = (360 / self.n) * Math.PI / 180;
        self.zhe.onmousedown = function (e) {
            let ox = e.offsetX,
                oy = e.offsetY;
            self.zhe.onmousemove = function (e) {
                let cx = e.offsetX,
                    cy = e.offsetY;
                self.init();
                let radius = Math.sqrt((cx - ox) * (cx - ox) + (cy - oy) * (cy - oy));
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox + radius, oy);
                for (let i = 0; i < self.n; i++) {
                    self.ctx.lineTo(ox + radius * Math.cos(angle * i), oy + radius * Math.sin(angle * i))
                }
                self.ctx.closePath();
                self.ctx[self.type]();
            };
            self.zhe.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.zhe.onmousemove = null;
                self.zhe.onmouseup = null;
            };
        }
    },
    //圆
    yuan:function () {
        let self=this;
        self.zhe.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.zhe.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                self.init();
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                let radius=Math.sqrt((cx-ox)*(cx-ox)+(cy-oy)*(cy-oy));
                self.ctx.beginPath();
                self.ctx.arc(ox, oy,radius,0,Math.PI*2);
                self.ctx.closePath()
                self.ctx[self.type]();
            }
            self.zhe.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.zhe.onmouseup = null;
                self.zhe.onmousemove = null;
            }
        }
    },

    //撤销
    chexiao:function () {
        let self=this;
        let last=self.history.pop();
        if(last==null){
            return
        }
        self.ctx.putImageData(last,0,0)
    },


    //虚线
    xuxian:function () {
        let self = this
        self.zhe.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.zhe.onmousemove = function (e) {
                let mx = e.offsetX, my = e.offsetY;
                self.init();
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.save();
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(mx, my);
                self.ctx.setLineDash([4,6]);
                self.ctx.closePath();
                self.ctx.stroke();
                self.ctx.restore();
            }
            self.zhe.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.zhe.onmouseup = null;
                self.zhe.onmousemove = null;
            }
        }
    },
    
    //橡皮
    xiangpi:function (w,h,pi) {
        let self = this;
        self.zhe.onmousedown = function (e) {
            let ox = e.offsetX-w/2, oy = e.offsetY-h/2;
            if (self.history.length > 0) {
                self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
            }
            pi.style.display='block';
            pi.style.width=`${w}px`;
            pi.style.height=`${h}px`;
            pi.style.left=ox+'px';
            pi.style.top=oy+'px';
            self.zhe.onmousemove = function (e) {
                let cx = e.offsetX-w/2, cy = e.offsetY-h/2;
                if(cx<=0){
                    cx=0+'px'
                }
                if(cx>=1138-w){
                    cx=1138-w+'px'
                }

                if(cy<=0){
                    cy=0+'px'
                }
                if(cy>=517-h){
                    cy=517-h+'px'
                }
                pi.style.left=cx+'px';
                pi.style.top=cy+'px';
                self.ctx.clearRect(cx, cy, w, h);
            };
            self.zhe.onmouseup = function () {
                pi.style.display='none';
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.zhe.onmouseup = null;
                self.zhe.onmousemove = null;
            }
        }
    },

    //多角形
    duojiaoxing:function () {
        let self = this;
        let angle = 360 / (self.n*2) * Math.PI / 180;
        self.zhe.onmousedown = function (e) {
            let ox = e.offsetX,
                oy = e.offsetY;
            self.zhe.onmousemove = function (e) {
                let cx = e.offsetX,
                    cy = e.offsetY;
                self.init();
                let radius = Math.sqrt((cx - ox) * (cx - ox) + (cy - oy) * (cy - oy));
                let radius1=radius/3;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox + radius, oy);
                for (let i = 0; i < self.n*2; i++) {
                    if(i%2==0){
                        self.ctx.lineTo(ox + radius * Math.cos(angle * i), oy + radius * Math.sin(angle * i))
                    }else {
                        self.ctx.lineTo(ox + radius1 * Math.cos(angle * i), oy + radius1 * Math.sin(angle * i))
                    }
                }
                self.ctx.closePath();
                self.ctx[self.type]();
            };
            self.zhe.onmouseup = function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.zhe.onmousemove = null;
                self.zhe.onmouseup = null;
            };
        }
    },

    //圆角矩形
    yuanjiao:function () {
        let self=this;
        self.zhe.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            self.zhe.onmousemove=function (e) {
                let cx=e.offsetX,cy=e.offsetY;
                let w=cx-ox,h=cy-oy,r=10;
                self.ctx.clearRect(0,0, self.width, self.height);
                if (self.history.length > 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                self.ctx.beginPath();
                self.ctx.moveTo(ox-w+r,oy-h);
                self.ctx.lineTo(ox+w-r,oy-h);
                self.ctx.quadraticCurveTo(ox+w,oy-h,ox+w,oy-h+r);
                self.ctx.lineTo(cx,cy-r);
                self.ctx.quadraticCurveTo(cx,cy,cx-r,cy);
                self.ctx.lineTo(ox-w+r,cy);
                self.ctx.quadraticCurveTo(ox-w,cy,ox-w,cy-r);
                self.ctx.lineTo(ox-w,oy-h+r);
                self.ctx.quadraticCurveTo(ox-w,oy-h,ox-w+r,oy-h);
                self.ctx.closePath();
                self.ctx[self.type]()
            }
            self.zhe.onmouseup=function () {
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height));
                self.zhe.onmouseup=null;
                self.zhe.onmousemove=null;
            }
        }
    },

    //文字
    wenzi:function () {
        let self=this;
        self.zhe.onmousedown=function (e) {
            let ox=e.offsetX,oy=e.offsetY;
            let div=document.createElement('div');
            div.style.cssText=`
                    min-width:50px;height:30px;position:absolute;
                    left:${ox}px;top:${oy}px;background:#fff;
            `;
            div.contentEditable=true;  //可编辑
            self.zhe.appendChild(div);
            self.zhe.onmousedown=null;
            self.area=div;
            self.area.onmousedown=function (e) {
                let ox=e.clientX-this.offsetself,
                    oy=e.clientY-this.offsetTop;
                self.area.onmousemove=function (e) {
                    if(self.history.length>0){
                        self.ctx.putImageData(self.history[self.history.length-1],0,0);
                    }
                    let cx=e.clientX,
                        cy=e.clientY;
                    let selfs=cx-ox,
                        tops=cy-oy;
                    self.area.style.self=`${selfs}px`;
                    self.area.style.top=`${tops}px`;
                }
                self.area.onmouseup=function () {
                    self.area.onmousemove=null;
                    self.area.onmouseup=null;
                }
            }
            self.area.onblur=function () {   //失去焦点
                self.ctx.zenzi=self.text;
                self.ctx.textAlign=self.textAlign;
                self.ctx.textBaseline=self.textBaseline;
                self.ctx.fillText(this.innerText,this.offsetself,this.offsetTop);
                this.parentNode.removeChild(this);
                self.area=null;
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
            }
        }
    },

    //裁剪
    caijian:function (clip) {
        let self=this;
        self.zhe.onmousedown=function (e) {
            self.init();
            let ox=e.offsetX,
                oy=e.offsetY;
            let minx,miny,w,h;
            self.zhe.onmousemove=function (e) {
                self.init();
                let cx=e.offsetX,
                    cy=e.offsetY;
                minx=ox>cx?cx:ox;
                miny=oy>cy?cy:oy;
                w=Math.abs(cx-ox);
                h=Math.abs(cy-oy);
                clip.style.display="block";
                clip.style.left=minx+'px';
                clip.style.top=miny+'px';
                clip.style.width=w+'px';
                clip.style.height=h+'px';
            }
            self.zhe.onmouseup=function () {
                self.zhe.onmouseup=null;
                self.zhe.onmousemove=null;
                self.q=self.ctx.getImageData(minx,miny,w,h);
                self.ctx.clearRect(minx,miny,w,h);
                self.history.push(self.ctx.getImageData(minx,miny,w,h));
                self.ctx.putImageData(self.q,minx,miny);
                self.drag(minx,miny,w,h,clip)
            }
        }
    },
    drag: function (x,y,w,h,clipBtn) {
        let self=this;
        self.zhe.onmousemove=function (e) {

            let ox=e.offsetX;
            let oy=e.offsetY;
            if (ox>x&&ox<w+x&&oy>y&&oy<h+y) {//条件：点击点要在剪切框内即要大于左边且小于左边加剪切框的宽
                self.zhe.style.cursor="move";//光标：对象可移动
            } else {
                self.zhe.style.cursor="default";
                return;
            }
        };
        self.zhe.onmousedown=function (e) {
            let ox=e.offsetX;
            let oy=e.offsetY;
            let dx=ox-x;
            let dy=oy-y;
            if (ox>x&&ox<w+x&&oy>y&&oy<h+y) {
                self.zhe.style.cursor="move";
            } else {
                self.zhe.style.cursor="default";
                return;
            }
            self.zhe.onmousemove=function (e) {
                self.ctx.clearRect(0,0,self.width,self.height);
                if (self.history.length!=0) {
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                let cx=e.offsetX;
                let cy=e.offsetY;
                let left=cx-dx;
                let top=cy-dy;
                if(left<0){
                    left=0;
                }
                if(left>=self.width-w){
                    left=self.width-w
                }

                if(top<0){
                    top=0;
                }
                if(top>=self.height-h){
                    top=self.height-h
                }
                clipBtn.style.left=left+'px';
                clipBtn.style.top=top+'px';
                x=left;
                y=top;
                self.ctx.putImageData(self.q,left,top);
            }
            self.zhe.onmouseup=function () {
                self.zhe.onmouseup=null;
                self.zhe.onmousemove=null;
                self.drag(x,y,w,h,clipBtn)
            }
        }
    },
}

