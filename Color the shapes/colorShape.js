var toolsHidden = document.getElementsByClassName('tools-hidden');
var buttonNext = document.getElementsByClassName('button-next');
var hiddenBox = document.getElementsByClassName('hidden-box');
var circles = document.getElementsByClassName('circle');
var squares = document.getElementsByClassName('square');
var shapes = document.getElementsByClassName('shape');
var congratbuttons = document.getElementsByClassName("congratulation");
var color;
var paintCorrect = false;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
  
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
    let n = hiddenBox.length;
    console.log(n);
    buttonNext[0].style.display='none';
    toolsHidden[0].style.opacity=1;
    for(let i= 0; i < n; i++){
        console.log("painter ....");
        hiddenBox[i].style.opacity= 1;
    }
    console.log("finish");
};

console.log("start adding ...");

for(let i = 0; i < hiddenBox.length; i++){
    console.log("adding....");
    let hiddenbox = hiddenBox[i];
    console.log("add clickHandler");
    hiddenbox.addEventListener('click', function(){
        color = hiddenbox.getAttribute("color");
        console.log(hiddenbox.getAttribute("color"));
    });
}

for (let j = 0; j < shapes.length; j++) {
    let shape = shapes[j];
    var numberCorrect = 0;
    shape.addEventListener('click', function() {
        shape.style.background = color;
        if((shape.getAttribute("type") == "square" && color == "blue") || (shape.getAttribute("type") =="circle" && color=="red"))
        {
            numberCorrect++;
            console.log(numberCorrect);
        }
        
        if(numberCorrect === 2){
            let congrat = congratbuttons[0];
            congrat.style.display = "block";
        }
        console.log(numberCorrect);
    });  

}

var congratulationButton = document.getElementsByClassName('congrat-button');
congratulationButton[0].addEventListener('click',function(){
    var startButton = document.getElementById('start-play');
    var scene = document.getElementsByClassName('scene');
    let congrat = congratbuttons[0];
    congrat.style.display = "none";
    startButton.style.display="block";
    scene[0].style.filter= "blur(5px)";
    shapes[0].style.color = "white";
    shapes[1].style.display = 'none';
    shapes[2].style.display = 'block';
});

































/*
var circle = document.querySelector('.circle');
circle.addEventListener('click', function (){
    circle.style.display = 'none' ; 
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
