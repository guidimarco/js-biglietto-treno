// VARIABILI

var UserFirstName
var FirstNameParagraph

var UserLastName
var LastNameParagraph

var UserFavouriteColor
var FavouriteColorParagraph

var PasswordParagraph
var RandomNumber

// -----
// FIRST NAME

// prompt
var UserFirstName = prompt("Come ti chiami?");
console.log("Nome: " + UserFirstName);

// getElement paragraph
var FirstNameParagraph = document.getElementById("FirstName").innerHTML;
console.log("Contenuto del paragrafo \"FirstName\": " + FirstNameParagraph);

// riscrittura
document.getElementById("FirstName").innerHTML = FirstNameParagraph + UserFirstName + ".";

// -----
// LAST NAME

// prompt
var UserLastName = prompt("Qual'è il tuo cognome?");
console.log("Cognome: " + UserLastName);

// getElement paragraph
var LastNameParagraph = document.getElementById("LastName").innerHTML;
console.log("Contenuto del paragrafo \"LastName\": " + LastNameParagraph);

// riscrittura
document.getElementById("LastName").innerHTML = LastNameParagraph + UserLastName + ".";

// -----
// FAVOURITE COLOR

// prompt
var UserFavouriteColor = prompt("Qual'è il tuo colore preferito?");
console.log("Colore preferito: " + UserFavouriteColor);

// getElement paragraph
var FavouriteColorParagraph = document.getElementById("FavouriteColor").innerHTML;
console.log("Contenuto del paragrafo \"FavouriteColor\": " + FavouriteColorParagraph);

// riscrittura
document.getElementById("FavouriteColor").innerHTML = FavouriteColorParagraph + UserFavouriteColor + ".";

// -----
// PASSWORD E NUMBER

// getElement paragraph
var PasswordParagraph = document.getElementById("Password").innerHTML;
console.log("Contenuto del paragrafo \"Password\": " + PasswordParagraph);

// number
var RandomNumber = 20;

// riscrittura
document.getElementById("Password").innerHTML = PasswordParagraph + UserFirstName + UserLastName + UserFavouriteColor + RandomNumber;
