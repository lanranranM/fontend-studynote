// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');  // an object

const width = canvas.width = window.innerWidth; //==browser's size
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
function randomColor() {
  return 'rgb(' +
         random(0, 255) + ', ' +
         random(0, 255) + ', ' +
         random(0, 255) + ')';
}

//create a ball obj

class Ball{
  constructor(x,y,velX,velY,color,size){
    this._x=x;
    this._y=y;
    this._velX=velX;
    this._velY=velY;
    this._color=color;
    this._size=size;
  }

  draw(){
    ctx.beginPath();
    ctx.fillStyle=this._color;
    ctx.arc(this._x,this._y,this._size,0,2*Math.PI);
    ctx.fill();
  }

  update(){
    if ((this._x + this._size) >= width) {
      this._velX = -(this._velX);
    }
  
    if ((this._x - this._size) <= 0) {
      this._velX = -(this._velX);
    }
  
    if ((this._y + this._size) >= height) {
      this._velY = -(this._velY);
    }
  
    if ((this._y - this._size) <= 0) {
      this._velY = -(this._velY);
    }
  
    this._x += this._velX;
    this._y += this._velY;
  }

  collisionDetect(){
    for (let j = 0; j < balls.length; j++) {
      if (this !== balls[j]) {
        const dx = this._x - balls[j]._x;
        const dy = this._y - balls[j]._y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this._size + balls[j]._size) {
          balls[j]._color = this._color = randomColor();
        }
      }
    }
  }
}

  let balls = [];

  while (balls.length < 10) {
      let size = random(10, 20);
      let ball = new Ball(
        // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        randomColor(),
        size
      );
      balls.push(ball);
    }

  function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }

    requestAnimationFrame(loop);
  }

  loop();