var spaces = [];
var spaceXpos = [60, 120, 180, 240, 300];
var me = new Player("justin", 1000, 660, 700, 0, "Soldier");

function preload(){
    mySound = loadSound('assets/cash_sound.wav');
    loadJSON("spaces_info.json", loadBoard);
}

function setup(){
  createCanvas(800, 800);
  background(210);
  mySound.setVolume(0.3);
  // loadBoard();
  diceButton = createButton("Roll the dice");
  buyPropertyButton = createButton("Not Buyable");
  myBalance = createElement("h3", me.playerName + "'s balance: " + me.balance);
  gameLog = createDiv("<h2>Game Log:</h2>");


  buyPropertyButton.position(800,400);
  myBalance.position(800,600);
  diceButton.position(800,500);
  gameLog.position(900, 0);

  diceButton.size(70, 70);
  buyPropertyButton.size(80,80);
  buyPropertyButton.attribute("disabled", true);

  buyPropertyButton.mouseClicked(buyProperty);
  diceButton.mouseClicked(getDiceVal);
}

function draw(){

  for (var i = 0; i < spaces.length; i++){
    spaces[i].display();
  }
  var player1 = new Player("justin", 1000, 60, 85, 0, "Soldier");

  me.display();

}

function loadBoard(data){
  for (var i = 0; i < data.length; i++){
    spaces.push(new BoardSpace(data[i].space_name, data[i]._id, data[i].space_cost, data[i].xpos, data[i].ypos, data[i].buyable));
  }
  }


function mouseClicked(e){
  for (var i = 0; i < spaces.length; i++){
    spaces[i].clicked();
  }
}

function getDiceVal(){
  var diceRoll = floor(random(1, 7));
  me.goto(diceRoll);
  console.log("You moved " + diceRoll + " spaces");
  // redraw();
}

function updateBalance(){
  myBalance.html(me.playerName + "'s balance: " + me.balance);
}

function isBuyable(my_space){
  if (spaces[my_space].buyable){
    buyPropertyButton.removeAttribute("disabled");
    buyPropertyButton.html("Buy this property for " + spaces[my_space].cost + " dollars");
  }else{
    // console.log(spaces[my_space])
    buyPropertyButton.attribute("disabled", true);
    buyPropertyButton.html("Not Buyable");
  }
}

function buyProperty(){
  if(me.balance >= spaces[me.onSpaceID].cost){
     me.balance -= spaces[me.onSpaceID].cost;
     spaces[me.onSpaceID].buyable = false;
     isBuyable(me.onSpaceID);
     updateBalance();
     me.myProperties.push(spaces[me.onSpaceID]);
     spaces[me.onSpaceID].owner = me.playerName;
     var propertyBuyMsg = createElement("li", me.playerName + " has purchased " + spaces[me.onSpaceID].name + " for " + spaces[me.onSpaceID].cost);
     gameLog.child(propertyBuyMsg);
  }else{
  console.log("Sorry you cant afford this property");
  }
}
