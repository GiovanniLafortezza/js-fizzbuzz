/* Stampare numeri da 1 a 100
    per i multipli di 3 stampare FIZZ al posto del numero
    per i multipli di 5 stampare BUZZ
    per i multipli sia di 3 che di 5 stampare FizzBuzz
*/


// Ciclo for per stampare numeri da 1 a 100
for( i = 1; i <= 100; i++) {
    
    if( i % 3 == 0 && i % 5 == 0) {
        //se i numeri sono sia multipli di 3 e di 5 stampare FizzBuzz
        console.log("FizzBuzz");
    }
    // Istruzione condizionale if per i multipli di 3
    //per trovare un multiplo di 3 basta fare il modulo
    //se il numero è un multiplo di 3 stampa in console Fizz
    else if( i % 3 == 0) {
        console.log(" Fizz");
        //se il numero è un multiplo di 5 stampa in console Buzz
    } else if( i % 5 == 0) {
        console.log(" Buzz");
        //altrimenti stampa solo il numero
    } else {
        console.log(i);
    }

    
}

