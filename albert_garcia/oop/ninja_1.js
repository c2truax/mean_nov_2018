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
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();