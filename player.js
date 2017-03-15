function Player(pName, balance, posX, posY, onSpaceID, milClass){
  this.playerName = pName;
  this.balance = balance;
  this.posX = posX;
  this.posY = posY;
  this.onSpaceID = onSpaceID;
  this.milClass = milClass;
  this.myProperties = [];

  this.display = function(){
    fill(51);
    ellipse(this.posX, this.posY, 20, 20);
  };

  this.goto = function(value){
    var spaceCheck = this.onSpaceID += value;
    for (var k = 0; k < spaces.length; k++){
      if (spaceCheck > 35){
          this.posX = spaces[spaceCheck % 36].x;
          this.posY = spaces[spaceCheck % 36].y;
          spaceCheck %= 36;
          this.onSpaceID = spaceCheck;
          this.balance += 300;
          updateBalance();
          playerCollectGoMsg = createElement("li", me.playerName + " collected 300 dollars from Resupply!");
          mySound.play();
          gameLog.child(playerCollectGoMsg);
      }
      else if(spaces[k].space_id == this.onSpaceID && spaceCheck <= 35){
          this.onSpaceID = spaceCheck;
          this.posX = spaces[k].x;
          this.posY = spaces[k].y;
      }
    }
    console.log("i am on space: " + spaceCheck);
    isBuyable(spaceCheck);
  };
}
