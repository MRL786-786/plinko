const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

 
var Particle
var Plinko
var divisionHeight=300
var score =0

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     Division.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       Plinko.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       Plinko.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       Plinko.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       Plinko.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < Plinko.length; i++) {
     
     Plinko[i].display();
     
   }
   if(frameCount%60===0){
     Particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < Particle.length; j++) {
   
     Particle[j].display();
   }
   for (var k = 0; k < Division.length; k++) {
     
     Division[k].display();
   }
}