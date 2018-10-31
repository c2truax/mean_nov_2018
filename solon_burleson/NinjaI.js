var Ninja = function(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.sayName = function(){
        console.log("Name: " + this.name);
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength)
    }
    this.drinkSake = function(){
        this.health += 10;
    }
    this.punch = function(ninja){
        if(ninja instanceof Ninja == true){
            ninja.health -= 5;
            console.log(ninja.name + " was punched by " + this.name + " and lost 5 Health!");
        }
        else{
            console.log("Target is not a ninja!");
        }
    }
    this.kick = function(ninja){
        if(ninja instanceof Ninja == true){
            var damage = 15 * strength;
            ninja.health -= damage;
            console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!")
        }
        else{
            console.log("Target is not a ninja!");
        }
    }
}

var ninja1 = new Ninja("Naruto")
var ninja2 = new Ninja("Sasuke")
var person = "";
ninja1.sayName();
ninja1.showStats();
ninja2.punch(ninja1);
ninja1.kick(ninja2);
ninja2.showStats();
ninja2.punch(person);
ninja2.kick(person);