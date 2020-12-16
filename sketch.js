var knife,fruit1,fruit2,fruit3,fruit4,fruitsgroup,monster1,monster2,monstersgroup;
var knifeImage ;
var score=0;
var PLAY=1;
var END=0;
var start,startImage;
var gamestate;
var gameover,gameoverImage;

function preload(){
  knifeImage=loadImage("sword.png") ;
  fruit1 = loadImage ("fruit1.png");
 fruit2 = loadImage ("fruit2.png");
  fruit3 = loadImage ("fruit3.png");
  fruit4 = loadImage ("fruit4.png");
  monster1=loadImage("alien1.png");
  monster2=loadImage("alien2.png");
  startImage=loadImage("start1.png");
  gameoverImage=loadImage("gameover.png")
  knifesound=loadSound("knifeSwooshSound.mp3");
  gosound=loadSound("gameover.mp3");
}
function setup(){
  createCanvas(550,450);
  knife=createSprite(40,200,20,20);
  knife.addImage(knifeImage);
  knife.scale=0.4; 
  //start=createSprite(300,300,30,30);
  //start.addImage(startImage);
  //start.scale=0.6 ;
  gameover=createSprite(300,300,30,30);
   gameover.addImage( gameoverImage);
   gameover.scale=0.8;
  fruitsgroup=createGroup();
  monstersgroup=createGroup();
  gameover.visible=false;
  start = createButton ("START");
  start.size(110,60);
  start.position(250,170);
  start.style("color:red");
  start.style("font-size","30px");
  
  start.style('background-color','yellow');
}

function draw(){
  background("lightblue");
  
   textSize(30); 
  fill("brown")
  text("SCORE:"+score,230,50);
  
  start.mousePressed(play);
   //if (keyDown("space")){
   //  score=0;
    // gamestate=PLAY;
     //start.visible=false;
     //gameover.visible=false;
  // }
  if(gamestate==PLAY){start.hide();
    
        knife.y=World.mouseY;
  knife.x=World.mouseX;
  fruits();
  monsters();
  
  if(knife.isTouching(fruitsgroup)){
    fruitsgroup.destroyEach();
    score=score+1;
    knifesound.play();
  }
  }
  if(knife.isTouching(monstersgroup)){
    monstersgroup.destroyEach();
    gamestate=END;
    start.visible=true;
    gameover.visible=true;
    gosound.play();
    start.show();
  }
  drawSprites();
}
function play(){
    score=0;
     gamestate=PLAY;
     start.visible=false;
     gameover.visible=false;
  
}

function fruits(){
  if(frameCount%60==0){
    var fruit=createSprite(Math.round(random(100,500)),Math.round(random(100,500)),20,20);
    fruit.velocityX=Math.round(random([-5,-4,-3,-2,1,2,3,4]));
    fruit.velocityY=Math.round(random([-5,-4,-3,-2,1,2,3,4]));
    var rand=Math.round(random(1,4));
    switch(rand){
      case 1:fruit.addImage(fruit1);
        break;
        case 2:fruit.addImage(fruit2);
        break;
        case 3:fruit.addImage(fruit3);
        break;
        case 4:fruit.addImage(fruit4);
        break;
        default:break;
    }
    fruit.scale =0.2;
    fruitsgroup.add(fruit);
  }
}
 
function monsters(){
  if(frameCount%200==0){
   var monsters=createSprite(Math.round(random(100,500)),Math.round(random(100,500)),20,50);
      
   monsters.velocityX=Math.round(random([-5,-4,-3,-2,-1,1,2,3]));
  monsters.velocityY=Math.round(random([-2,-1,1,2,3,4]));
   var rand=Math.round(random(1,2));
    switch(rand){
      case 1:monsters.addImage(monster1);
      break;
      case 2:monsters.addImage(monster2);
      break;
      default:break;
    }
   monsters.scale=1;
    monstersgroup.add(monsters);
    
  }
}