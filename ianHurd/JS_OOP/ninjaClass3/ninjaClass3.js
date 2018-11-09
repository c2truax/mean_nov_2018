class Ninja {
  constructor(name){
    this.name = name;
    this.health = 100;
    this.strength = 3;
    this.speed = 3;
  }
  sayName(){
    console.log("My ninja name is",this.name+"!");
  }
  showStats(){
    console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength);
  }
  drinkSake(){
    this.health+=10
  }
}
class Sensei extends Ninja{
  constructor(name){
    super(name);
    this.health = 200;
    this.strength = 10;
    this.speed = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake();
    console.log("The strength of JavaScript is that you can do anything. The weakness is that you will.")
  }
}
const josh = new Sensei("Josh");
josh.speakWisdom();
josh.showStats();
