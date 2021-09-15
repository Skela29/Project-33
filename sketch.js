
function preload(){
  backgroundImg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Matter.Engine.create();
  world = engine.world
  Matter.Engine.update(engine);
 snowflake = new Snow(50,50)
}

function draw() {
  background(backgroundImg);  
  snowflake.display();
  drawSprites();
}