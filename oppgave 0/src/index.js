// Oppgave 1
removeBtn = document.querySelector('#remove-btn');
removeBtn.addEventListener('click', () => {
    document.getElementById("remove").innerHTML = "";
});

// Oppgave 2
changeBtn = document.querySelector('#change-btn');
changeBtn.addEventListener('click', () => {
    document.getElementById("change").innerHTML = "Dette er en valgfri tekst. 42.";
});
// Oppgave 3
changeInput = document.querySelector('#input');
changeInput.addEventListener('change', () => {
    e = changeInput.value;
    document.getElementById("input-text").innerHTML = e;
});
// Oppgave 4
const myList = ["item one", "item two", "item three"];
const listItems = () => {
    myList.forEach(element => {
        document.getElementById("ul").innerHTML += `<li>${element}</li>`
    });}
writeListBtn = document.querySelector("#write-list");
writeListBtn.addEventListener('click', listItems);

// Oppgave 5
htmlSelect = document.getElementById("select");
htmlSelect.addEventListener('change', () => {
    optionSelected = htmlSelect.value
    console.log(optionSelected)
});

createTxtBtn = document.getElementById('create');
createTxtBtn.addEventListener('click', () => {
    // Hente ut hva som er markert i select menyen
    htmlSelect = document.getElementById("select").value;

    //hente ut tekst
    textField = document.getElementById('text').value;

    textToWrite = document.getElementById('placeholder');
    textToWrite.innerHTML += `<${htmlSelect}>${textField}</${htmlSelect}>`;
});
// Oppgave 6
listRemoveBtn = document.getElementById("remove-li");
listRemoveBtn.addEventListener('click', () => {
    listRemove = document.querySelector('#list');
    listRemove.removeChild(listRemove.childNodes[0]);
});
// Oppgave 7
let counter = 0
nameText = document.getElementById("name");
nameText.addEventListener('keypress', () =>{
    counter +=1;
    console.log(counter);
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
        console.log("i for loop");
        if (i%2 === 0){
        classList.children[i].style.borderColor='red';
        classList.children[i].style.borderStyle='solid';
        } else {
            classList.children[i].style.borderColor='blue';
            classList.children[i].style.borderStyle='solid';
        }
        };
})