/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//RISPOSTE ES 1
/**
 1)Non viene eseguita neanche una iterazione nel ciclo for,
 perchè la condizione è falsa (i parte subito come minore di 5).
 */

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 == 0) {
        return num + 5;
    }
    return num;
}
//RISPOSTE ES 2
/**
 1)L'operatore dell'uguaglianza era scritto in modo errato.
 */

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}
console.log('Segue loop to five');
loopToFive();
//RISPOSTE ES 3
/**
 1) Non è stata scritta correttamente la sinstassi del ciclo for, 
 usando le virgole al posto dei punti e virgola.
 2) Non è stato messo il minore uguale, dato che la funzione deve arrivare fino a cinque
 */

// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // [2,4,6,8]
//RISPOSTE ES 4
/**
 1)E' stato aggiunto un punto e virgola di troppo nella sintassi del ciclo for.
 2)L'operatore di uguaglianza nel ciclo if, riga 54, era stato scritto in maniera errata: mancava un uguale.
 3)nell'if manca l'indice a numbers e nel push ci va messo numbers[i], l'elemento presente all'indice i dell'array numbers.
 4)il return era stato scritto nel ciclo for, quindi non consente l'iterazione
 5)il puneo e virgola dopo l'if causava problemi
 */