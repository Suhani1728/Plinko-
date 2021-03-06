const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles=[];
var plinkos =[];
var divisions=[];
var divisionsHeight=300;


function preload(){

}

function setup() {
  
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,600,800,20);


  for(var i = 0; i <= width ; i = i+80){
console.log("division")
    divisions.push(new Division(i, height-divisionsHeight/2,10,divisionsHeight));
   };

  for(var j = 75; j <= width ; j = j+50){

    plinkos.push(new Plinko(j,75));
   };

   for(var j = 50; j <= width-10; j = j+50){

    plinkos.push(new Plinko(j,175));
   };

   for(var j = 75; j <= width ; j = j+50){

    plinkos.push(new Plinko(j,275));
   };

   /*for(var j = 55; j <= width-10 ; j = j+50){

    plinkos.push(new Plinko(j,375));
   };*/

Engine.run(engine);

}

function draw() {
  rectMode(CENTER)
  background(0);  

 
  drawSprites();


  for(var n=0; n<=divisions.length-1; n++){
    divisions[n].display();
  }

  if(frameCount % 20 === 0){
    particles.push(new Particle(random(0,width),10,10));
  }

  for (var h =0; h<particles.length;h++){
    particles[h].display();
  }

  for(var j=0; j < plinkos.length; j++){
    plinkos[j].display();
  }

ground.display();

}