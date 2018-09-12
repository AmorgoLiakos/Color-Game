var numSquares =6;
var colors=generateColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
})

hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent= pickedColor;
    for(var i=0; i<squares.length; i++){
            squares[i].style.backgroundColor=colors[i];
            squares[i].style.display="block";
    }
})

resetButton.addEventListener("click", function(){
    //generate new colors
    colors = generateColors(numSquares);
    //pick new color
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //Show the new rgb color
    this.textContent = "New Colors";
    //change the color of h1
    h1.style.backgroundColor ="steelblue";
    //reset message display
    messageDisplay.textContent = "";
    //change color of sqaures
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
})

for (var i=0; i<squares.length; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];
    //add click listeners
    squares[i].addEventListener("click",function(){
        //grab color of clicked square
        clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
            messageDisplay.textContent = "Correct";
            resetButton.textContent = "Play Again?";
            changeColor(clickedColor);
            h1.style.backgroundColor = pickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
        //compare to picked
    });
};

function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num){
    var arr = [];

    for(var i=0; i<num; i++){
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}