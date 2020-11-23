// Il computer deve generare 16 numeri casuali tra 1 e 100.

var cpuNumber = 0
var cpuNumbersArray = [];


for (var i = 0; i < 16 && cpuNumber != cpuNumbersArray[i]; i++){
  cpuNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  cpuNumbersArray.push(cpuNumber);
}

console.log(cpuNumbersArray);

// I numeri non possono essere duplicati

for (var j = 0; j < cpuNumbersArray.length / 2; j++){
  for (var y = cpuNumbersArray.length / 2; y < cpuNumbersArray.length; y++){
    if (cpuNumbersArray[j] == cpuNumbersArray[y]){
      cpuNumbersArray[j] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    }
  }
}

console.log(cpuNumbersArray);

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

var userNumbersArray = [];
var x = 0;
var trovato = false;

do{
  userNumber = Number(prompt("Inserisci un numero tra 1 (compreso) e 100 (compreso)"));
  userNumbersArray.push(userNumber);
  x++;
} while (userNumber < 1 || userNumber > 100 || isNaN(userNumber) || userNumbersArray.length != 10)

console.log(userNumbersArray);