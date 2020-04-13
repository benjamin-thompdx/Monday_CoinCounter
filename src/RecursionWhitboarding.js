// Possible hints:
// Split
// Push
// function sentenceReverse (input) {
// }
//  
// 
// if (inputArray < .length) {
//  return inputarray;
// } else {
//    return newArray.unshift(
// }



const input = "I am a cat"
const inputArray = input.split(" ")

reverse = (inputArray, counter) => {
  let outputArray = []
  if (inputArray[counter] = null){
    const output = outputArray.join(" ");
    return output; //?
  } else {
    outputArray.unshift(inputArray[counter]) //adding word to front of output array
    counter ++
    return reverse(inputArray, counter)
  }
}

const recurseReverse = (string) => {
  if (string === "") {
    return "";
  } else {
    return recurseReverse(string.substring(1)) + string[0];
  }
}

// >:( -angry face
// >:[] - hungry face
// :'( - end of day face
// xD -rAwr
