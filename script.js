var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();


function init(){
    //mode buttons event listeners
    setupModes();
    setupSquares();
    reset();
}
function setupSquares(){
    for(var i = 0; i<squares.length; i++){
    
    
        //clicklistener
        squares[i].addEventListener("click", function(){
    
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to clicked color
        if(clickedColor === pickedColor){
    
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
    
        } else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }


    });
}


}
function setupModes(){
    for(var i =0; i <modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
    
            this.textContent ==="Easy" ? numSquares = 3: numSquares = 6;
            
            reset();
           
        });
    }

}

function reset(){
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i=0; i <squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else{
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";



}

resetButton.addEventListener("click", function(){
    reset();
});


for(var i = 0; i<squares.length; i++){
    
    
    //clicklistener
    squares[i].addEventListener("click", function(){

    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to clicked color
    if(clickedColor === pickedColor){

        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;

    } else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }


    });
}


function changeColors(color){

    for(var i = 0; i< squares.length; i++){

        squares[i].style.backgroundColor = color;
    };
};

function pickColor(){

   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //make an array
    arr = [];
    //add num colors to array
for (var i =0; i< num;i++){
    //get random color n push into array
    arr.push(randomColor());

}
    return arr;
}


function randomColor(){
    //pick red
    var r = Math.floor(Math.random() * 256);

    //pick green
    var g = Math.floor(Math.random() * 256);
    //pick blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")" ;

}