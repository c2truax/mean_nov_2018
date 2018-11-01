class Ninja {

	constructor(name, health, speed=3, strength=3) {
		this.name = name;
		this.health = health;
		this.speed = speed;
		this.strength = strength;
	}

	sayName() {
		console.log(this.name);
	}

	showStats() {
		console.log(`name: ${this.name}\nhealth: ${this.health}\nspeed: ${this.speed}\nstrength: ${this.speed}`);
	}

	drinkSake() {
		this.health += 10;
  	}

	punch(ninja) {
		try {
			if (!(ninja instanceof Ninja)) {
	        	throw new Error(`Error: ${ninja} is not a Ninja object`);
	      	}
      	ninja.health -= 5;
		console.log(`${ninja.name} was punched by ${this.name} and lost 5 health!`);
		}
		catch(error) {
			console.error(error);
		}
	}

	kick(ninja) {
		try {
			if (!(ninja instanceof Ninja)) {
        		throw new typeError;
      		}
      	ninja.health -= eval(this.strength * 15);
		console.log(`${ninja.name} was kick by ${this.name} and lost ${this.strength * 15} health!`);
		}
		catch(error) {
			console.error(error);
		}	
	}
}

class Sensei extends Ninja {
	constructor(name, health=200, speed=10, strength=10, wisdom=10) {
		super(name, health, speed, strength);
		this.widom = wisdom;
	}

	speakWisdom() {
		super.drinkSake();
		console.log('The moon is a tree');
	}

}

meAsNinja = new Ninja('Barstoic', 100);
youAsNinja = new Ninja('Some Dudeh', 100);
thatSensei = new Sensei('Sensei Dudeh');
meAsNinja.sayName();
meAsNinja.showStats();
meAsNinja.drinkSake();
meAsNinja.showStats();
meAsNinja.punch(3);
eval(meAsNinja.kick(youAsNinja));
thatSensei.speakWisdom();