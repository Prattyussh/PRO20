var fixedRect,movingRect;
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
fixedRect=createSprite(600,400,50,80);
fixedRect.shapeColor="green";
fixedRect.debug=true;
movingRect=createSprite(400,200,80,30);
movingRect.shapeColor="green";
movingRect.debug=true;
speed=random(55,90);
weight=random(400,1500);
car=createSprite(50,200,50,50);
wall=createSprite(1500,200,60,height/2);
wall.shapeColor=(80,80,80);
}

function draw() {
  background(255,255,255); 
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY
  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2&&movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
  car.velocityX = speed;
}
else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}
   
  drawSprites();
}