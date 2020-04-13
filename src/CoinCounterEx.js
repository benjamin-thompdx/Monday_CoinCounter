// specs (based on a specific value, perform the following: $4.99)
// calculate number of quarters
// calculate number of dimes
// calculate number of nickels
// calculate number of pennies
// print all values *

const money = 4.99;

const quarterCounter = (counter) => {
	if (isNaN(counter)) {
  	return;
  }
  if (counter /= .25) {
  	return counter;
  } else {
  	return quarterCounter(counter + 1);
  }
}

// const KeturahTryingToUnderstand = (money) => {
// 	if (isNaN(money)) {
//   	return;
//   }
//   if (money /= .25) { //keeps it from infinit
//   	return ????;
//   } else { //recursion
//   	return quarterCounter(thisShouldBeNotmoneyXnumberofQuarters + 1);
//   }
// }

const numberOfQuarters = Math.floor(quarterCounter(money));
const moneyAfterQuarters = money - (numberOfQuarters * .25);

const dimeCounter = (moneyAfterQuarters) => {
	if (isNaN(moneyAfterQuarters)) {
  	return;
  }
  if (moneyAfterQuarters /= .10) {
  	return moneyAfterQuarters;
  } else {
  	return dimeCounter(moneyAfterQuarters + 1);
  }
}

const numberOfDimes = Math.floor(dimeCounter(moneyAfterQuarters));
const moneyAfterDimes = moneyAfterQuarters - (numberOfDimes * .10);


const nickleCounter = (moneyAfterDimes) => {
	if (isNaN(moneyAfterDimes)) {
  	return;
  }
  if (moneyAfterDimes /= .05) {
  	return moneyAfterDimes;
  } else {
  	return nickleCounter(moneyAfterDimes + 1);
  }
}

const numberOfNickles = Math.floor(nickleCounter(moneyAfterDimes));
const moneyAfterNickles = moneyAfterDimes - (numberOfNickles * .05);


const pennyCounter = (moneyAfterNickles) => {
	if (isNaN(moneyAfterNickles)) {
  	return;
  }
  if (moneyAfterNickles /= .01) {
  	return moneyAfterNickles;
  } else {
  	return pennyCounter(moneyAfterNickles + 1);
  }
}

const numberOfPennies = Math.floor(pennyCounter(moneyAfterNickles));
// alert(numberOfPennies);

// Insert result print HERE
console.log(`Total amount: ${money}, Quarters: ${numberOfQuarters}, Dimes: ${numberOfDimes}, Nickles: ${numberOfNickles}, Pennies: ${numberOfPennies}`);
