class Bike {
    miles: number = 0;
    constructor(public price: number, public max_speed: string) {
        
     }
    ride = () => { this.miles = this.miles + 10; return this} // I returned 'this' for chaining
    reverse = () => { this.miles = this.miles - 5; return this} // I returned 'this' for chaining
    displayInfo = () => { console.log(`This bike costs $${this.price} it's max speed is ${this.max_speed} and it has ${this.miles} miles.`); return this} // I returned 'this' for chaining even though we don't chain it in the examples.
}
let bike1 = new Bike(200, "20mph");
bike1.ride().ride().ride().reverse().displayInfo();
let bike2 = new Bike(300, "30mph");
bike2.ride().ride().reverse().reverse().displayInfo();
let bike3 = new Bike(10, "1mph");
bike3.reverse().reverse().reverse().displayInfo();

// to get rid of negative values from reversing I would actually change reversing to add 5 miles because even if you are going backwards you are still increasing the amount of miles your bike has traveled.