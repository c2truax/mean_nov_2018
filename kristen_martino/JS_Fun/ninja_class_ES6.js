/*jshint esversion: 6 */

class Ninja {
  constructor(name, health = 100, strength = 3, speed = 3) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
  }
  showStats() {
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    return this;
  }
  sayName() {
    console.log("My ninja name is " + this.name + "!");
    return this;
  }
  drinkSake() {
    this.health += 10;
    console.log('Health increased to ' + this.health + '!');
    return this;
  }
}

class Sensei extends Ninja {
  constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }
  speakWisdom() {
    super.drinkSake();
    console.log("What one programmer can do in one month, two programmers can do in two months.");
  }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
ninja1.drinkSake();

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
