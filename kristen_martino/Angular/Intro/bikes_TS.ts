class Bike {
	miles: number;

	constructor(public price: number, public maxSpeed: string) {
		this.miles = 0;
	}

	displayInfo() {
		console.log(`Price: ${this.price} || Max Speed: ${this.maxSpeed} || Miles: ${this.miles}`);
		return this;
	}

	ride() {
		console.log("Riding...");
		this.miles += 10;
		return this;
	}

	reverse() {
		if (this.miles === 0) {
			console.log("Cannot reverse any further!");
		} else {
			console.log("Reversing...");
			this.miles -= 5;
		}
		return this;
	}
}

let bike1 = new Bike(200, "25mph");
let bike2 = new Bike(800, "35mph");
let bike3 = new Bike(50, "15mph");


bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().reverse().reverse().displayInfo();
bike3.reverse().reverse().reverse().displayInfo();