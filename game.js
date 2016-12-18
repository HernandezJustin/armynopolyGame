var spaces = [];
var spaceXpos = [60, 120, 180, 240, 300];
var me = new Player("justin", 1000, 600, 700, 0, "Soldier");
var myProperties = [];

function preload(){
    // loadJSON('spaces.json')
}

function setup(){
  createCanvas(800, 800);
  background(210);

  loadBoard();
  diceButton = createButton("Roll the dice");
  buyPropertyButton = createButton("Not Buyable");
  myBalance = createElement("h3", me.playerName + "'s balance: " + me.balance);

  buyPropertyButton.position(800,400);
  myBalance.position(800,600);
  diceButton.position(800,500);

  diceButton.size(70, 70);
  buyPropertyButton.size(80,80)
  buyPropertyButton.attribute("disabled", true)

  buyPropertyButton.mouseClicked(buyProperty);
  diceButton.mouseClicked(getDiceVal);
}

function draw(){

  for (var i = 0; i < spaces.length; i++){
    spaces[i].display();
  }

  // var player1 = new Player("justin", 1000, 60, 85, 0, "Soldier");

  me.display();

}

function loadBoard(){

  var spaceNames = ["Start(Resupply)", "Fort Braxton", "Care Package", "Fort Caesar", "You Were Mugged!", "Validor Falls", "Korkin Falls", "Azure", "Fort Adjer",
                  "Call To Action", "10", "11", "12", "13", "14", "15", "16", "17",
                   "18", "19", "20", "21", "22", "23", "24", "25", "26",
                    "27", "28", "29", "30", "31", "32", "33", "34", "35"];
  var spaceCosts = [0, 200, 0, 200, 150, 350, 400, 0, 400,
                    0, 450, 0, 500, 500, 550, 650, 0, 650,
                    0, 700, 0, 700, 700, 800, 850, 850, 850,
                    0, 900, 900, 300, 950, 1000, 0, 1100, 1150];

   var buyableSpaces = [false, true, false, true, false, true, true, false, true,
                  false, true, false, true, true, true, true, false, true,
                  false, true, false, true, true, true, true, true, true,
                  false, true, true, false, true, true, false, true, true ];
  var x = 600;
  var y = 640;
  for (var i = 0; i < 10 ; i++){
    spaces.push(new BoardSpace(spaceNames[i], i, spaceCosts[i], x, 700, buyableSpaces[i]));
    x -= 60;
  }
  for (var i = 10; i < 19 ; i++){
    spaces.push(new BoardSpace(spaceNames[i], i, spaceCosts[i], 60, y, buyableSpaces[i]));
    y -= 60;
  }
  x = 120;
  y = 220;
  for (var i = 19; i < 28 ; i++){
    spaces.push(new BoardSpace(spaceNames[i], i, spaceCosts[i], x, 160, buyableSpaces[i]));
    x += 60;
  }
  for (var i = 28; i < 36 ; i++){
    spaces.push(new BoardSpace(spaceNames[i], i, spaceCosts[i], 600, y, buyableSpaces[i]));
    y += 60;
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
     myProperties.push(spaces[me.onSpaceID]);
  }else{
  console.log("Sorry you cant afford this property");
  }
}
