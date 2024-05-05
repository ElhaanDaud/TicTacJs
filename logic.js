let playerText= document.getElementById('playerText')
let restartBtn = document.getElementById('retartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

console.log(boxes)

const O_Text="O"
const X_Text="X"

let currentPlayer = X_Text

let spaces = Array(9).fill(null)

console.log(spaces)
