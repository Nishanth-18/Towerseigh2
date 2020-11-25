var engine, world
var polygon, polygonImage
var ground, stand
// LEVEL 2
var block1
var block2
var block3
var block4
var block5
// LEVEL 3
var block6
var block7
var block8
// TOP
var block9


var sling





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
 polygonImage = loadImage("polygon.png");

}

function setup()
{
 createCanvas(900,400)

 engine = Engine.create()
 world = engine.world
 Engine.run(engine)

 ground = new Ground (450,390,900,20);

 stand = new Ground (390,300,250,10);

 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon)

 sling = new Slingshot(this.polygon,{x:100,y:200})
fill ("blue");
block1 = new Block(330,260,30,40)

block2 = new Block(360,260,30,40)
block3 = new Block(390,260,30,40)
block4 = new Block(420,260,30,40)
block5 = new Block(450,260,30,40)

block6 = new Block(360,220,30,40)
block7 = new Block(390,220,30,40)
block8 = new Block(420,220,30,40)

block9 = new Block(390,180,30,40)





}

function draw(){
background(56,44,44);
fill("white");
textSize(30);
text ("PRESS SPACE FOR NEXT SHOT",300,50);



ground.display();
stand.display();

imageMode(CENTER);
image(polygonImage,polygon.position.x,polygon.position.y,40,40);
sling.display();

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();




  
}




function mouseDragged()
{
	Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
     
}
function keyPressed()
{
  if(keyCode === 32)
  {
	  sling.attach(this.polygon)
  }	
}



