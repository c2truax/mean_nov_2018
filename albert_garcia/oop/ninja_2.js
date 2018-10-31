function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strenth = 3;
    this.sayName =function(){
        console.log("My name is " + this.name);
        return this;
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strenth);
        return this;
    }
    this.drinkSake = function(){
        this.health += 10;
        return this;
    }
    this.punch = function(target){
        if(target instanceof Ninja) {
            if(target.health >= 5){
                target.health -= 5;
                console.log(target.name + " was punched by " + this.name + " and lost 5 health");
                return this;
            }
            else if(target.health <= 5 && target.health > 0) {
                target.health = 0
                console.log(target.name + " has been defeated by " + this.name);
                return this;
            }
            else {
                console.log(target.name + " has already been defeated, you cannot punch " + target.name + " again")
            }
        }
        else {
            console.log("You cannot punch a " + target)
        }
    }
    this.kick = function(target){
        if(target instanceof Ninja){
            if(target.health >= (strenth * 15)){
                target.health -= (strenth * 15);
                console.log(target.name + " was kicked by " + this.name + " and lost " + (strenth * 15) + " health");
                return this;
            }
            else if(target.health <= (strenth * 15) && target.health > 0) {
                target.health = 0
                console.log(target.name + " has been defeated by " + this.name);
                return this;
            }
            else {
                console.log(target.name + " has already been defeated, you cannot kick " + target.name + " again")
            }
        }
        else {
            console.log("You cannot kick a " + target)
        }
    }
}
var wall = "wall"
var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(wall);
blueNinja.kick(redNinja);
