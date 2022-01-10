console.log('js: loaded')

const gameBoard = document.querySelector('.grid')
const score = document.querySelector('#score')
const results = document.querySelector('#results')
const width = 4
let boxAll = []
let scoreNumber = 0



// const startNumber = 2
// let grid = [ 

//     ["","","",""],
//     ["","","",""],
//     ["","","",""],
//     ["","","",""] 
// ]

// console.log(grid)



// function startGame() {
//     let randomNum= Math.floor(Math.random() * gameBoardArray.length)
//     gameBoardArray.push(randomNum)
// }
// startGame()
// console.log(gameBoardArray)

// 
// let rowTwo = [parseInt(boxAll[4].innerText)] + [parseInt(boxAll[5].innerText)] + [parseInt(boxAll[6].innerText)] + [parseInt(boxAll[7].innerText)]
// let rowThree= [parseInt(boxAll[8].innerText)] + [parseInt(boxAll[9].innerText)] + [parseInt(boxAll[10].innerText)] + [parseInt(boxAll[11].innerText)]
// let rowFour = [parseInt(boxAll[12].innerText)] + [parseInt(boxAll[13].innerText)] + [parseInt(boxAll[14].innerText)] + [parseInt(boxAll[15].innerText)]
//create a start board - experiment 626 !!!!!WORKS!!!!!

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

// function testGamePlay() {
//     let row1 = [parseInt(boxAll[0].innerText)] + [parseInt(boxAll[1].innerText)] + [parseInt(boxAll[2].innerText)] + [parseInt(boxAll[3].innerText)]
//     if (boxAll[3] === " "){
//         boxAll[3].innerText = boxAll[0]

//     } console.log(row1)
// }
// testGamePlay()
// Start playing the game - WORKS!!!!!!





// All the moves


function moveRight() {
    for (let i=0; i<16; i++){
        if (i % 4 === 0){
            let totalOne = boxAll[i].innerText
            let totalTwo = boxAll[i+1].innerText
            let totalThree = boxAll[i+2].innerText
            let totalFour = boxAll[i+3].innerText
            let row= [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)]

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
            let totalOne = boxAll[i].innerText
            let totalTwo = boxAll[i+1].innerText
            let totalThree = boxAll[i+2].innerText
            let totalFour = boxAll[i+3].innerText
            let row= [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)]

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
            let totalOne = boxAll[i].innerText
            let totalTwo = boxAll[i+4].innerText
            let totalThree = boxAll[i+8].innerText
            let totalFour = boxAll[i+12].innerText
            let column= [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)]

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
                let totalOne = boxAll[i].innerText
                let totalTwo = boxAll[i+4].innerText
                let totalThree = boxAll[i+8].innerText
                let totalFour = boxAll[i+12].innerText
                let column= [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)]
    
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



function checkWinCondition () { 
    for (let i=0; i < boxAll.length; i++){
    if (boxAll[i].innerText == 8){
        results.innerText = "You reached 2048!"
        document.removeEventListener('keyup', moves)
    }
}}

document.querySelector(".button").addEventListener('click', resetButton)
function resetButton() {
    return location.reload()
}

// function mergeRight (){
//     for (let i=0; i<16; i++){
//     if (boxAll[3]=== boxAll[2]){
//         boxAll[3] = boxAll[3] * 2
//     }
//     }
// }
// moveRight()
// mergeRight()

// document.addEventListener('keyup', function (
//     keyBoardMoves (e) { 
// if (e.keyCode === 39){
//     moveRight()
//     mergeRight()
//     start()
// }

// }
// keyBoardMoves()

// function moveRight(arr,oldIndex,NewIndex) {
//     let r1 = [parseInt(boxAll[0].innerText),parseInt(boxAll[1].innerText),parseInt(boxAll[2].innerText),parseInt(boxAll[3].innerText)]
//     // for (let i=0; i < r1.length; i++){
//     console.log(r1)
//     let newR1 = r1.filter(num => num)
//     console.log(newR1)
//     let empty = 4 - newR1.length
//     let emptySpace = Array(empty)
//     console.log(emptySpace)
//     let newRow1 = emptySpace.concat(newR1)
//     console.log(newRow1)
//     r1.innerText = newRow1
//     // }
// }

//     // let rowTwo = [parseInt(boxAll[4].innerText)] + [parseInt(boxAll[5].innerText)] + [parseInt(boxAll[6].innerText)] + [parseInt(boxAll[7].innerText)]
//     // let rowThree= [parseInt(boxAll[8].innerText)] + [parseInt(boxAll[9].innerText)] + [parseInt(boxAll[10].innerText)] + [parseInt(boxAll[11].innerText)]
//     // let rowFour = [parseInt(boxAll[12].innerText)] + [parseInt(boxAll[13].innerText)] + [parseInt(boxAll[14].innerText)] + [parseInt(boxAll[15].innerText)]
    // let boxOne = boxAll[0].innerText
    // let boxTwo = boxAll[1].innerText
    // let boxThree = boxAll[2].innerText
    // let boxFour = boxAll[3].innerText
   
//     let newBoxThree = boxThree * 2
//     let newBoxFour = boxFour * 2
    
