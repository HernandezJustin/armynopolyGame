function BoardSpace(name, space_id, cost, x, y, buyable){
  this.name = name;
  this.space_id = space_id;
  this.cost = cost;
  this.x = x;
  this.y = y;
  this.buyable = buyable;
  this.owner = null;

  this.display = function(){
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, 60, 60);
    fill(50);
    textSize(12);
    text(this.name, this.x , this.y, 60, 60);
    // stroke(200)
  };

  this.clicked = function(){
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 30){
      this.displayCard();
      // console.log("x" + this.x);
      // console.log("y" + this.y);
    }
  };

  this.displayCard = function(){
    background(210);
    var info = "Space Name:" + this.name + "\nSpace Cost:" + this.cost + "\nIs buyable:" + this.buyable + "\n Owner: " + this.owner;
    fill(255);
    textSize(30);
    var spaceinfo = text(info, 150, 400);
  };
}
