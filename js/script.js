/*----- constants -----*/
// Players
const KEY = {
	'1': 'X',
	'-1': 'O',
	'null': ''
};

// Winning combinations
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
document.getElementById('game-board')
	.addEventListener('click', handleClick);
document.getElementById('reset')
	.addEventListener('click', init);
// document.getElementById('first')
// 	.addEventListener('click', whosFirst);

/*----- functions -----*/
init();

function init() {
	turn = 1;
	gameboard = new Array(9)
		.fill(null);
	winner = false;
	render();
}

function handleClick(e) {
	let selectedIndex = e.target.dataset.index;
	if (winner || gameboard[selectedIndex]) return;
	gameboard[selectedIndex] = turn;
	turn *= -1;
	winner = checkWinner();
	render();
}

function render() {
	messageEl.innerHTML = "<span id=" + '"' + "user" + '"' + "></span>'s Turn"
	messageEl.style.color = '#ab20fd';
	// Draw the game board
	gameboard.forEach(function(element, index) {
		squareEls[index].textContent = KEY[element];
		squareEls[index].style.color = (KEY[element] === 'X') ? '#00b4fb' :
			'#FF073A';
		message();
	});
}

function checkWinner() {
	for (let i = 0; i < COMBOS.length; i++) {
		if (Math.abs(gameboard[COMBOS[i][0]] + gameboard[COMBOS[i][1]] +
				gameboard[COMBOS[i][2]]) === 3) return gameboard[COMBOS[i][0]];
	}
	if (gameboard.includes(null)) return false;
	return 'T';
}

function message() {
	const messageColor = document.getElementById('user');
	if (!winner) {
		if (turn === 1) {
			messageColor.textContent = 'X';
			messageColor.style.color = '#00b4fb';
		}
        else {
			messageColor.textContent = 'O';
			messageColor.style.color = '#FF073A';
		}
	}
	else if (winner === 'T') {
		messageEl.textContent = "Cat's Game!";
		messageEl.style.color = '#faed27';
	}
	else {
		messageEl.textContent = `${KEY[winner]} is the WINNER!`;
		if (winner === 1) messageEl.style.color = '#00b4fb';
		else messageEl.style.color = '#FF073A';
	}
}

// function whosFirst(e) {
// 	let selectedBtn = e.target.textContent;
//     if (e.target.tagName !== 'BUTTON') return;
// 	if (selectedBtn === 'O') {
// 		KEY['1'] = 'O';
//      KEY['-1'] = 'X';
// 	}
// 	else {
// 		KEY['1'] = 'X';
//      KEY['-1'] = 'O';
// 	}
// }
