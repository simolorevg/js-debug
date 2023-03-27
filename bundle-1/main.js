/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    console.log(message);
    return message;
}
checkAge();
//RISPOSTE ES 1
/**
 1) Non è presente il return, quindi non restituisce nessun valore. Ho aggiunto il console.log per poter
 visualizzare il messaggio e verificare il corretto svolgimento della funzione.
 */
/**
 2) Message è una costante, quindi non gli si può riassegnare altri valori: come si cerca di fare nell'if.
 La soluzione è dichiararla con let rendendla una variabile riassegnabile.
 */

// // ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
//RISPOSTE ES 2
/**
 1) è stata richiamata la chiave length in modo errato: errore che faccio sempre 
 e che porta una perdita di tempo assurda.
 */

// // ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;
    console.log(`Il risultato finale è ${total}`);
}
addNumbers();
//RISPOSTE ES 3
/**
 1) Non viene eseguita la conversione a numero dell'input inserito dall'utente tramite prompt.
 Così facendo esegue una concatenazione stra stringa e valore numerico, non una somma.
 Uso la funzione parseInt per convertirlo in valore numerico.
 */


// // ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
//RISPOSTE ES 4
/**
 1) I valori booleani sono stati scritti come stringhe: così facendo, 
 il confronto nell'if finale farà fare sempre le istruzioni dell'else
anche quando scriveremo una mail presente nell'array
 */