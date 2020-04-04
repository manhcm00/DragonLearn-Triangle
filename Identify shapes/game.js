const listShapes = document.querySelectorAll('.shapes');
const targets = document.querySelectorAll('.targets');
const healthBar = document.querySelectorAll('.health');

console.log(healthBar);

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
                    sleep(target);
                }
            }
            else {
                badReact(target);
                loseHeath();
                draggedShape.isDisappear = false;
            }
            closeMouth(target);
        }
    });
}
