const listShapes = document.querySelectorAll('.shapes');
const targets = document.querySelectorAll('.targets');
const healthBar = document.querySelectorAll('.health');
const progressBalls = document.querySelectorAll('.progress-ball');

const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
const screen3 = document.querySelector('#screen3');

// close a screen and render another screen
function endScreen() {
	if (targets[0].isSleeping && targets[1].isSleeping) {
		screen1.style.animation = `fadeScreen 3s ease-in`;
		progressBalls[0].style.float = 'right';
		setTimeout(function() {
			screen1.style.display = 'none';
			screen2.style.display = 'block';
			screen2.style.animation = `appear 2s ease-in`;
		}, 3000);
		resetHeathBar();
	}
	if (targets[2].isSleeping) {
		screen2.style.animation = `fadeScreen 3s ease-in`;
		progressBalls[1].style.float = 'right';
		setTimeout(function() {
			screen2.style.display = 'none';
			screen3.style.display = 'block';
			screen3.style.animation = `appear 2s ease-in`;
		}, 3000);
		resetHeathBar();
	}
	if (targets[3].isSleeping && targets[4].isSleeping) {
		progressBalls[2].style.float = 'right';
		setTimeout(function() {
			window.location.href = '../win screen/winScreen.html';
		}, 3000);
	}
}

var health = 3;

// call when player do something wrong
function loseHeath() {
	health -= 1;
	let healthLose = healthBar[2 - health];
	healthLose.style.backgroundImage = "url('./image/healthlose.png')";
	if (health === 0) {
		setTimeout(function() {
			window.location.href = '../lose screen/loseScreen.html';
		}, 1000);
	}
}

// call when player finish a part of game
function resetHeathBar() {
	health = 3;
	for (let healthIcon of healthBar) {
		healthIcon.style.backgroundImage = "url('./image/health.png')";
	}
}

let draggedShape = null;

// close the mouth of elephant at here, a target is a elephant
function closeMouth(target) {
	let activeTarget = target.children[0];
	let mouth = activeTarget.children[1];
	mouth.style.display = 'none';
}

// open the elephant's mouth
function openMouth(target) {
	let activeTarget = target.children[0];
	let mouth = activeTarget.children[1];
	mouth.style.display = 'block';
}

// react of elephant when player feed it wrong shape
function badReact(target) {
	let activeTarget = target.children[0];
	let redTarget = target.children[1];
	activeTarget.style.display = 'none';
	redTarget.style.display = 'block';
	setTimeout(function() {
		activeTarget.style.display = 'block';
		redTarget.style.display = 'none';
	}, 1500);
}

// when the stomach of elephant is full
function sleep(target) {
	let activeTarget = target.children[0];
	let sleepingTarget = target.children[2];
	activeTarget.style.display = 'none';
	sleepingTarget.style.display = 'block';
}

function initShape() {
	const listShapes = document.querySelectorAll('.shapes')
	for (let i = 0; i < listShapes.length; i++) {
		const shape = listShapes[i];
		shape.isDisappear = false;
	
		// add event when player start dragging a shape, the shape will disappear
		shape.addEventListener('dragstart', function() {
			draggedShape = shape;
			setTimeout(function() {
				shape.style.display = 'none';
			}, 0);
		});
	
		// add event when player stop dragging
		shape.addEventListener('dragend', function() {
			setTimeout(function() {
				if (shape.isDisappear) {
					draggedShape.style.display = 'none';
				} else {
					draggedShape.style.display = 'block';
				}
			}, 0);
		});
	}
}

function initTarget() {
	const targets = document.querySelectorAll('.targets');
	for (let j = 0; j < targets.length; j++) {
		const target = targets[j];
		target.blanksOfstomach = 4;
		target.isSleeping = false;
	
		// add event when player drag shape over the elepant
		target.addEventListener('dragover', function(e) {
			e.preventDefault();
			openMouth(target);
		});
	
		// add event when player draggener shape
		target.addEventListener('draggener', function(e) {
			e.preventDefault();
			closeMouth(target);
		});
	
		// add event when player drag the shape leave the elephant
		target.addEventListener('dragleave', function(e) {
			closeMouth(target);
		});
	
		// add event when player drop the shape
		target.addEventListener('drop', function(e) {
			e.preventDefault();
			e.stopPropagation();
			if (target.blanksOfstomach !== 0) {
				if (draggedShape.getAttribute('type') === target.getAttribute('target')) {
					draggedShape.isDisappear = true;
					target.blanksOfstomach--;
					if (target.blanksOfstomach === 0) {
						target.isSleeping = true;
						sleep(target);
						setTimeout(endScreen, 3);
					}
				} else {
					badReact(target);
					loseHeath();
					draggedShape.isDisappear = false;
				}
				closeMouth(target);
			}
		});
	}
}

initShape();
initTarget();

module.exports = {
	endScreen,
	openMouth,
	closeMouth,
	loseHeath,
	badReact,
	resetHeathBar
};
