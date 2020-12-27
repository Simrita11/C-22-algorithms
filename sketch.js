var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,300,50,50);
  gameObject2 = createSprite(800,300,50,50);

  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";

 gameObject1.velocityX = 5;
 gameObject2.velocityX = -5;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(gameObject1, movingRect)){

  gameObject1.shapeColor = "red";
  movingRect.shapeColor = "red";

}else{

  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
}

bounceOff(gameObject1,gameObject2);

  drawSprites();
}

