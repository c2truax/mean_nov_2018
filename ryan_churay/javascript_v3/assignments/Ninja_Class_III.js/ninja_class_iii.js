class Ninja{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  sayName(){
    console.log('Hi my name is ' + this.name);
    return this;
  }
  showStats(){
    console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
    return this;
  }
  drinkSake(){
    this.health += 10;
    console.log(this.health + ' Mmmmmm good');
    return this;
  }
}

class Sensei extends Ninja{
  constructor(name, wisdom=10, health=200, speed=10, strength=10){
    super(name);
    this.health = health;
    this.speed = speed;
    this.strength = strength;
    this.wisdom = wisdom;
  }
  speakWisdom(){
    super.drinkSake();
    console.log(`Nah nah na boo boo I'm smarter than you; ${this.wisdom}; ${this.health}`)
  }
}

var ninja1 = new Ninja('bob');
ninja1.sayName().showStats().drinkSake()
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
