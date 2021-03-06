class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.health = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  removeNode(index){
    console.log(index)
    var r=database.ref("players/player" + index).remove();
    // ref.child(key).remove();
  }
  deleteAllPlayers(){
    database.ref("players/").remove();
  }
  updateCount(count){
    // console.log("updateCount")
    database.ref('/').update({
      playerCount: count
    });
  }
getHealth(index){
  // console.log("getHealth:"+index)
  database.ref("players/player" + index+"/health").on("value",(data)=>{
  playerHealth = data.val();
  })
  // return playerHealth;
}
getdistance(index){
  // console.log("getdistance:"+index)
  database.ref("players/player" + index+"/distance").on("value",(data)=>{
    playerDistance = data.val();
  })
  // return playerHealth;
}
updateHealth(count,index){
    // console.log("updateHealth")
    database.ref("players/player" + index).update({
      health: count
    });
  }
  updateDistance(index){
    // console.log("updateDistance")
    database.ref("players/player" + index).update({
      distance: this.distance
    });
  }
  update(){
    // console.log("update"+this.index);
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      health:this.health
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
deletePlayer(index){
  database.ref("players/player" + index).remove()
}
  // getCarsAtEnd() {
  //   database.ref('CarsAtEnd').on("value",(data)=>{
  //     this.rank = data.val();
  //   })
  // }

  // static updateCarsAtEnd(rank) {
  //   database.ref('/').update({
  //     CarsAtEnd:rank
  //   })
  // }
}
