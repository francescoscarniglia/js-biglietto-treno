// limiti di età per stabilire la comparazione
var maggiorenne = 17;
var overSixteen = 65;

// 1° step quanti km dovrà percorrere l'utente?
var kmUtente = parseInt(prompt('Inserisci i km che dovrai percorrere'));
console.log('Percorrerai km: ', kmUtente);
var costoBiglietto = 0.21;
var totaleCosto = costoBiglietto * kmUtente;

// 2° step quanti anni ha l'utente?
var annoUtente = parseInt(prompt('Inserisci il tuo anno di nascita'));
var dataAttuale = new Date();
var anniUtente = dataAttuale.getFullYear() - annoUtente;
console.log('I tuoi anni sono: ', anniUtente);

document.getElementById('km').innerHTML = kmUtente;
document.getElementById('eta').innerHTML = anniUtente;
document.getElementById('prezzo-pieno').innerHTML = parseInt(totaleCosto.toFixed(2)) + '€';

// 3° step che prezzo avrà il biglietto?
// il prezzo del biglietto è definito in base ai km (0.21 al km), ma
// va applicato  uno sconto del 20% per i minori anni 18 e
// uno sconto del 40% per over 65
// 4° step mostrare a schermo il prezzo del biglietto ( a detereminate condizioni)

if(anniUtente < maggiorenne) {
  console.log('Prezzo Pieno:', totaleCosto + "€");
  var costoMinorenne = totaleCosto * 20 / 100;
  console.log('Riduzione del 20%: ', parseInt(costoMinorenne.toFixed(2)) + "€");
  document.getElementById('sconto').innerHTML = parseInt(costoMinorenne * 10)  + "€ " + '(20%)';
  var totaleMinorenne = totaleCosto - costoMinorenne;
  document.getElementById('name').innerHTML = parseInt(totaleMinorenne.toFixed(2)) + "€ ";
  console.log('Prezzo scontato: ', totaleCosto - costoMinorenne + "€ ");
} else if(anniUtente > overSixteen) {
  console.log('Prezzo Pieno:', totaleCosto + "€ ");
  var costoOver65 = totaleCosto * 40 / 100;
  console.log('Riduzione del 40%: ', costoOver65 + '€ ');
  document.getElementById('sconto').innerHTML = parseInt(costoOver65.toFixed(2)) + "€ " + '(40%)';
  var totaleOver65 = totaleCosto - costoOver65;
  console.log('Prezzo scontato: ', totaleCosto - costoOver65 + "€");
  document.getElementById('name').innerHTML = parseInt(totaleOver65.toFixed(2)) + "€ ";
} else {
  document.getElementById('name').innerHTML = parseInt(totaleCosto.toFixed(2)) + "€ ";
  document.getElementById('sconto').innerHTML = 'prezzo pieno';
 console.log(parseInt(totaleCosto * 10 ), "€ ");
}
