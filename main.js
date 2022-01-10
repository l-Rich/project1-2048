console.log('js: loaded')

const gameBoard = document.querySelector('.grid')
const width = 4
let boxAll = []

//create a board - experiment 626 !!!!!WORKS!!!!!

function makeBoard() {
    for (let i=0; i < width*width; i++ ) {
        box = document.createElement('div')
        box.innerHTML = 0
        gameBoard.appendChild(box)
        boxAll.push(box)
    }
}
makeBoard();



















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

// const gameBoard = [ 

//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0],
//     [0,0,0,0] 
// ]


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

// gameBox.forEach(item => { 
//     item.addEventListener("click", evt => evt.target.innerText = 2 )
// })

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

