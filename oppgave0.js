// Oppgave 1
let removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click', () => {
    document.getElementById("remove").innerHTML = "";
});

// Oppgave 2
let changeBtn = document.querySelector('#change-btn');
changeBtn.addEventListener('click', () => {
    document.getElementById("change").innerHTML = "Dette er en valgfri tekst. 42.";
});
// Oppgave 3
let changeInput = document.querySelector('#input');
changeInput.addEventListener('change', () => {
    let e = changeInput.value;
    document.getElementById("input-text").innerHTML = e;
});
// Oppgave 4
const myList = ["item one", "item two", "item three"];
const listItems = () => {
    myList.forEach(element => {
        document.getElementById("ul").innerHTML += `<li>${element}</li>`
    });}
let writeListBtn = document.querySelector("#write-list");
writeListBtn.addEventListener('click', listItems);

// Oppgave 5
let htmlSelect = document.getElementById("select");
htmlSelect.addEventListener('change', () => {
    optionSelected = htmlSelect.value
    console.log(optionSelected)
});

let createTxtBtn = document.getElementById('create');
createTxtBtn.addEventListener('click', () => {
    // Hente ut hva som er markert i select menyen
    htmlSelect = document.getElementById("select").value;

    //hente ut tekst
    let textField = document.getElementById('text').value;

    let textToWrite = document.getElementById('placeholder');
    textToWrite.innerHTML += `<${htmlSelect}>${textField}</${htmlSelect}>`;
});
// Oppgave 6
let listRemoveBtn = document.getElementById("remove-li");
listRemoveBtn.addEventListener('click', () => {
    let listRemove = document.querySelector('#list');
    listRemove.removeChild(listRemove.childNodes[0]);
});
// Oppgave 7
let counter = 0
let nameText = document.getElementById("name");
nameText.addEventListener('keypress', () =>{
    counter +=1;
    if (counter === 4) {
        orderBtn = document.getElementById('order');
        orderBtn.disabled = true;
    };
});


// Oppgave 8
let classList = document.querySelector('.children');
let len = classList.children.length;
let colorBtn = document.getElementById("color");
colorBtn.addEventListener('click', () => {
    for (let i = 0; i < len; i++) {
        if (i%2 === 0){
        classList.children[i].style.borderColor='red';
        classList.children[i].style.borderStyle='solid';
        } else {
            classList.children[i].style.borderColor='blue';
            classList.children[i].style.borderStyle='solid';
        }
        };
})