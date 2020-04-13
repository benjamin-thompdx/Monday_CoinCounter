
// Problem #1 goals: 
// -create multiple functions
// -add prefix to name.

// -prefix-name

prefix = (pref) => {
  return name = (name) => {
    return `${pref} ${name}, good day!`
  }
}

const greetMadam = prefix('madam');

console.log(greetMadam("Kathy"));

// Problem #2 goals:
// - create various animal noises
//- Noise: animal & sound

animalNoise = (animal) => {
  return noise = (noise) => {
    return `The ${animal} ${noise}s`
  }
}

console.log(animalNoise("lion")("roar"));

const human = animalNoise("Jerry")
console.log(human("belch"));


// problem 3:
// create prefix and suffix to name

prefixAdd = (prefix) => {
  return suffixAdd = (suffix) => {
    return `${prefix} Horace ${suffix}`
  } 
}

const missEsquire = prefixAdd("miss")("esquire");

console.log(missEsquire)

// Proble 4:
// Multiple functions: First add, then multiply

addThenMult = (addBy) => {
  return add = (multBy) => {
    return mult = (userNum) => {
      return (userNum + addBy) * multBy
    }
  }
}
const addFiveMultiplyByTwo = addThenMult(5)(2)

console.log(addFiveMultiplyByTwo(4));

// const addMult = (add) => {
//   return (mult) => {
//     return add * mult;
//   }
// }


// const addMult = (numToAddBy) => {
//   return (numToMult) => {
//     return (theirNum) => {
//       return (theirNum + numToAddBy) * numToMult;
//     }
//   }
// }

// const addTwoMultiplyByThree = addMult(2)(3);
// const addFiveMultiplyByNine = addMult(5)(9);

// console.log(addTwoMultiplyByThree(5))
