
hideScreens();
function hideScreens() {
    document.querySelector("#screen-1").style.display = "none";
    document.querySelector("#screen-2").style.display = "none";
    document.querySelector("#screen-3").style.display = "none";
}

function hideMovingCard() {
    document.querySelector("#container-card-1").style.display = "none";
    document.querySelector("#container-card-2").style.display = "none";
}

//Make the button click or unclickable, avoid multiple clicking at a time
function toggleButton(shapeName1, shapeName2, round, status) {
    if (status === "off") {
        document.getElementById(shapeName1 + "Button" + round).style.display = "none";
        document.getElementById(shapeName2 + "Button" + round).style.display = "none";
    } else {
        document.getElementById(shapeName1 + "Button" + round).style.display = "block";
        document.getElementById(shapeName2 + "Button" + round).style.display = "block";
    }
}

//this property checks if player has clicked wrong or not
let isWrong = false;

//assign result to each button each round
//Round 1 - the triangle button is right, the other is wrong
document.getElementById("triangleButton1").addEventListener("click", function () {
    toggleButton("triangle", "rectangle", 1, "off");
    moveCard1();
    checkRoundOne(isWrong);
});
document.getElementById("rectangleButton1").addEventListener("click", function () {
    isWrong = true;
});
//Round 2 - the circle button is right, the other is wrong
document.getElementById("circleButton2").addEventListener("click", function () {
    toggleButton("circle", "rectangle", 2, "off");
    moveCard2();
    checkRoundTwo(isWrong);
});
document.getElementById("rectangleButton2").addEventListener("click", function () {
    isWrong = true;
});
//Round 3 - the rectangle button is right, the other is wrong
document.getElementById("triangleButton3").addEventListener("click", function () {
    toggleButton("triangle", "rectangle", 3, "off");
    moveCard1();
    checkRoundThree(isWrong);
});
document.getElementById("rectangleButton3").addEventListener("click", function () {
    isWrong = true;
});

//what happens each round is all here
function roundProcess(roundNumber, roundShape) {
    hideScreens();
    hideMovingCard();
    if (roundNumber === 1 || roundNumber === 3) {
        toggleButton("triangle", "rectangle", roundNumber,"on");
    } else {
        toggleButton("circle", "rectangle", roundNumber, "on");
    }
    isWrong = false;
    document.querySelector("#screen-" + roundNumber).style.display = "block";

    const randomImage = Math.floor(Math.random() * 10) + 1;
    const shape = document.querySelector("#" + roundShape);
    shape.src = "./image/" + roundShape + randomImage + ".png";
}

function roundOne() {
    roundProcess(1, "triangle");
}

//this function checks if player has won round 1 to get to round 2, otherwise return to round 1
function checkRoundOne(isWrong) {
    if (!isWrong) {
        moveBall();
        setTimeout(function () {
            roundTwo();
        }, 3000);
    } else {
        roundOne();
    }
}

function roundTwo() {
    roundProcess(2, "circle");
}

//this function checks if player has won round 2 to get to round 3, otherwise return to round 2
function checkRoundTwo(isWrong) {
    if (!isWrong) {
        setTimeout(function () {
            roundThree();
        }, 3000);
    } else {
        roundTwo();
    }
}

function roundThree() {
    roundProcess(3, "rectangle");
}

//this function checks if player has won round 3 to get to round 4, otherwise return to round 3
function checkRoundThree(isWrong) {
    if (!isWrong) {
        setTimeout(function () {
            roundFour();
        }, 3000);
    } else roundThree();
}

//return to round 1 -> the whole process will be restarted
function roundFour() {
    roundOne();
}

roundOne();

function moveCard1() {
    animatingCard(1);
}

function moveCard2() {
    animatingCard(2);
}

//The animation of the card when player clicks right is all here
function animatingCard(cardNumber) {
    document.getElementById("moving-card-" + cardNumber).src = "./image/card2.png";
    document.querySelector("#container-card-" + cardNumber).style.display = "block";
    let element = document.querySelector("#animating-card-" + cardNumber);
    let position = 0;
    let id = setInterval(frame, 2);
    function frame() {
        if (position === 180) {
            clearInterval(id);
        } else {
            position++;
            element.style.right = position * 2 + "px";
            if (cardNumber === 1) element.style.top = position + "px";
        }
    }
    setTimeout(function () {
        document.getElementById("moving-card-" + cardNumber).src = "./image/card3.png";
    }, 600);
}


function moveBall() {
    let element = document.querySelector("#ball6");
    let position = 150;
    let id = setInterval(frame, 1);
    function frame() {
        if (position === 430) {
            clearInterval(id);
        } else {
            position++;
            element.style.left = position + "px";
        }
    }
}