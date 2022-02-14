var sliding = document.getElementById("sliding")
var back = document.getElementById("back");
var next = document.getElementById("next");

var slide_image = new Array(
    
    "./images/pic-1.jpg",
    "./images/pic-2.jpg",
    "./images/pic-3.jpg",
    "./images/pic-4.jpg",

);

let i = 0;
  

next.onclick = function()
{
    if (i < 3){
        sliding.src = slide_image[i+1];
        i++;
    }
    
}

back.onclick = function(){
    if (i > 0){
        sliding.src = slide_image[i-1];
        i--;
    }
}