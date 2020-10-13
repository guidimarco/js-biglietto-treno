// -----
// DISTANCE

var distance;

// prompt
distance = Math.ceil(prompt("Inserisci la distanza (in km)"));
console.log("Distanza: " + distance + " km");

// innerHTML --> #distance
if (!isNaN(distance)) {
    document.getElementById("distance").innerHTML = distance + " km";
} else {
    document.getElementById("distance").innerHTML = "** Attenzione! Inserire una distanza corretta **";
}

// -----
// AGE

var age

// prompt
age = Math.floor(prompt("Quanti anni hai?"));
console.log("Età: " + age + " anni");

// innerHTML --> #age
if (!isNaN(age)) {
    document.getElementById("age").innerHTML = age + " anni";
} else {
    document.getElementById("age").innerHTML = "** Attenzione! Inserire un'età corretta **";
}

// -----
// DISCOUNT
var discount;

if(age < 18) {
    discount = 20;
    document.getElementById("discount").innerHTML = "Hai diritto ad uno sconto del " + discount + "%!";
} else if (age < 65) {
    discount = 0;
} else if(!isNaN(age)) {
    discount = 40;
    document.getElementById("discount").innerHTML = "Hai diritto ad uno sconto del " + discount + "%!";
} else {
    discount = undefined;
}

console.log("Sconto: " + discount + " %");

// -----
// CALCOLO PREZZO DEL BIGLIETTO

var pricePerKm = 0.21;
var price;

if(!isNaN(age) && !isNaN(distance)) {
    price = Math.ceil(distance * pricePerKm * (100 - discount) / 100);
    document.getElementById("price").innerHTML = price + " €";
} else {
    document.getElementById("price").innerHTML = "** Attenzione! Aggiornare la pagina ed inserire i valori correttamente **";
}

console.log("Prezzo: " + price + " €");
