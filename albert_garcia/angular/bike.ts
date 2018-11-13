class Bike {
    miles: number;
     constructor(
         public price: number,
         public max_speed: string) {
         this.miles = 0;
         }
     displayinfo = function () {
         console.log("price: " + this.price + " max speed: " + this.max_speed + " total miles: " + this.miles);
         return this;
     }
     ride = function () {
         console.log("riding");
         this.miles += 10;
         return this;
     }
     reverse = function () {
         if (this.miles > 5) {
            console.log("reversing");
            this.miles -= 5;
            return this;
         }
         else {
             console.log("cannot have negative milage");
             return this;
         }

     }
}
const bike1 = new Bike(200, "25mph");
const bike2 = new Bike(100, "18mph");
const bike3 = new Bike(500, "40mph");
bike1.ride().ride().ride().reverse().displayinfo();
bike2.ride().ride().reverse().reverse().displayinfo();
bike3.reverse().reverse().reverse().displayinfo();