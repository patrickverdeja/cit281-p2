/*
    CIT 281 Project 2
    Name: Patrick Verdeja Herms
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Return a random lowercase letter
function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet[getRandomInteger(1, alphabet.length - 1)];
}

// Returns the random-length string
function getRandomString(minLength, maxLength) {
  let result = "";
  for (let i = 0; i < getRandomInteger(minLength, maxLength + 1); i++) {
    result += getRandomLetter();
  }
  return result;
}

// Returns string in ascending order
function getSortedString(string) {
  return string.split("").sort().join("");
}
console.log(getSortedString(getRandomString(10, 20)));
