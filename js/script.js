/*----- constants -----*/
const KEY = {
	'1': 'X',
	'-1': 'O',
	'null': ''
};

const COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

/*----- app's state (variables) -----*/
let turn, gameboard, winner;

/*----- cached element references -----*/
const messageEl = document.getElementById('message');
const squareEls = document.querySelectorAll('.square');

/*----- event listeners -----*/
document.getElementById('game-board').addEventListener('click', handleClick);

/*----- functions -----*/
// init();

// function init() {
	
// }

function handleClick(e) {
    console.log(e.target.dataset.index)
}