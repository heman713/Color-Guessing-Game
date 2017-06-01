var numofColor = 6;
var colors= [];
var pickedcolor ;
var square = document.querySelectorAll(".square");
var dispaly_head = document.querySelector("#colorDisplay");
var button = document.querySelector("#main");
var decision = document.querySelector("#decision");
var header = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".modeBtn")

init();

function init() {
    setupModeBtns();
    setupSquare();
    reset();
}


function setupModeBtns() {
    for(i=0;i<modeBtn.length;i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("clickColor");
            modeBtn[1].classList.remove("clickColor");
            this.classList.add("clickColor");
            if(this.textContent==="Easy") {
                numofColor=3;
            }
                else
                numofColor=6;
            reset();
        })
    }
}

function setupSquare() {
    dispaly_head.textContent = pickedcolor;
    for(var i=0;i<square.length;i++) {
        square[i].style.background = colors[i];
        square[i].addEventListener("click", function(){
             var currentcolor = this.style.background;
            if(currentcolor === pickedcolor) {
                decision.textContent = "Correct";
                correct_ans(currentcolor);
                header.style.background= pickedcolor;
                button.textContent = "Play Again!";
            }
            else {
                this.style.background = "#232323";
                decision.textContent = "Try Again"
            }
        });
    }
}

function reset() {
    colors=generateRandomColors(numofColor);
    pickedcolor = pickColor();
    dispaly_head.textContent = pickedcolor;
    button.textContent="New Colors";
    header.style.background="steelblue";
    for(var i=0;i<square.length;i++) {
        if(colors[i]) {
            square[i].style.display="block";
            square[i].style.background = colors[i];
        }
        else
        square[i].style.display="none";
    }
}

button.addEventListener("click", function() {
    reset();
})

dispaly_head.textContent = pickedcolor;
for(var i=0;i<square.length;i++) {
    square[i].style.background = colors[i];
    square[i].addEventListener("click", function(){
         var currentcolor = this.style.background;
        if(currentcolor === pickedcolor) {
            decision.textContent = "Correct";
            correct_ans(currentcolor);
            header.style.background= pickedcolor;
            button.textContent = "Play Again!";
        }
        else {
            this.style.background = "#232323";
            decision.textContent = "Try Again"
        }
    });
}


function correct_ans(currentcolor) {
    for(var i=0;i<square.length;i++) {
        square[i].style.background = currentcolor;
    }
}

function generateRandomColors(num){
    var arr=[];
    for(var i=0; i<num; i++){
        arr[i] = RandomColor();
    }
    return arr;
}

function RandomColor() {
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var changeColor ="rgb(" +r+ ", " +g+ ", " +b+ ")";
    return changeColor;
}

function pickColor(){
    var value=Math.floor(Math.random() * colors.length);
    return colors[value];
}
