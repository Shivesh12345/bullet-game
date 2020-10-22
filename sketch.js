var bullet,wall;
wall.shapeColor = (80,80,80)
var speed,weight;



function setup() {
  createCanvas(800,400);
bullet = createSprite(50, 200, 50, 10);
 bullet.velocityX = 5
 wall = createSprite(740, 200, 30, height/2);
 
  speed = random(55,90)
  weight = random(400,1500)
}

function draw() {
  background("black");  
  if (bullet.isTouching(wall))
   wall.shapeColor = ("red");
  drawSprites();
}