// Il computer deve generare 16 numeri casuali tra 1 e 100.

var cpuNumber = 0
var cpuNumbersArray = [];

for (var i = 0; i < 16; i++){
  cpuNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  cpuNumbersArray.push(cpuNumber);
}
console.log(cpuNumbersArray);