
var player1,player2,bgImg;
var b1,b2,b3;
var turn="rightSide";
var fly,bg,fc=0,fire,fireImg;
var jump=true;
var gameState=0;
var playerCount=0;
var playerHealth=0;
var playerDistance=0;

var form, player, game,gamePlay;
var allPlayers;
var database;
var players=[];
var playerGroup;
var bulletGroup;
var playerArray=[];
var bulletArray=[];
function preload(){
   
bgImg=loadImage("images/map2.png");
player1Img=loadImage("images/player1.png");
fireImg=loadImage("images/fire.png");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
 
  playerGroup=new Group();
  bulletGroup=new Group();
  
  //  fc= frameCount
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  // background(200); 
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    clear();
    game.end();
  }
  
  drawSprites();
}