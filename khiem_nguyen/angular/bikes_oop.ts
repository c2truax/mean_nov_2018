class Bike {
    price: number;
    maxSpeed: string;
    miles: number;

    constructor (price: number, maxSpeed: string) {
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.miles = 0;
    }
    displayInfo() {
        console.log(`Price: $${this.price}, Speed: ${this.maxSpeed}, Miles: ${this.miles}`)
        return this;
    }
    ride() {
        console.log(`They see me rollin'`);
        this.miles += 10;
        return this;
    }
    reverse() {
        if (this.miles == 0) {
            console.log(`Can't reverse @ 0 miles!`);
            return this;
        }
        else {
            console.log(`Flip it and reverse it`);
            this.miles -= 5
            return this;
        }
    }
}

var red = new Bike(100, "20 mph");
var blue = new Bike(150, "30 mph");
var green = new Bike(200, "40 mph");

red.ride().ride().ride().reverse().displayInfo();
blue.ride().ride().reverse().reverse().displayInfo();
green.reverse().reverse().reverse().displayInfo();
