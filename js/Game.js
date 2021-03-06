class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    console.log("gameState"+gameState);
    console.log("playerCount"+playerCount);

    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value")
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      // player.getCount();
      form = new Form()
      form.display();
      gamePlay = new GamePlay();
      gamePlay.spriteObjects();
      //  player.setVelocity(12,0);
      fly=new Fly();
     
    }
    
  }
  
  

  play(){
    form.hide();
  
    Player.getPlayerInfo();
    // player.getCarsAtEnd();
   
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      // image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      gamePlay.booster();

      
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 400;
        //use data form the database to display the cars in y direction
        y = height - allPlayers[plr].distance;
       
        // console.log(index)
        players[index-1].x = x;
        players[index-1].y = y;
        
        if (index === player.index){
          if(y!=height - allPlayers[plr].distance){
            player.getdistance(index);
            y=playerDistance
            players[index-1].y = y;
          }
        
          // console.log("y ",y)
          text(allPlayers[plr].name , x ,y-50)

          
          // if(jump&& allPlayers[plr].distance===y){
            if(jump){
            fire.visible=true;  fire.x=x; fire.y=y+50;
          }else{
            fire.visible=false;   player.distance= height-300
            player.updateDistance(player.index);
          }
         
            if(keyWentDown("space")){
              console.log("space")
              gamePlay.bullets(x+25,y+5,1)
            }
            
            // this.arrayRemove(players[index-1])
              this.bulletTouching();
             
            if(keyDown("right")){
              players[index-1].setVelocity(12,0);
              players[index-1].mirrorX(1); 
              gamePlay.dir=1;            
            }
            
            if(keyDown("left")){
              players[index-1].setVelocity(-12,0);
              players[index-1].mirrorX(-1);
              gamePlay.dir=-1;   
            
            }            
        }   
        // this.bulletTouching();
        // this.bulletTouchingGroup();
      }
      
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      if(jump){
        player.distance +=10
      }else{
        player.distance= height-300
      }
      // console.log("player.distance" ,player.distance)
      // player.update();
      player.updateDistance(player.index);
    }
    

    if(player.distance > 3860){
      gameState = 2;
      player.rank +=1
     
    }
   
    drawSprites();
  }
  end(){
    console.log("Game Ended");
    console.log(player.name);

   
  }

  arrayRemove(player){
    for (var i = 0; i < playerArray.length; i++) {
      if(playerArray[i]===player){
        console.log(playerArray[i],player);
        playerArray.splice(i,1);
        i--;
      }
    }
  }
gameOver(){
  playerArray.map(item=>item.visible=false)
  bulletGroup.destroyEach();
  fire.visible=fasle
}
  bulletTouching(){
    console.log("playerArray.length "+playerArray.length)
    for (var i = 0; i < bulletGroup.length; i++) {
      if (bulletGroup.get(i).isTouching(playerArray)) {
        for (var j = 0; j < playerArray.length; j++){
          if(playerArray[j]&&bulletGroup.get(i)){
            if (bulletGroup.get(i).isTouching(playerArray[j])) {
              bulletGroup.get(i).destroy();
              // playerArray[j].visible=false;
             console.log("playerArray[j]: "+playerArray[j])
              player.getHealth(j+1);
              // playerArray[j].getHealth(j+1)
              var h=playerHealth;
              h++;
              console.log(i,j,playerHealth,h)
              if(h<5){
                player.updateHealth(h,j+1);
                // player.health++;
                // player.update();
              }else{
                // player.removeNode(j+1);
                // this.arrayRemove(playerArray[j]);
                // playerArray[j].visible=false;
               
                // player.deletePlayer(j+1);
                // this.arrayRemove( playerArray[j])
                this.gameOver();
                gameState=2
              }
              // 
            }
          }
          
        }
        
          
      }
      
  }
  }
  bulletTouchingGroup(){
    for (var i = 0; i < bulletGroup.length; i++) {
      if (bulletGroup.get(i).isTouching(playerGroup)) {
        for (var j = 1; j <= playerGroup.length; j++){
          if (bulletGroup.get(i).isTouching(playerGroup.get(j))) {
            bulletGroup.get(i).destroy();
            // playerArray[j].visible=false;
           console.log("playerGroup.get(j): "+playerGroup.get(j))
            player.getHealth(j);
            // playerArray[j].getHealth(j+1)
            var h=playerHealth;
            h++;
            console.log(i,j,playerHealth,h)
            if(h<5){
              player.updateHealth(h,j);
              // player.health++;
              // player.update();
            }else{
              // player.removeNode(j+1);
              // this.arrayRemove(playerArray[j]);
              playerGroup.get(j).visible=false;
              player.deletePlayer(j);
              // this.arrayRemove( playerArray[j])
              gameState=2
            }
            // 
          }
        }
        
          
      }
      
  }
  }
 

}
