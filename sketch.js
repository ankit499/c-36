var hypnoticBall, database;
var position;
var form ,game,player;
var gamestate=0;
var playercount;



function setup(){

  console.log(database);
  createCanvas(400,400);
  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();

  
}

function draw(){
  background("white");
  
   
    drawSprites();
  
}

