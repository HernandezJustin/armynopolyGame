function Player(pName, balance, posX, posY, onSpaceID, milClass){
  this.playerName = pName;
  this.balance = balance;
  this.posX = posX;
  this.posY = posY;
  this.onSpaceID = onSpaceID;
  this.milClass = milClass;

  this.display = function(){
    fill(51);
    ellipse(this.posX, this.posY, 20, 20);
    // fill(0);
  };

  this.goto = function(value){
    // var oldSpace = this.onSpaceID;
    // if(){}
    var spaceCheck = this.onSpaceID += value;
    for (var k = 0; k < spaces.length; k++){

      if (spaceCheck > 35){
          this.posX = spaces[spaceCheck % 36].x;
          this.posY = spaces[spaceCheck % 36].y;
          spaceCheck %= 36;
          this.onSpaceID = spaceCheck;
          this.balance += 300;
          updateBalance();
          playerCollectGoMsg = createElement("li", me.playerName + " collected 300 dollars from Resupply!")
          mySound.play();
          gameLog.child(playerCollectGoMsg)
          // redraw();
      }
      else if(spaces[k].space_id == this.onSpaceID && spaceCheck <= 35){
          this.onSpaceID = spaceCheck;
          this.posX = spaces[k].x;
          this.posY = spaces[k].y;
          if(this.onSpaceID == 10){
            console.log(this.posX);
            console.log(this.posY);
            console.log(this.onSpaceID);
          }
          // redraw();
      }
    }
    console.log("i am on space: " + spaceCheck);
    isBuyable(spaceCheck);
  };
}
