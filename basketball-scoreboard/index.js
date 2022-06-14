let countHome = 0
let countAway = 0
const home = document.querySelector("#home")
const away = document.querySelector("#away")
const newGame = document.querySelector("#newgame-btn")
const homeHeader = document.querySelector("#home-h")
const guestHeader = document.querySelector("#guest-h")


//Add buttons implementation
function addOneH() {
    countHome += 1
    home.textContent = countHome
    colorChange()
}

function addTwoH() {
    countHome += 2
    home.textContent = countHome
    colorChange()
}

function addThreeH() {
    countHome += 3
    home.textContent = countHome
    colorChange()
}

function addOneG() {
    countAway += 1
    away.textContent = countAway
    colorChange()
}

function addTwoG() {
    countAway += 2
    away.textContent = countAway
    colorChange()
}

function addThreeG() {
    countAway += 3
    away.textContent = countAway
    colorChange()
}
//

//New game
newGame.addEventListener("click", () => {
    countAway = countHome = 0
    home.textContent = countHome
    away.textContent = countAway
    colorChange()
})
//

//Highlight the one who is leading
function colorChange(){
    if(countHome > countAway){
        homeHeader.setAttribute("style", "color: orange")
        guestHeader.setAttribute("style", "color: white")
    
    } else if(countAway > countHome){
        homeHeader.setAttribute("style", "color: white")
        guestHeader.setAttribute("style", "color: orange")
    } else{
        homeHeader.setAttribute("style", "color: white")
        guestHeader.setAttribute("style", "color: white")
    }
}
//
