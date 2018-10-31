class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }

    sayName() {
        console.log("Name: " + this.name);
    }

    showStats() {
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength);
    }

    drinkSake(){
        this.health += 10;
        console.log(this.name + " drinks sake and gains 10 Health!")
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10
    }

    speakWisdom() {
        this.drinkSake();
        console.log("A person grows up when he's able to overcome hardships.  Protection is important, but there are some things that a person must learn on his own.")
    }
}


const ninja1 = new Ninja("Naruto");
const sensei = new Sensei("Jiraiya");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
sensei.sayName();
sensei.showStats();
sensei.speakWisdom();