// specs (based on a specific value, perform the following: $4.99)
// calculate number of quarters
// calculate number of dimes
// calculate number of nickels
// calculate number of pennies
// print all values *

//assigning functions as arguments
const coinCounter1 = function(change) {
  // join the argument which will probably be an array delivered from a reduce function
  return `your change is ${change}`;
}
console.log(coinCounter1(4.99));

//Functions Returning Functions
const coinCounter2 = function getChange() {   
  //calculate coins
  return function(numOfQuarts) {

    return function(numOfDimes) {
      return function (numOfNickles) {
        return function (numOfPennies){
          return `your change is.. ${numOfQuarts} quarters, ${numOfDimes} dimes, ${numOfNickles} nickles, and ${numOfPennies} pennies`;
        }
      }
    }
  }
}

console.log("Your change consists of..", coinCounter2()(5));