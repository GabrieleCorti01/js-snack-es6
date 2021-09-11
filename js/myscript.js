
// SNACK 1
/**
    Creare un array di oggetti: ogni oggetto descriverà una bici 
    da corsa con le seguenti proprietà: nome e peso.
    Stampare a schermo la bici con peso minore.
 */


let bici = [{
    nome: "specialized",
    peso: "5",
},
{
    nome: "colnaghi",
    peso: "6",
},
{
    nome: "speedy",
    peso: "8",
},
{
    nome: "racebolt",
    peso: "3.5",
}]

for (let i = 0; i < bici.length, i++;){
    biciclettaLeggera = bici[i].length < bici[i].length
    console.log(bici)
}














/**
    Creare un array di oggetti di squadre di calcio.
    Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
    Nome sarà l'unica proprietà da compilare, mentre le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti
 */


    // var serieA = [
    //     {
    //         nome: "Inter",
    //         punti_fatti : 0,
    //         falli_subiti: 0,
    //     },
    //     {
    //         nome: "Roma",
    //         punti_fatti : 0,
    //         falli_subiti: 0,
    //     },
    //     {
    //         nome: "Napoli",
    //         punti_fatti : 0,
    //         falli_subiti: 0,
    //     },
    //     {
    //         nome: "Atalanta",
    //         punti_fatti : 0,
    //         falli_subiti: 0,
    //     },
    //     {
    //         nome: "Sassuolo",
    //         punti_fatti : 0,
    //         falli_subiti: 0,
    //     }
    // ]
    
    
    // for (var i = 0; i < serieA.length; i++){
    //     var squadra = serieA[i];     //squadra attuale nel ciclo
    
    //     squadra["punti_fatti"] = numberGenerator(0, 100);
    //     squadra["falli_subiti"] = numberGenerator(100, 200);
    // }
    
    
    // function numberGenerator(min, max) {
    
    //     numero = Math.floor(Math.random() * (max - min + 1)) + min;
    //     return numero;
        
    // }
    // console.table(serieA)





// // Snack 3 
// // Scrivere una funzione che accetti tre argomenti: un array e due numeri (a più piccolo di b).
// // La funzione ritornerà un nuovo array con i valori che hanno la posizione (indice) compresa tra i due numeri specificati.
// // Usiamo i nuovi metodi degli array forEach() o filter().


// const numbers = ["1", "2", "3", "4", "5", "6"];
// const a = "3";
// const b =  "6";




// SNACK N.2
// // creo una funzione che accetti 3 argomenti!
// numbers.forEach((numbers, a, b) => {
//     numbers.push(numbers < a && numbers > b)
// });
// console.log(numbers)