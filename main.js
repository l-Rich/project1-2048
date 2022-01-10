console.log('js: loaded')

const gameBoard = document.querySelector('.grid')
const score = document.querySelector('#score')
const results = document.querySelector('#results')
const width = 4
let boxAll = []



//Make the game board//
function makeBoard() {
    for (let i=0; i < width*width; i++ ) {
        box = document.createElement('div')
        box.innerText = 0
        gameBoard.appendChild(box)
        boxAll.push(box)
    }
    start()
    start()
}
makeBoard();

function start() {
    let randomNumber = Math.floor(Math.random() * boxAll.length)
    if  (boxAll[randomNumber].innerText == 0 ) {
    boxAll[randomNumber].innerText = 2
    }else{ start()
    }
}

// All the moves


function moveRight() {
    for (let i=0; i<16; i++){
        if (i % 4 === 0){
            let r1 = boxAll[i].innerText
            let r2 = boxAll[i+1].innerText
            let r3 = boxAll[i+2].innerText
            let r4 = boxAll[i+3].innerText
            let row= [parseInt(r1),parseInt(r2),parseInt(r3),parseInt(r4)]

            let filteredRow = row.filter(num => num)

            let missing = 4 - filteredRow.length
            let zeros = Array(missing).fill(0)
            let newRow = zeros.concat(filteredRow)

            boxAll[i].innerText = newRow[0]
            boxAll[i+1].innerText = newRow[1]
            boxAll[i+2].innerText = newRow[2]
            boxAll[i+3].innerText = newRow[3]
        }
    } checkWinCondition()
}

function moveLeft() {
    for (let i=0; i<16; i++){
        if (i % 4 === 0){
            let r1 = boxAll[i].innerText
            let r2 = boxAll[i+1].innerText
            let r3 = boxAll[i+2].innerText
            let r4 = boxAll[i+3].innerText
            let row= [parseInt(r1),parseInt(r2),parseInt(r3),parseInt(r4)]

            let filteredRow = row.filter(num => num)

            let missing = 4 - filteredRow.length
            let zeros = Array(missing).fill(0)
            let newRow = filteredRow.concat(zeros)

            boxAll[i].innerText = newRow[0]
            boxAll[i+1].innerText = newRow[1]
            boxAll[i+2].innerText = newRow[2]
            boxAll[i+3].innerText = newRow[3]
        }
    }checkWinCondition()
}

function moveUp() {
    for (let i=0; i<4; i++){
            let c1 = boxAll[i].innerText
            let c2 = boxAll[i+4].innerText
            let c3 = boxAll[i+8].innerText
            let c4 = boxAll[i+12].innerText
            let column= [parseInt(c1),parseInt(c2),parseInt(c3),parseInt(c4)]

            let filteredColumn = column.filter(num => num)

            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = filteredColumn.concat(zeros)

            boxAll[i].innerText = newColumn[0]
            boxAll[i+4].innerText = newColumn[1]
            boxAll[i+8].innerText = newColumn[2]
            boxAll[i+12].innerText = newColumn[3]
    }checkWinCondition()
}

 function moveDown() {
    for (let i=0; i<4; i++){
            let c1 = boxAll[i].innerText
            let c2 = boxAll[i+4].innerText
            let c3 = boxAll[i+8].innerText
            let c4 = boxAll[i+12].innerText
            let column= [parseInt(c1),parseInt(c2),parseInt(c3),parseInt(c4)]
    
            let filteredColumn = column.filter(num => num)
    
            let missing = 4 - filteredColumn.length
            let zeros = Array(missing).fill(0)
            let newColumn = zeros.concat(filteredColumn)
    
                boxAll[i].innerText = newColumn[0]
                boxAll[i+4].innerText = newColumn[1]
                boxAll[i+8].innerText = newColumn[2]
                boxAll[i+12].innerText = newColumn[3]
    }checkWinCondition()
 }



function mergeRight() {
    for (let i=0; i<15; i++){

        if (boxAll[i].innerText === boxAll[i+1].innerText){
            let combinedTotal = parseInt(boxAll[i].innerText) + parseInt(boxAll[i+1].innerText)
            boxAll[i].innerText = combinedTotal
            boxAll[i+1].innerText = 0
 
        }
    }
}checkWinCondition()
    
function mergeLeft() {
    for (let i=0; i<15; i++){
    
        if (boxAll[i+1].innerText === boxAll[i].innerText){
                let combinedTotal = parseInt(boxAll[i].innerText) + parseInt(boxAll[i+1].innerText)
                boxAll[i+1].innerText = combinedTotal
                boxAll[i].innerText = 0
        

            }
    }
}checkWinCondition()
    
    function mergeUp() {
         for (let i=0; i<12; i++){
        
            if (boxAll[i].innerText === boxAll[i+4].innerText){
                let combinedTotal = parseInt(boxAll[i].innerText) + parseInt(boxAll[i+4].innerText)
                boxAll[i].innerText = combinedTotal
                boxAll[i+4].innerText = 0
           
            }
    }
}

    function mergeDown() {
            for (let i=0; i<12; i++){
                
            if (boxAll[i].innerText === boxAll[i+4].innerText){
                let combinedTotal = parseInt(boxAll[i].innerText) + parseInt(boxAll[i+4].innerText)
                    boxAll[i].innerText = combinedTotal
                    boxAll[i+4].innerText = 0
        
            }
    }
}
    


function moves(moved) {

    if (moved.keyCode === 39) {
    moveRight()
    mergeRight()
    moveRight()
    start()     
} else if (moved.keyCode === 37) {
    moveLeft()
    mergeLeft()
    moveLeft()
    start()
} else if (moved.keyCode === 38) {
   moveUp()
   mergeUp()
   moveUp()
   start()
} else if (moved.keyCode === 40) {
   moveDown()
   mergeDown()
   moveDown()
   start()
    }
}
document.addEventListener('keyup', moves)

//Check for winner// 

function checkWinCondition () { 
    for (let i=0; i < boxAll.length; i++){
    if (boxAll[i].innerText == 8){
        results.innerText = "You reached 2048!"
        document.removeEventListener('keyup', moves)
    }
}
}

document.querySelector(".button").addEventListener('click', resetButton)
function resetButton() {
    return location.reload()
}