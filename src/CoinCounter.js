// specs (based on a specific value, perform the following: $4.99)
// calculate number of quarters
// calculate number of dimes
// calculate number of nickels
// calculate number of pennies
// print all values *

export class Coin {
  count1(change){
  //assigning functions as arguments
  const coinCounter1 = function(change) {
    // join the argument which will probably be an array delivered from a reduce function
    return `your change is ${change}`;
  }
  console.log(coinCounter1(4.99));
  return coinCounter1;
}

count2(amount){
  //Functions Returning Functions
  const coinCounter2 = function getChange() {   
    //calculate coins
    return function(numOfQuarts) {
      return function(numOfDimes) {
        return function (numOfNickles) {
          return function (numOfPennies){
            return `your change is.. ${numOfQuarts} quarter(s), ${numOfDimes} dime(s), ${numOfNickles} nickle(s), and ${numOfPennies} penn(y)(ies)`;
          }
        }
      }
    }
  }
  console.log(coinCounter2()(5)(3)(6)(1));
  return coinCounter2;
  }
}

