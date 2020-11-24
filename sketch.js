
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	Paper=createSprite(width/2, 80, 10,10);
	Paper.scale=0.2


	engine = Engine.create();
	world = engine.world;

	
	paper1=new paper(100,100,50,50,20)
	dustbin1=new dustbin(350,600,20,90)
	dustbin2=new dustbin(500,640,300,20)
	dustbin3=new dustbin(650,600,20,90)



	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	 }
   }



