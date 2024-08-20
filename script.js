const btnEl = document.getElementById("roll-btn")
const diceEl = document.getElementById("dice")
const rollHistEl = document.getElementById("roll-hist")
let histList = []

function rollDice(){
    const rollResult = Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    histList.push(rollResult);
    updatehistlist()
}


function updatehistlist(){
    rollHistEl.innerHTML = "";
    for (let i = 0; i<histList.length; i++){
        const listItem = document.createElement("li")
        listItem.innerHTML = `Roll ${i  + 1}: <span>${getDiceFace(histList[i])}</span>`
        rollHistEl.appendChild(listItem)
    }
}




function getDiceFace(rollResult){
    switch(rollResult){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return ""
    }
}

btnEl.addEventListener("click", ()=> {
    diceEl.classList.add("roll-animation");
    
    setTimeout(()=>{
        diceEl.classList.remove("roll-animation");
        rollDice()
    }, 850)
});

