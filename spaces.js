function BoardSpace(name, space_id, cost, x, y, buyable){
  this.name = name;
  this.space_id = space_id;
  this.cost = cost;
  this.x = x;
  this.y = y;
  this.buyable = buyable;

  this.display = function(){
    rectMode(CENTER);
    fill(255);
    rect(this.x, this.y, 60, 60);
    // stroke(200)
  };

  this.clicked = function(){
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 30){
      this.displayCard();
      // console.log("space name:" + this.name);
      // console.log("space id:" + this.space_id);
      // console.log("space cost:" + this.cost);
      // console.log("buyable?" + this.buyable);
      // console.log("x" + this.x);
      // console.log("y" + this.y);
    }
  };

  this.displayCard = function(){
    var info = "Space Name:" + this.name;

    textSize(30);
    fill(255);
    text(info, 300, 400);
  };
}
