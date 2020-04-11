var toolsHidden = document.getElementsByClassName('tools-hidden');
var buttonNext = document.getElementsByClassName('button-next');
var hiddenBox = document.getElementsByClassName('hidden-box');
var circle = document.getElementsByClassName('circle');
var square = document.getElementsByClassName('square');

function start(){
    var startButton = document.getElementById('start-play');
    var scene = document.getElementsByClassName('scene');
    startButton.style.display="none";
    scene[0].style.filter="none";
};


function onmouseOver(){
    this.opacity= 0.5;
};

function painterAppear(){
    var n = hiddenBox.length;
    buttonNext[0].style.display='none';
    toolsHidden[0].style.opacity=1;
    for(var i= 0; i < n; i++){
        hiddenBox[i].style.opacity= 1;
    }
};

function changeColor( color){
    this.document.style.background = color;
}

function eraserColor(){
    circle[0].onclick = changeColor('white');
    square[0].onclick = changeColor('white');
}

function paintCircle(){
    circle[0].onclick = changeColor('red');
    square[0].onclick = changeColor('red');
};

function paintSquare(){
    circle[0].onclick = changeColor('yellow');
    square[0].onclick = changeColor('yellow');
}
// hướng dẫn painter circle 

// thực hành square
function paintShape(){
    var n = hiddenBox.length;
    for( var i = 0; i < n ; i++){
        if(hiddenBox[i].type === 'circle'){
            hiddenBox[i].style.cursor='pointer';
            hiddenBox[i].onclick = paintCircle();
        }
        if(hiddenBox[i].type === 'square'){
            hiddenBox[i].style.cursor='pointer';
            hiddenBox[i].onclick = paintSquare();
        }
        if(hiddenBox[i].type === 'eraser'){
            hiddenBox[i].style.cursor='pointer';
            hiddenBox[i].onclick = eraserColor();
        }
    }
}

buttonNext.onclick = paintShape;
// hướng dẫn eraser 





















/*
var circle = document.querySelector('.circle');
circle.addEventListener('click', function (){
    this.style.display = 'none' ; 
});

var square = document.querySelector('.square');
*/
/*
function drawCircle(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
    ctx.stroke();
    ctx.closePath();
}

function drawTraingle(){
    var width = 125;  // Triangle Width
    var height = 105; // Triangle Height
    var padding = 20;

    // Draw a path
    context.beginPath();
    context.moveTo(padding + width/2, padding);        // Top Corner
    context.lineTo(padding + width, height + padding); // Bottom Right
    context.lineTo(padding, height + padding);         // Bottom Left
    context.closePath();
    context.stroke();

    // Fill the path
  //  context.fillStyle = "#ffc821";
  //  context.fill();
}

function drawRectangle(){
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.fillRect(0,0,150,75);
    ctx.stroke();
    ctx.closePath();
}


*/
