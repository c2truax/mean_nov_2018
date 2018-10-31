function Ninja(name){
  var speed = 3;
  var strength = 3;
  this.health = 100;
  this.name = name;
  this.sayName = function(){
    console.log("My ninja name is",this.name+"!");
  }
  this.showStats = function(){
    console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength);
  }
  this.drinkSake= function(){
    this.health+=10
  }
  this.punch = function(that){
    if(that instanceof Ninja){
      that.health -= 5;
      console.log(that.name+" was punched by "+this.name+" and lost 5 Health!");
      if (that.health <= 0){
        console.log("Oh no! "+this.name+" punched "+that.name+" to death!");
      }
    }
    else{
      console.log("Only punch ninjas!")
    }
  }
  this.kick = function(that){
    if(that instanceof Ninja){
      that.health -= strength * 15;
      console.log(that.name+" was kicked by "+this.name+" and lost "+strength*15+" Health!");
      if (that.health <= 0){
        console.log("Oh no! "+this.name+" kicked "+that.name+" to death!");
      }
    }
    else{
      console.log("Only kick ninjas!")
    }
  }
}
var wow = 5;
var Ian = new Ninja("Ian");
Ian.sayName();
var Henry = new Ninja("Henry")
Henry.sayName();
Ian.punch(Henry);
Henry.kick(Ian);
Henry.kick(Ian);
Henry.punch(Ian);
Henry.punch(Ian);
Henry.punch(wow);
