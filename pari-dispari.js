/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/

// 1.
const userNumber = prompt(`Inserisci un numero da 1 a 5`);
console.log(`Tu hai scelto il numero ` + parseInt(userNumber));

const oddEven = prompt(`Scegli se giocare pari o dispari`);
console.log(`Hai scelto di giocare ` + oddEven);


let somma;
let message; 

console.log(randomNumber(), iswinner());


function randomNumber(){
  
  generatedNumber = Math.floor(Math.random() * 5 + 1);
  console.log(`Il pc ha scelto: ` + generatedNumber);

  somma = generatedNumber + parseInt(userNumber);
  
  if (somma % 2 === 0){

    message = ` è un numero pari.`;

  } else {

    message = ' è un numero dispari.'

  }

  return (somma + message);

}

function iswinner (){

  let messageResult;

  if ((oddEven == `pari`) & (somma % 2 === 0)){

    messageResult =` Hai Vinto!`;

  } else {

    messageResult = ` Hai Perso, Ritenta!`;

  }

  return messageResult;
}


