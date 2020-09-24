const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime =  null;
let rAF;
let spinning = true


function draw(timestamp){
  if(!startTime){
    startTime = timestamp
  }
  rotateCount = (timestamp - startTime)/3;
  // console.log("rotateCount",rotateCount);
  
  if(rotateCount > 359){
    rotateCount %= 360;
  }

  // spinner.style.transform = `rotate(${rotateCount}deg)`;
  spinner.style.transform = 'rotate(' + rotateCount + 'deg)';
  rAF = requestAnimationFrame(draw);
}

// draw();

document.body.addEventListener("click",() =>{
  if(spinning){
    cancelAnimationFrame(rAF);
    spinning=false;
  }else{
    draw();
    spinning=true;
  }

})