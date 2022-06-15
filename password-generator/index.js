const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const genPswEl = document.querySelector("#genPsw")
const boxOne = document.querySelector("#box1")
const boxTwo = document.querySelector("#box2")

genPswEl.addEventListener("click", ()=>{
    console.log("Text clicked")
    let pswOne = ""
    let pswTwo = ""
    for(let i = 0; i < 15; i++){
        let c1 = characters[Math.floor(Math.random() * characters.length)]
        let c2 = characters[Math.floor(Math.random() * characters.length)]
        pswOne += c1
        pswTwo += c2
    }
    boxOne.textContent = pswOne
    boxTwo.textContent = pswTwo
})
