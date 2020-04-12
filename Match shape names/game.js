const soundCorrect = document.querySelector("#correct-sound");
const soundWrong = document.querySelector("#wrong-sound");
const backgroundMusic = document.querySelector("#bg-music");
backgroundMusic.play();
backgroundMusic.volume = 0.2;
backgroundMusic.loop = "true";
const progressBallsLeft = document.querySelectorAll(".progress-ball-left");
const progressBallsRight = document.querySelectorAll(".progress-ball-right");
for (let i = 0; i < progressBallsRight.length; i++) {
    progressBallsRight[i].style.display = "none";
}
let roundNumbers = 6;

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
    soundCorrect.play();
    toggleButton("triangle", "rectangle", 1, "off");
    moveCard1("triangle");
    checkRoundOne(isWrong);
});
document.getElementById("rectangleButton1").addEventListener("click", function () {
    soundWrong.play();
    isWrong = true;
    moveBall();
    roundNumbers++;
});
//Round 2 - the circle button is right, the other is wrong
document.getElementById("circleButton2").addEventListener("click", function () {
    soundCorrect.play();
    toggleButton("circle", "rectangle", 2, "off");
    moveCard2("circle");
    checkRoundTwo(isWrong);
});
document.getElementById("rectangleButton2").addEventListener("click", function () {
    soundWrong.play();
    isWrong = true;
    moveBall();
    roundNumbers++;
});
//Round 3 - the rectangle button is right, the other is wrong
document.getElementById("triangleButton3").addEventListener("click", function () {
    soundCorrect.play();
    toggleButton("triangle", "rectangle", 3, "off");
    moveCard1("rectangle");
    checkRoundThree(isWrong);
});
document.getElementById("rectangleButton3").addEventListener("click", function () {
    soundWrong.play();
    isWrong = true;
    moveBall();
    roundNumbers++;
});

//what happens each round is all here
function roundProcess(roundNumber, roundShape) {
    hideScreens();
    hideMovingCard();
    document.querySelector("#screen-" + roundNumber).style.animation = "appear 1s ease-in";
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
        roundNumbers--;
        isWin();
        moveBall();
        setTimeout(function () {
            roundTwo();
        }, 3000);
    } else {
        setTimeout(function () {
            roundOne();
        }, 3000);
    }
}

function roundTwo() {
    roundProcess(2, "circle");
}

//this function checks if player has won round 2 to get to round 3, otherwise return to round 2
function checkRoundTwo(isWrong) {
    if (!isWrong) {
        roundNumbers--;
        isWin();
        moveBall();
        setTimeout(function () {
            roundThree();
        }, 3000);
    } else {
        setTimeout(function () {
            roundThree();
        }, 3000);
    }
}

function roundThree() {
    roundProcess(3, "rectangle");
}

//this function checks if player has won round 3 to get to round 4, otherwise return to round 3
function checkRoundThree(isWrong) {
    if (!isWrong) {
        roundNumbers--;
        isWin();
        moveBall();
        setTimeout(function () {
            roundFour();
        }, 3000);
    } else {
        setTimeout(function () {
            roundFour();
        }, 3000);
    }
}

//return to round 1 -> the whole process will be restarted
function roundFour() {
    roundOne();
}

roundOne();

function moveCard1(cardName) {
    animatingCard(1, cardName);
}

function moveCard2(cardName) {
    animatingCard(2, cardName);
}

//The animation of the card when player clicks right is all here
function animatingCard(cardNumber, cardName) {
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
        switch (cardName) {
            case "triangle":
                document.getElementById("moving-card-" + cardNumber).src = "./image/card5.png";
                break;
            case "rectangle":
                document.getElementById("moving-card-" + cardNumber).src = "./image/card6.png";
                break;
            case "circle":
                document.getElementById("moving-card-" + cardNumber).src = "./image/card7.png";
                break;
        }
    }, 600);
}

//Check if player clicks right or wrong to move the process balls left or right
function moveBall() {
    console.log(roundNumbers);
    if (!isWrong) {
        progressBallsLeft[roundNumbers].style.display = "none";
        progressBallsRight[5 - roundNumbers].style.display = "block";
    } else {
        progressBallsLeft[roundNumbers].style.display = "block";
        progressBallsRight[5 - roundNumbers].style.display = "none";
    }
}

function isWin() {
    if (roundNumbers === 0) {
        setTimeout(function() {
            window.location.href = "../win screen/index.html";
        }, 3000);
    }
}