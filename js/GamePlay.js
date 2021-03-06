class GamePlay{
    constructor(){
        this.dir=1;
    }
    booster(){
       if(fly.length>=0){
           fly.display();
           fly.rect.width=fly.length;
          fly.rect.visible=true;
        }
        else{ fc=frameCount;}
        if(frameCount<fc+100){
          fly.length=100
          fly.rect.width=0;
          fly.rect.visible=false;
          jump=false;
        }else{jump=true}    
    }
    bullets(x,y){
      if(this.dir===-1){
        x=x-100
      }
      console.log(this.dir)
        b1=createSprite(x+25,y,20,10);
        b1.shapeColor="red"
        b1.velocityX=this.dir*3;

        // b2=createSprite(x+10,y,20,10);
        // b2.shapeColor="red";
        // b2.rotation=this.dir*135;
        // b2.setVelocity(this.dir*3,-3);

        // b3=createSprite(x+10,y,20,10);
        // b3.shapeColor="red"
        // b3.rotation=this.dir*(-135);
        // b3.setVelocity(this.dir*3,3);

        bulletGroup.add(b1);
        bulletArray.push(b1);

        // bulletGroup.add(b2);
        // bulletArray.push(b2);
        
        // bulletGroup.add(b3);
        // bulletArray.push(b3);
     }
     bulletTouching(){
       
        if(playerGroup.isTouching(bulletGroup)){
          console.log ("bullet touching")
          bulletGroup.destroyEach();
        }
      }
      spriteObjects(){
    
        bg=createSprite(width/2, height/2, width, height/2);
        bg.addImage(bgImg);
        bg.scale=5;
        player1=createSprite(width/2+100, height-300, 50, 100);
        player1.addImage(player1Img);
         player1.scale=0.5;
        // player1.debug=true
        player1.setCollider("rectangle",0,0,70,150)
         player2=createSprite(width/2+500, height-300, 50, 100);
        player2.addImage(player1Img);
        // player2.debug=true
        player2.setCollider("rectangle",0,0,70,150)
         player2.scale=0.5;
         players=[player1,player2]
         console.log(players[0])
         fire=createSprite(100,100,50,10);
        // fire.shapeColor="red";
        fire.addImage(fireImg);
        fire.scale=0.5
        fire.visible=false
        playerGroup.add(player1);
        playerGroup.add(player2);

        playerArray.push(player1);
        playerArray.push(player2);
      }
}