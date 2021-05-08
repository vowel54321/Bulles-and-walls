var car, wall,speed,weight,thickness,bullet;
function setup() {

  createCanvas(800,400);
  car= createSprite(100, 200, 50, 50);
  car.shapeColor='white';

  thickness= random(20,83);
  wall=createSprite(700,200,thickness,height/2);
  wall.shapeColor= rgb(80,80,80);
 speed=random(223,321);
 weight= random(30,52);
 car.velocityX=speed;
 car.depth=wall.depth+1;
}

function draw() {
  background("teal");  
if(car.x-wall.x<(car.width+wall.width)/2&& wall.x-car.x<(car.width+wall.width)/2)
{
deformation = (0.5*weight*speed*speed)/22500;
car.velocityX=0;
if(deformation<100)
{
  car.shapeColor= "green";
}
else if(deformation>=100&&deformation<=180)
{
  car.shapeColor= "yellow"
}
else if(deformation >180)
{
  car.shapeColor="red";
}
}
if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10)
{
  wall.shapeColor= color(255,0,0);
}
if(damage<10)
{
  wall.shapeColor= color(0,255,0);
}
if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
 
}
  drawSprites();
}

function hasCollided(b1,w1)
{
  bulletRightEdge= b1.x+bullet.width;
  wallLeftEdge=w1.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}

