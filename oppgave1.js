// Hente ut paragraf som vi ønsker å sjekke.
const paragraphToCheck = document.getElementById("paragraphToCheck").innerHTML.trim()
// Legge paragrafen til en array for videre behandling 
const paragraphArray = paragraphToCheck.split(' ')

//Lage en variabel som kan holde på lengste ord
let longestWord = ""

//foEach går igjennom hver index i array. Her ser vi etter det lengste ordet, og legger den til i variabelen longestWord
paragraphArray.forEach(element => {
    if (element.length > longestWord.length) {
        element = element.replace('"', '')
        longestWord = element
    }
});
//Printer ut longestWord i paragraf med id "longest word"
document.getElementById("longest_word").innerHTML = longestWord