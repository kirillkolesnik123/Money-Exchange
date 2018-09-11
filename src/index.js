// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
   currency = parseInt(currency);
    let change = {};
    if(currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    if(currency >= 50) {
      change.H = Math.floor(currency / 50);
      currency = currency - (change.H * 50);
    }
    if(currency >= 25) {
      change.Q = Math.floor(currency / 25);
      currency = currency - (change.Q * 25);
    }
    if(currency >= 10) {
      change.D = Math.floor(currency / 10);
      currency = currency - (change.D * 10);
    }
    if(currency >= 5) {
      change.N = Math.floor(currency / 5);
      currency = currency - (change.N * 5);
    }
    if(currency > 0) {
      change.P = currency;
    }
    return change;

};
