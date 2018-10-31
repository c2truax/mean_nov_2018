class Ninja{
  constructor(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;
  }
  sayName() {
    console.log(`My name is ${this.name}!`)
  }

  showStats() {
    console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`)
  }

  drinkSake() {
    this.health += 10;
    return this;
  }
}

//extending Ninja class
class Sensei extends Ninja {
  constructor(name){
    //must call super constructor in derived class before accessing "this"
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom(){
    //inherited from the class Ninja [user super]
    super.drinkSake();
    console.log(`What one programmer can do in one month, two programmers can do in two months.`)
  }
}

var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake().showStats();
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
