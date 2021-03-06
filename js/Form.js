class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.rankDisplay1=createElement('h2');
    this.rankDisplay2=createElement('h2');
    this.rankDisplay3=createElement('h2');
    this.rankDisplay4=createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
  displayRank(){
    console.log("rank");
    // window.wri
    
      clear();
    
    // this.title.html("Car Racing Game");
    // this.title.position(100,100);
    // this.greeting.html("Hello " + player.name)
    // this.greeting.position( 270, 270);
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
      // console.log(allPlayers);
      var dp=displayHeight/2-50;
      var arr=[];
      for(var plr in allPlayers){
        dp=dp+50
        textSize(15);
        arr.push(allPlayers[plr].name + ": " + allPlayers[plr].rank)
        
        // console.log(allPlayers[plr].name + ": " + allPlayers[plr].rank);
      }
      // console.log("all info"+arr)
      // this.rankDisplay1.html(arr[0]);
      // this.rankDisplay1.position(displayWidth/2,dp);
      // this.rankDisplay2.html(arr[1]);
      // this.rankDisplay2.position(displayWidth/2,dp+50);
      // this.rankDisplay3.html(arr[2]);
      // this.rankDisplay3.position(displayWidth/2,dp+100);
      // this.rankDisplay4.html(arr[3]);
      // this.rankDisplay4.position(displayWidth/2,dp+150);
    }
  }

  display(){
    console.log("inside display");
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth/2,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      console.log("inside display"+player.name);
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      player.deleteAllPlayers();
      // Player.updateCarsAtEnd(0)
    });

  }
}
