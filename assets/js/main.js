// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati

var cpuNumber = 0;
var cpuNumbersArray = [];

while (cpuNumbersArray.length < 16) {
  var cpuNumber = randomNumber(1, 100); //invoco la funziona randomNumber
  if (!(cpuNumbersArray.includes(cpuNumber))) { 
    cpuNumbersArray.push(cpuNumber);
  }
}

console.log(cpuNumbersArray);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.

var userNumbersArray = [];
var userNumber;

while (userNumbersArray.length < 5) {
  var userNumber = Number(prompt("Inserisci un numero da 1 (compreso) a 100 (compreso"));
  if (!(userNumbersArray.includes(userNumber))) { 
    userNumbersArray.push(userNumber);
  } else {
    alert("Hai già inserito questo numero - Per favore, riprova");
  }
}

console.log(userNumbersArray);


//FUNZIONI
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //incluso sia il minimo che il massimo
}