function Ninja(name, health=100){
  this.name = name;
  this.health = health;
  var speed = 3;
  var strength = 3;
  this.sayName = function(){
    console.log('My ninja name is: ' + this.name);
    return this;
  }
  this.showStats = function(){
    console.log('Name: '+ this.name + ', Speed: ' + speed + ', Health: ' + this.health + ', Strength: ' + strength);
    return this;
  }
  this.drinkSake = function(){
    this.health += 10;
    return this;
  }
  this.punch = function(opponent){
    if(opponent instanceof Ninja == true){
      opponent.health -= 5;
      console.log(opponent.name + ' was punched by ' + this.name + ' and lost 5 teeth!');
    }
  }
  this.kick = function(opponent){
    if(opponent instanceof Ninja == true){
      var kickstrength = 15*strength;
      opponent.health -= kickstrength;
      console.log(opponent.name + ' was kicked by ' + this.name + ' and lost ' + kickstrength + ' health!');
    }

  }
}
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strengthc
