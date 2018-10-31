function Ninja(name, health = 100) {
  var self = this;
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = health;
  this.showStats = function () {
    console.log(
      `Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`
    );
    return this;
  };
  this.punch = function (target) {
    if (target != self && target instanceof Ninja) {
      target.health -= 5;
      console.log(target.name + " was punched by " + this.name + " and lost 5 Health!");
    }
    return this;
  };
  this.kick = function (target) {
    if (target != self && target instanceof Ninja) {
      var lost_health = 15 * strength;
      target.health -= lost_health;
      console.log(target.name + " was kicked by " + this.name + " and lost " + lost_health + " Health!");
    }
    return this;
  };
}

Ninja.prototype.sayName = function () {
  console.log("My ninja name is " + this.name + "!");
  return this;
};

Ninja.prototype.drinkSake = function () {
  this.health += 10;
  console.log('Health increased to ' + this.health + '!');
  return this;
};





var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake();

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
