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
      console.log("space name:" + this.name);
      console.log("space id:" + this.space_id);
      console.log("space cost:" + this.cost);
      console.log("buyable?" + this.buyable);
    }
  };
}
