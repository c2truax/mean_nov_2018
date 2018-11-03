class Ninja {
	constructor(name){
		this.name = name;
		this.health = 100;
		this.speed = 3;
		this.strength = 3;
	}
	sayName(){
		console.log(`My name is ${this.name}`);
	}
	showStats(){
		console.log(`My name is ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
	}
	drinkSake(){
		this.health += 10;
	}

}
// const ninja1 = new Ninja ("robert");
// ninja1.showStats();

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const superSensei = new Sensei("Erick");
// superSensei.speakWisdom();
// superSensei.showStats();



