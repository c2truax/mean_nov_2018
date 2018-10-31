function Ninja(name){
  this.name = name;
  this.health = 100;
  //needed to make it private [can use var or const]
  var speed = 3
  var strength = 3

  this.sayName = function() {
    console.log(`My name is ${this.name}!`)
  }

  this.showStats = function () {
    //Speed and Strength is private so does not need "this"
    console.log(`Name: ${this.name} Health: ${this.health} Speed: ${speed} Strength: ${strength}`)
  }

  this.drinkSake = function() {
    this.health += 10;
    //return is to chain the event
    return this;
  }
  //prototype to share properties and methods
  Ninja.prototype.punch = function (object1) {
    //this instanceof is for validations so only that certain class has access too
    if(object1 instanceof Ninja){
      this.health -= 5;
      console.log(`${this.name} was punched by ${object1.name} and lost 5 health!`)
    }
    else{
      console.log("only ninjas allowed!")
    }
  }

  Ninja.prototype.kick = function (object1) {
    if(object1 instanceof Ninja){
      this.health -=15*strength;
      console.log(`${this.name} was kicked by ${object1.name} and lost ${15*strength} health!`)
    }
    else{
      console.log("Only ninjas allowed!")
    }
  }

}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake().showStats();
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
