function Ninja(name) {
    // var self = this;
    this.name = name;
    this.health = 100;

    // Private variables
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
        console.log("My name is", this.name);
        return this;
    }

    this.showStats = function() {
        console.log("My strength is", strength);
        console.log("My speed is", speed);
        console.log("My health is", this.health);
        return this;
    }

    this.drinkSake = function() {
        this.health = this.health + 10;
        console.log("My health is", this.health);
        return this;
    }

    this.kick = function(ninja) {
        const damage = strength * 5;
        ninja.health -= damage;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + damage + " Health!");
        strength -= 1;
        return this;
    }
}

Ninja.prototype.punch = function(ninja) {
    ninja.health -= 5;
    console.log(ninja.name, "was punched by", this.name + " and lost 5 Health!");
    return this;
}


var ninja1 = new Ninja("James");
var ninja2 = new Ninja("Angel");
// ninja1.sayName();
// ninja1.showStats()
// ninja1.drinkSake().sayName();
