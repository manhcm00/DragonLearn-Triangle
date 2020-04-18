var toolsHidden = document.getElementsByClassName('tools-hidden');
var buttonNext = document.getElementsByClassName('button-next');
var hiddenBox = document.getElementsByClassName('hidden-box');
var shapes = document.getElementsByClassName('shape');
var congratbuttons = document.getElementsByClassName("congratulation");
var congratulationButton = document.getElementsByClassName('congrat-button');
var buttonDone = document.getElementsByClassName('button-done');
var color;
var paintCorrect = false;
var appear1 = document.getElementsByClassName('appear1');
var appear2 = document.getElementsByClassName('appear2');
var appear3 = document.getElementsByClassName('appear3');
var appear4 = document.getElementsByClassName('appear4');
var appearX = 1;
var circleColors=['red','brown','white','violet'];
var squareColors=['blue','black','green','white'];
var traingleColors=['white','yellow','orange','pink'];
var numberShapePainterCorrect=[2,2,4,18]
var startButton = document.getElementById('start-play');
var scene = document.getElementsByClassName('scene');

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

//AddEventListener cho hiddenBox
for(let i = 0; i < hiddenBox.length; i++){
    console.log("adding....");
    let hiddenbox = hiddenBox[i];
    console.log("add clickHandler");
    hiddenbox.addEventListener('click', function(){
        color = hiddenbox.getAttribute("color");
        console.log(hiddenbox.getAttribute("color"));
    });
}

// AddEventListener cho shape
for (let j = 0; j < shapes.length; j++) {
    let shape = shapes[j];
    var numberCorrect = 0;
    shape.addEventListener('click', function() {
        let buttondone = buttonDone[0];

        if(shape.getAttribute("type") === "traingle" ){
            shape.style.color = color;
        }
        else{
            shape.style.background = color;
        }
        
        if((shape.getAttribute("type") == "square" && color == "blue")|| (shape.getAttribute("type") =="circle" && color=="red"))
        {
            numberCorrect++;
            console.log(numberCorrect);
        }
        
        if(numberCorrect === 2){
            setTimeout(function(){
                let congrat = congratbuttons[0];
                congrat.style.display = "block";
                numberCorrect = -10000;
                shape.style.color = "";
            },500);
        }
        console.log(numberCorrect);
    });  
}
for( let i = 0; i < shapes.length; i++){
    shapes[i].style.background = "";
}

//Xử lý màn hình chiến thắng Screen1
congratulationButton[0].addEventListener('click',function(){
    setTimeout(function(){
        let congrat = congratbuttons[0];
        congrat.style.display = "none";
        startButton.style.display="block";
        scene[0].style.filter= "blur(5px)";
        for( let i = 0; i < appear1.length; i++){
            appear1[i].style.display = "none";
        }
        for( let i = 0; i < appear2.length; i++){
            appear2[i].style.display = "inline-block";
            appearX = 2;
        }
        buttonDone[0].style.display = "inline-block";
    },1000);  
});

console.log('buttonDone');
var buttondone = buttonDone[0];
var buttonwrong = document.getElementsByClassName('button-done_wrong');
var buttonright = document.getElementsByClassName('button-done_right');
var buttonPlaceholder = document.getElementsByClassName("button-done_placeholder");


// Xử lý nút Done
buttondone.addEventListener('click', function(){
    console.log(hiddenBox.length);

    let circleColor = circleColors[appearX-1];
    let traingleColor = traingleColors[appearX-1];
    let squareColor = squareColors[appearX-1];
    
    console.log(circleColor);
    console.log(squareColor);
    console.log(traingleColor);
    let numberCorrectShape = 0;
    for( let i = 0; i < shapes.length; i++){
        let shape = shapes[i];
        if( (shape.getAttribute('type') === 'circle' && shape.style.background === circleColor)
        || (shape.getAttribute('type') === 'square' && shape.style.background === squareColor )
        || (shape.getAttribute('type') === 'traingle' && shape.style.color === traingleColor )){
            numberCorrectShape++;
            buttonwrong[0].style.opacity = 1;
            buttonPlaceholder[0].style.visibility = "visible";
            setTimeout(function(){
                buttonwrong[0].style.opacity = 0;
                buttonPlaceholder[0].style.visibility = "hidden";
            },1000);
        }
        if (shape.getAttribute('type') === 'circle' && shape.style.background !== circleColor)
        {
            shape.style.border = "10px solid red";
            setTimeout(function(){
                shape.style.border = "4px solid black";
            },1000);
        }
        if(shape.getAttribute('type') === 'square' && shape.style.background !== squareColor ){
            shape.style.border = "10px solid red";
            setTimeout(function(){
                shape.style.border = "4px solid black";
            },1000);
        }
        if(shape.getAttribute('type') === 'traingle' && shape.style.color !== traingleColor ){
            shape.style["-webkit-text-stroke"]="10px red";
            setTimeout(function(){
                shape.style["-webkit-text-stroke"]="4px black";
            },1000);
        }
        // new String("white") == "white" => true, new String("white") === "white" => false
        if(shape.getAttribute('type') === 'rectangle' && shape.style.background !== ''){
            console.log(shape.style.color);
            shape.style.border = "10px solid red";
            setTimeout(function(){
                shape.style.border = "4px solid black";
            },1000);
            console.log(shape.getAttribute('type'));
        }
        
    }
    console.log(numberCorrectShape);
    if(numberCorrectShape === numberShapePainterCorrect[appearX-1]){
        buttonright[0].style.opacity = 1;
        buttonPlaceholder[0].style.visibility = "visible";
        if(appearX ===2){
            setTimeout(function(){
                buttonright[0].style.opacity = 0;
                buttonPlaceholder[0].style.visibility = "hidden";
                let congrat = congratbuttons[0];
                for( let i = 0; i < appear2.length; i++){
                    appear2[i].style.display = "none";
                }
                for( let i = 0; i < appear3.length; i++){
                    appear3[i].style.display = "inline-block";
                }
                appearX ++;
                startButton.style.display="block";
                scene[0].style.filter= "blur(5px)";   
            },2000);
        }
        if(appearX === 3){
            setTimeout(function(){
                buttonright[0].style.opacity = 0;
                buttonPlaceholder[0].style.visibility = "hidden";
                let congrat = congratbuttons[0];
                for( let i = 0; i < appear3.length; i++){
                    appear3[i].style.display = "none";
                }
                for( let i = 0; i < appear4.length; i++){
                    appear4[i].style.display = "inline-block";
                }
                appearX ++;
                startButton.style.display="block";
                scene[0].style.filter= "blur(5px)";   
            },2000);
        }
    }
    
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
