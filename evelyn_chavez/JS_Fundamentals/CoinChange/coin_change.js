function coinChange(cents){
    var result = {
        dollars: null,
        quarters: null,
        dimes: null,
        nickels: null,
        pennies: null
    }
    if(cents >= 100){
        var dollars = Math.floor(cents/100);
        result["dollars"] = dollars;
        cents -= dollars * 100;
    }
    if(cents >= 25){
        var quarters = Math.floor(cents/25);
        result["quarters"] = quarters;
        cents -= quarters * 25;
    }
    if(cents >= 10){
        var dimes = Math.floor(cents/10);
        result["dimes"] = dimes;
        cents -= dimes * 10;
    }
    if(cents >= 5){
        var nickels = Math.floor(cents/5);
        result["nickels"] = nickels;
        cents -= nickels * 5;
    }
    result["pennies"] = cents;
    return result;
}
console.log(coinChange(294));