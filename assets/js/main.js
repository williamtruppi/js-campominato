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