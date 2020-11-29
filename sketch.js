const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object, ground;
var box1; 
var ball;
var poly; 

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (200, 390, 400, 10);
  box1 = new Box (200, 200, 50, 50); 
  box2 = new Box (230, 160, 60, 70);
}

function draw() {
  background("black");  
  Engine.update(engine);

  ground.display(); 
  box1.display();
  box2.display(); 
}