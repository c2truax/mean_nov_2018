class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}.`);
        return this;
    }
    showStats() {
        console.log(`Name: ${this.name}\nHealth: ${this.health}\nStrength: ${this.strength}\n`);
        return this;
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log('This is a wise message!')
        return this;
    }

}
const omi = new Ninja("Omi")
omi.sayName()
omi.showStats()
omi.drinkSake().showStats()
const josh = new Sensei("Josh")
josh.sayName().speakWisdom().showStats()
