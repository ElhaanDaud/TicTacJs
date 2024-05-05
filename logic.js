let playerText= document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

console.log(boxes)

const O_Text="O"
const X_Text="X"

let currentPlayer = X_Text

let spaces = Array(9).fill(null)

console.log(spaces)

const startGame = () => {
    boxes.forEach(box=>box.addEventListener('click',boxClicked))
}

function boxClicked(e){
    const id = e.target.id

    if(!spaces[id]){
        spaces[id]== currentPlayer
        e.target.innerText=currentPlayer

        currentPlayer= currentPlayer ==X_Text ? O_Text : X_Text /* if statement hai ye */

    }

}

restartBtn.addEventListener('click',restart)

function restart(){
    spaces.fill(null)
    boxes.forEach(box=>{
        box.innerText=''
    })
    currentPlayer= X_Text
}

startGame()