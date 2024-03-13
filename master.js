// ESERCIZIO 1 :
// Dato un array x e un valore y verificare se l'array fornito contiene il valore. L'array può contenere numeri o stringhe. Restituire true se l'array contiene il valore, false in caso contrario. ESEMPIO: check([66, 101], 66) ---> true check(['what', 'a', 'great', 'kata'], 'kat') ---> false

let x = [66, 101];
let y = 66;

console.log(x.includes(y));

// ESERCIZIO 2:
// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri contenuti nell'array. Esempio: let array = [1, 5 ,7 ,12]; Output = 25

let array = [1, 5 ,7 ,12];

function arrSum(arr){
    console.log(arr.reduce((acc, num)=>acc+num, 0));
}
arrSum(array);

// ESERCIZIO 3:
// Scrivi un programma che dato un array di numeri, restituisca in output la media e tutti i valori minori della media. Esempio: Input: a = [3, 5, 10, 2, 8] Output: media = 5.6, valori minori = [3, 5, 2]

let aa = [3, 5, 10, 2, 8];

function mediaMinori(arr){
    let media = (arr.reduce((acc, num)=>acc+num, 0)) / arr.length; // .length property not method()
    let minori = arr.filter((el)=> el < media);
    console.log(`media = ${media}, valori minori = ${minori}`);
}
mediaMinori(aa);

// ESERCIZIO 4
// Creare una funzione javascript che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore. findMultiples([1, 2, 3, 4, 5, 6], 2) --> [2, 4, 6]

function findMultiples(arr, num){
    console.log(arr.filter((el)=> el % num == 0));
}
findMultiples([1, 2, 3, 4, 5, 6], 2);

// ESERCIZIO 5:
//  Scrivi un programma che dati: - 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni: 

// addizione

// sottrazione 

// moltiplicazione 

// divisione

//  Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.

// Esempio: Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

function randArr(len, max, min){
    let arr = [];
    for (let i = 0; i < len; i++){
        arr.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    return arr;
}
let a = randArr(10, 20, 1);
let b = randArr(10, 20, 1);

function operazione(operazione, arr1, arr2){
    switch (operazione) {
        case "addizione":
            console.log(arr1.map((el, i)=> el + arr2[i])); 
            break;
        case "sottrazione":
            console.log(arr1.map((el, i)=> el - arr2[i]));
            break;
        case "divisione":
            console.log(arr1.map((el, i)=> el / arr2[i]));
            break;
        case "moltiplicazione":
            console.log(arr1.map((el, i)=> el * arr2[i]));
            break; 
    }
}
console.log(a);
console.log(b);
operazione("addizione", a, b);
operazione("sottrazione", a, b);
operazione("divisione", a, b);
operazione("moltiplicazione", a, b);

// ESERCIZIO 6: 
// Scrivere un programma che permetta di filtrare soltanto le parole all’interno di un array:

// let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’]

// il risultato dovra’ dare, let filtered = [‘hackademy’, ‘Javascript’, ‘php’]

// HINT: provate a filtrare in base al tipo di dato (operatore typeof)

function filtered(arr){
    console.log(arr.filter((el) => typeof(el) == "string"));
}

let mixArray = [1, true, "hackademy", 100, "Javascript", false, null, "php"];
filtered(mixArray);

// EXTRA:
//  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Nel controllo scarta gli spazi e i segni di punteggiatura
//     Esempio:

//     Input: “i topi non avevano nipoti”

//     Output: TRUE

// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando :

// str.replace(/\W/g, "")

// function isPalindromo(str){
//     let newStr = str.replaceAll(" ", "" );
//     let invStr = "";
//     for(let i = (newStr.length - 1); i >= 0 ; i--){
//         invStr+=(newStr.charAt(i));
//     }
//     console.log(newStr == invStr);
// }
// let Input = "i topi non avevano nipoti"
// isPalindromo(Input)


//soluzione di Denis Parise
console.log("\nEsercizio Extra");

let palindrome = "Ingegno c'era nell'allenare congegni"

function verPal(string) {
    let re = /[\W_]/g;
    let lowRegStr = string.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
    
}
console.log(verPal(palindrome));

console.log(palindrome.replace(/\W/g, ""));