function Ninja(name) {
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.sayName = function() {
        console.log("My ninja name is " + this.name + "!")
        return this;
    }
    this.showStats = function() {
        console.log("Name:" + this.name + ", " + "Health:" + this.health + ", " + "Speed:" + speed + ", " + "Strength:" + strength )
        return this;
    }
    this.drinkSake = function() {
        this.health += 10;
        return this;

    }
    this.punch = function(ninja) {
        if (ninja instanceof Ninja) {
            console.log( ninja.name + " was punched by " + this.name + " and lost 5 health")
            ninja.health -= 5
            return this;
        }
        else {
            console.log("Come on man, you can only attack a ninja man")
        }
    }
    this.kick = function(ninja) {
        console.log ( ninja.name + " was kicked by " + this.name + " and lost 15")
        ninja.health -= 15
        return this;
    }
}
function Civilian(name) {
    this.name = name;
}

var oni = new Ninja("Oni")
var don = new Ninja("Don")
oni.sayName()
oni.showStats()
oni.drinkSake().showStats()
oni.punch(don)
don.showStats()
don.kick(oni)
oni.showStats()
var john = new Civilian("John")
oni.punch(john)
