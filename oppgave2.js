//Liste med brukere med alder.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let jack = { name: "Jack", age: 40 };
let kurt = { name: "Kurt", age: 18 };
let eva = { name: "Eva", age: 35 };

//La oss sette litt variabler.
let arr = [ pete, john, mary, jack, kurt, eva ];
let ageBtn = document.querySelector('#sortByAge');
let nameBtn = document.querySelector('#sortByName');
let nameList = document.querySelector('#nameList');


//Sorter liste etter alder
ageBtn.addEventListener('click', () => {

//Sorter etter alder
arr.sort(function(a, b){
    if(a.age < b.age) { return -1; }
    if(a.age > b.age) { return 1; }
    return 0;
});

//Test at output er grei i console
console.log(arr);
//Gjør om object til string, og pynt litt på den for syns skyld.
arrToString = JSON.stringify(arr)
arrToString = arrToString.replace(/{/g, "")
arrToString = arrToString.replace(/}/g, "")
arrToString = arrToString.replace(/"/g, "")
arrToString = arrToString.replace(/:/g, " : ")
arrToString = arrToString.replace(/\[/g, "")
arrToString = arrToString.replace(/\]/g, "")
arrToString = arrToString.replace(/,/g, "<br>")
arrToString = arrToString.replace(/name/g, "<br>Navn")
arrToString = arrToString.replace(/age/g, "<br>Alder")
nameList.innerHTML = arrToString
});

//Sorter liste etter navn
nameBtn.addEventListener('click', () => {

//Sorter etter navn
arr.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
});

//Test at output er grei i console
console.log(arr);
//Gjør om object til string, og pynt litt på den for syns skyld.
arrToString = JSON.stringify(arr)
arrToString = arrToString.replace(/{/g, "")
arrToString = arrToString.replace(/}/g, "")
arrToString = arrToString.replace(/"/g, "")
arrToString = arrToString.replace(/:/g, " : ")
arrToString = arrToString.replace(/\[/g, "")
arrToString = arrToString.replace(/\]/g, "")
arrToString = arrToString.replace(/,/g, "<br>")
arrToString = arrToString.replace(/name/g, "<br>Navn")
arrToString = arrToString.replace(/age/g, "<br>Alder")
nameList.innerHTML = arrToString
});
