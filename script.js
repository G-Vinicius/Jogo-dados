const diceOne = document.getElementById("dice-one");
const diceTwo = document.getElementById("dice-two");
const restart = document.getElementById("restart");
const resultDiceOne = document.getElementById("result-dice-one");
const resultDiceTwo = document.getElementById("result-dice-two");
const roundResult = document.getElementById("round-result");
const table = document.getElementById("table");

let listOneResults = [];
let listTwoResults = [];
let resultsList = []


const dicesComparsion = (a, b) => {
    let result = ''
    if (a > b) {
        result = "Jogador 1 venceu";
    } else if (a < b) {
        result = "Jogador 2 venceu!";
    } else {
        result = "Empate";
    }

    resultsList[resultsList.length] = result;
    return result;
}

const toFillInTable = (anyTable, firstList, secondList, thirdList) => {
    
    for (let i = 0; i < listOneResults.length; i++) {
        let tableRow = document.createElement("tr");
        let itemText = document.createTextNode(firstList[i]);
        let tableData = document.createElement("td");
        tableData.appendChild(itemText);
        tableRow.appendChild(tableData);

        itemText = document.createTextNode(secondList[i]);
        tableData = document.createElement("td");
        tableData.appendChild(itemText);
        tableRow.appendChild(tableData);

        itemText = document.createTextNode(thirdList[i]);
        tableData = document.createElement("td");
        tableData.appendChild(itemText);
        tableRow.appendChild(tableData);

        anyTable.appendChild(tableRow)
    }
}

const disableDiceButtons = () => {
    document.querySelector('#dice-one').disabled = true;
    document.querySelector('#dice-two').disabled = true;
}

const handleDiceOneButton = () => {
    if ((listTwoResults.length === 10)) {
        disableDiceButtons();

        //this block prevents an extra useless dice roll
        let diceNumber = Math.floor(Math.random() * 6) + 1;
        listOneResults[listOneResults.length] = diceNumber;
        resultDiceOne.innerHTML = diceNumber;
        roundResult.innerHTML = dicesComparsion(resultDiceOne.innerHTML, resultDiceTwo.innerHTML);
        // 

        toFillInTable(table, listOneResults, listTwoResults, resultsList);
    } else {
        let diceNumber = Math.floor(Math.random() * 6) + 1;
        listOneResults[listOneResults.length] = diceNumber;
        resultDiceOne.innerHTML = diceNumber;

        document.querySelector('#dice-one').disabled = true;
        document.querySelector('#dice-two').disabled = false;
    }

    if (listOneResults.length === listTwoResults.length) {
        roundResult.innerHTML = dicesComparsion(resultDiceOne.innerHTML, resultDiceTwo.innerHTML);
    }
}

const handleDiceTwoButton = () => {
    if ((listOneResults.length === 10)) {
        disableDiceButtons();

        //this block prevents an extra useless dice roll
        let diceNumber = Math.floor(Math.random() * 6) + 1;
        listTwoResults[listTwoResults.length] = diceNumber;
        resultDiceTwo.innerHTML = diceNumber;
        roundResult.innerHTML = dicesComparsion(resultDiceOne.innerHTML, resultDiceTwo.innerHTML);
        //

        toFillInTable(table, listOneResults, listTwoResults, resultsList); 
    } else {
        let diceNumber = Math.floor(Math.random() * 6) + 1;
        listTwoResults[listTwoResults.length] = diceNumber;
        resultDiceTwo.innerHTML = diceNumber;

        document.querySelector('#dice-one').disabled = false;
        document.querySelector('#dice-two').disabled = true;
    }

    if (listOneResults.length === listTwoResults.length) {
        roundResult.innerHTML = dicesComparsion(resultDiceOne.innerHTML, resultDiceTwo.innerHTML);
    }
}


const handleRestartButton = () => {
    let aux = resultsList.length
    listOneResults = [];
    listTwoResults = [];
    resultsList = [];
    resultDiceOne.innerHTML = '';
    resultDiceTwo.innerHTML = '';
    roundResult.innerHTML = '';
    document.querySelector('#dice-one').disabled = false;
    document.querySelector('#dice-two').disabled = false;
    let cont = 1
    while (cont < aux + 1) {
    document.getElementById("table").deleteRow(cont);
  }
}


diceOne.onclick = handleDiceOneButton;
diceTwo.onclick = handleDiceTwoButton;
restart.onclick = handleRestartButton;