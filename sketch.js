
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey= createSprite(50,370,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.15

  ground= createSprite(300,380,1200,20)
  ground.velocityX=-6;

bananaGroup=createGroup();
obstacleGroup= createGroup();
}


function draw() {
background("white")
  monkey.collide(ground) 
  if(keyDown("space")){
    monkey.velocityY=-10 
   }
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
   }
  SpawnBanana();
 SpawnObstacles();
  drawSprites();
stroke("black"); textSize(20);
  fill("black"); 
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
if(monkey.isTouching(obstacleGroup)){
   ground.velocityX=0
   obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
   
   }


}
function SpawnBanana(){
   if (frameCount % 60 === 0) {
  
 banana= createSprite(580,200,10,10)
  banana.addImage(bananaImage)
  banana.velocityX=-6;
  banana.scale=0.1
  bananaGroup.add(banana);
   }
  
}

function SpawnObstacles(){
   if (frameCount % 60 === 0) {
  
 obstacle= createSprite(580,340,10,10)
  obstacle.addImage(obstacleImage)
  obstacle.velocityX=-6;
  obstacle.scale=0.2
  obstacleGroup.add(obstacle);
   }
  
}



