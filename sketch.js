
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var plinkos=[]
var particle=[]
var divisions=[]

function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;

ground=new Ground(400,490,1000,10)






}

function draw() {
  background(0); 

  Engine.update(engine);
var divisionHeigth=300
for(var k =0 ; k<=width;k=k+80){

  divisions.push(new Division(k,height-divisionHeigth/2,10,divisionHeigth))
}

if(frameCount%60===0){
  particle.push(new Particle(random)(width/2-10,width/2+10),10,10)
}


  ground.display();
  
  drawSprites();
}