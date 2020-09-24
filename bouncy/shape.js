const canvas  = document.querySelector('canvas');
const ctx  =  canvas.getContext('2d');

const width =  canvas.width = window.innerWidth;
const height =  canvas.height = window.innerHeight;
var balls = [];

//random

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}


class Shape{
  constructor(x, y, velX, velY, exists){
    this.x = x,
    this.y = y,
    this.velX = velX,
    this.velY =  velY,
    this.exists = exists
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0 , 2 *Math.PI);
    ctx.fill();
  };

  update(){
    if((this.x + this.size) >= width){
      this.velX = -(this.velX);
    }
    if((this.x + this.size) <= 0){
      this.velX = -(this.velX);
    }
  
    if((this.y + this.size) >= height){
      this.velY = -(this.velY);
    }
    if((this.y + this.size) <= 0){
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
  
  }

  collisionDetect(){
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
          // this.update();
        }
      }
    }
  }
}

class Ball extends Shape{
  constructor(x, y, velX, velY, exists, color, size ){
    super(x, y, velX, velY, exists);
    this.color = color;
    this.size = size;
  };
}

class EvilCircle extends Shape{
  constructor(x, y, velX, velY, exists, color, size ){
    super(x, y, 40, 40, exists);
    this.color = 'white';
    this.size = 10;
  };

  draw() {
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0 , 2 *Math.PI);
    ctx.stroke();
    // ctx.fill();
  };

  checkBounds(){
    if((this.x + this.size) >= width){
      this.x -= 5;
    }
    if((this.x + this.size) <= 0){
      this.x += 5;
    }
  
    if((this.y + this.size) >= height){
      this.y -= 5;
    }
    if((this.y + this.size) <= 0){
      this.x += 5;
    }
  };

  setControls(){
    let _this = this;
    window.onkeydown = function(e) {
      if (e.key === 'a') {
        _this.x -= _this.velX;
      } else if (e.key === 'd') {
        _this.x += _this.velX;
      } else if (e.key === 'w') {
        _this.y -= _this.velY;
      } else if (e.key === 's') {
        _this.y += _this.velY;
      }
    }
  }

  collisionDetect(){
    for (let j = 0; j < balls.length; j++) {
      if (balls[j].exists) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
            balls[j].exists =  false
          // this.update();
        }
      }
    }
  }
}


var evilCircle = new EvilCircle(50,50);
evilCircle.setControls();
var counterVal = document.getElementById("ball-count");


function loop() {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);
  var i = 0;

// colors = ["green","red","yellow"]
  while (balls.length < 3){
    let size = random(10,20);
    let ball = new Ball(
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      true,
      'rgb(' + random(0,225) + ',' + random(0,225) + ',' + random(0,225) +')',
      // (colors[Math.floor(Math.random()*colors.length)]),
      size
    );
    balls.push(ball);
    i++;
  }

  ballsCount = 0;
  for (let i = 0; i < balls.length; i++) {
    if(balls[i].exists){
      
      ballsCount++
      balls[i].draw();
      balls[i].collisionDetect();
      balls[i].update();

      evilCircle.draw();
      evilCircle.checkBounds();
      evilCircle.collisionDetect();
    }
  }

  counterVal.innerHTML = ballsCount;
    if (ballsCount == 0){
      document.getElementById("win-message").style.display = "block";
    }

  requestAnimationFrame(loop);
}
loop();