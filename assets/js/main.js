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
var trovato = false;
var counter = 1;

do{

  var userNumber = Number(prompt("Inserisci un numero da 1 (compreso) a 100 (compreso)"));

  while (userNumber < 1 || userNumber > 100 || isNaN(userNumber)) {
    userNumber = Number(prompt("Hai inserito un valore inferiore a 1, maggiore di 100 OPPURE una parola - Riprova"));
  }

  while ((userNumbersArray.includes(userNumber))) { 
    userNumber = Number(prompt("Hai già inserito questo numero - Per favore, riprova"));
  }
  
  userNumbersArray.push(userNumber); 
  
  // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.

  for (var i = 0; i < cpuNumbersArray.length; i++){
    if (cpuNumbersArray.includes(userNumber)){
      alert("BOOOOOOOM BABY!! Hai beccato una mina dopo " + counter + " tentativi");
      trovato = true;
      break;
    } else {
      alert ("MINA EVITATA, vai avanti!!");
      counter++;
      break;
    }
  }
} while (userNumbersArray.length < 5 && trovato == false)

console.log(userNumbersArray);

if (userNumbersArray.length == 5 && trovato == false){
  alert ("Sei uscito dal campo minato senza \"calpestare\" la mina. Congratulazioni!!!");
}


//FUNZIONI
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //incluso sia il minimo che il massimo
}
