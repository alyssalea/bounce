var x = 0
var speed 


function setup() {
  createCanvas(600,600);
  //background(255,0,255);
}

function draw() {
   background(255,0,255)      
   fill(0);
  
  if(x > 600){
  speed = speed - 3;//or speed =- 3
  }
  
   if(x < 1 ){
  speed = speed =+ 3;//or speed =+ 3
  }
  
  ellipse(x, 300, w)
  
  x = x + speed
 
}


  