//     //Right Arrow//

    // if (direction.keyCode === 39){
        // if (boxFour === " ")
        // {boxFour.innerText = boxthree
        // }else if (boxThree=== " "){
        //     boxThree.innerText = boxTwo
        // }else if (boxTwo === " "){
        //     boxTwo.innerText = boxOne
        // }

//         if (boxFour === boxThree){
//             boxAll[3].innerText = boxFour * 2
//             boxAll[2].innerText = " "
//         }else if (boxThree === boxTwo){
//                 if (boxThree === " "){
//                     boxAll[2].innerText = boxThree * 2
//                 }else{ boxAll[1].innerText = boxThree * 2
//                 }
//             }
//             box[1].innerText = " "}
           
//         if (boxOne === boxTwo){
//                 boxAll[1].innerText = boxThree * 2
//                 box[0].innerText = " "}
//    }}
//   start()
// }
   

// switch (boxAll) {
//     case " ":
//         boxAll.style.background='rgb(255,255,255';
//         break;

// }






















// }







//switch case - google it 
// gameBox.forEach(item => { 
//     item.addEventListener("click", evt => evt.target.innerText = 2 )
// })

// const gameBoxes = 16
// const gameBox = document.querySelectorAll(".grid-item")/*  const startBoard = 2 random number

// const randomNumbers = ['2','4']

// moves key arrow (up down left right)
// tile either merges with like-tile or tops before previous tile
// new tile appears
// score = sum of tiles on the board

// game won condition 
// boardFull === true

// */




// var startBoard= [["2","2", " ", " "],[" ", " "," "," ",],[" "," "," "," ",],[" "," "," "," "]];


// document.getElementsByClassName("grid-items").innerText = 2
// this.addEventListener("keyup", function() {
//         document.getElementById("two").innerHTML = 2;
//     });

    // function startGame(gameGrid) {
    // var startIndex = gameGrid.length, temporaryValue, randomIndex;
    // while (0 !== startIndex) {
    //   randomIndex = Math.floor(Math.random() * startIndex);
    //   startIndex -= 1;
    //   temporaryValue = gameGrid[startIndex];
    //   gameGrid[startIndex] = gameGrid[randomIndex];
    //   gameGrid[randomIndex] = temporaryValue;
    // }
    // console.table(gameGrid);
    
    
// }
//   startGame(startBoard);
    // for (let i = 0; i<gameGrid.children.length; i++){
    // console.log('each space', gameGrid.children[i])
    // const cell = gameGrid.children[i]
    // console.log(cell)
    // cell.innerHTML = startBoard;
    // }
// document.getElementsByClassName("grid").innerHTML = startBoard;
 

//  document.write(startBo
// function startGame(){
// let startGame = { gameGrid.children[1]}
// document.body.addEventListener("keyup",function(evt){
//     console.log(evt)
// })
// }




//   var newText = startBoard
//   newText.appendChild(newText)


//   gameBox.forEach(item => {
//       item.push(startBoard)
//   })



// function keyEvent () {
//     let keyEvent = document.body.gameGrid.children[1]}
//     document.body.addEventListener('keyup', function (evt) {
//         console.log(evt)
//     })
  
// gameBox.forEach(box => {
//     box.push(startBoard)
// })

// function start() {
//     let space = document.querySelector(".grid");
//     }
//     document.body.innerText(2,2);
//         console.log(space)





// // console.log(gameGrid)
// let startBoard = 2
// function gameStart(){
//     const start = ["2"]
//     return start
// }
// }
// let gameGrid = ["", "", "", "","", "", "", "","", "", "", "","", "", "", "",]
// let move= ['2']


// }

//two dimmensional array- look into to hold an array

//pseudo code adding a number to a random postion
//create an event listener to the body to listen to a key press

// document.body.addEventListener("keyup", function(evt){
//     console.log(evt)
// })


//write a function that triggers when arrow is selected

// evt.(which number)

// const grid = [
//     ["", "","",""],
//     ["",2,"",""],
//     ["", "","",""],
//     [2, 2,"",""]
//   ]
//   // get all cell doms
//   // create a new array push each dom node from 0,3
//   // remaining rows
//   // IF i had a function only was concerned with 'merging' cells in a column
  
//   const c1 = [grid[0][0], grid[1][0], grid[2][0], grid[3][0]]
//   const c2 = [grid[0][1], grid[1][1], grid[2][1], grid[3][1]]
//   const c3 = [grid[0][0], grid[1][0], grid[2][0], grid[3][0]]
//   const c4 = [grid[0][0], grid[1][0], grid[2][0], grid[3][0]]
  
//   function shiftUp (arr){
//     // console.log(c1)
//     let run = true
//     for(let i =0; i<3;i++){
//       arr.forEach((num,idx, array) => {
//         console.log(idx, array)
//         if(num === ""){ 
//           if(arr[idx+1]){
//             let neighbor = arr[idx+1]
//             arr[idx+1] = num
//             arr[idx] = neighbor
//           }
//         }
//       })
//     }  
//   }
  
//   shiftUp(c1)
//   console.log('second column')
//   // shiftUp(c2)
  
//   function mergeNeighbors(){
//     console.log(c1)
    
//   }
  
//   mergeNeighbors(c1)