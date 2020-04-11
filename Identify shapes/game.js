const listShapes = document.querySelectorAll('.shapes');
const targets = document.querySelectorAll('.targets');
const healthBar = document.querySelectorAll('.health');
const progressBalls = document.querySelectorAll('.progress-ball');

var health = 3;

function loseHeath() {
    health -= 1;
    let healthLose = healthBar[2 - health];
    healthLose.style.backgroundImage = "url('./image/healthlose.png')";
}

let draggedShape = null;

function closeMouth(target) {
    let activeTarget = target.children[0];
    let mouth = activeTarget.children[1];
    mouth.style.display = 'none';
}

function openMouth(target) {
    let activeTarget = target.children[0];
    let mouth = activeTarget.children[1];
    mouth.style.display = 'block';
}

function badReact(target) {
    let activeTarget = target.children[0];
    let redTarget = target.children[1];
    activeTarget.style.display = 'none';
    redTarget.style.display = 'block';
    setTimeout(function() {
        activeTarget.style.display = 'block';
        redTarget.style.display = 'none';
    }, 1500)
}

function sleep(target) {
    let activeTarget = target.children[0];
    let sleepingTarget = target.children[2];
    activeTarget.style.display = 'none';
    sleepingTarget.style.display = 'block';
}

for (let i = 0; i < listShapes.length; i++) {
    const shape = listShapes[i];
    shape.isDisappear = false;
    
    shape.addEventListener('dragstart', function () {
        console.log('dragged');
        draggedShape = shape;
        setTimeout(function() {
            shape.style.display = 'none';
        }, 0);
        
    });

    shape.addEventListener('dragend', function () {
        console.log('dragend');
        setTimeout(function() {
            console.log(shape.getAttribute('disappear'));
            if (shape.isDisappear) {
                draggedShape.style.display = 'none'; 
            }
            else {
                draggedShape.style.display = 'block';
            }
        }, 0);   
    });
}

for (let j = 0; j < targets.length; j ++) {
    const target = targets[j];
    target.blanksOfstomach = 4;
    target.isSleeping = false;

    target.addEventListener('dragover', function(e) {
        e.preventDefault();
        //this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
        openMouth(target);
    });

    target.addEventListener('draggener', function(e) {
        e.preventDefault();
        //this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        closeMouth(target);
    });

    target.addEventListener('dragleave', function(e) {
        //this.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        closeMouth(target);
    })

    target.addEventListener('drop', function (e) {
        if (target.blanksOfstomach !== 0) {
            if (draggedShape.getAttribute("type") === target.getAttribute("target")) {
                draggedShape.isDisappear = true;
                target.blanksOfstomach--;
                if (target.blanksOfstomach === 0) {
                    target.isSleeping = true;
                    sleep(target);
                    setTimeout(endScreen, 3);
                }
            }
            else {
                badReact(target);
                loseHeath();
                draggedShape.isDisappear = false;
            }
            closeMouth(target);
            console.log(target.id);
        }
    });
}

const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
const screen3 = document.querySelector('#screen3');

function endScreen() {
    if (targets[0].isSleeping && targets[1].isSleeping) {
        screen1.style.animation = `fadeScreen 3s ease-in`;
        progressBalls[0].style.float = 'right';
        setTimeout(function() {
            screen1.style.display = 'none';
            screen2.style.display = 'block';
            screen2.style.animation = `appear 2s ease-in`;
        }, 3000);
    }
    if (targets[2].isSleeping) {
        screen2.style.animation = `fadeScreen 3s ease-in`;
        progressBalls[1].style.float = 'right';
        setTimeout(function() {
            screen2.style.display = 'none';
            screen3.style.display = 'block';
            screen3.style.animation = `appear 2s ease-in`;
        }, 3000);
    }
    if (targets[3].isSleeping && targets[4].isSleeping) {
        progressBalls[2].style.float = 'right';
        setTimeout(function() {
            window.location.href = "../win screen/index.html";
        }, 3000);
    }
}

