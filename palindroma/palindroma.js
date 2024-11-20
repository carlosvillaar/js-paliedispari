/* La consegna ci chiede di far inserire all'utente una parola e usare una funzione per capire se la parola inserita e' palindroma
*/

// 2. salvo la parola in una variabile 

const word = prompt(`inserisci una parola`);

let message;

// 3. confronto le parole

if (word.toLocaleLowerCase() === reverseWord(word.toLowerCase())){

  message = `la parola is palindroma`

} else {

  message = `la parola is not palindroma`

}

console.log(reverseWord(word));

console.log(message);

// 1. creare una funzione che mi gira la parola

function reverseWord(word){
  
  let reversedword = ``;
  for (let i = word.length - 1; i >= 0; i--){

    reversedword += word[i];

  }

  return reversedword
}