var img = ['../img/rehan.jpg', '../img/PAK.jpg', '../img/2020.jpg', '../img/españa.jpg', '../img/ONE_Piece.webp', '../img/KNY.jpg', '../img/aot.jpg', '../img/blue.jpg'];
var counter = 0;
setInterval(next, 2000, 'carousel');


function next  (carousel){
    counter ++;
    counter = counter % img.length;
    var element = document.getElementById(carousel);
    element.src = img [counter];
}


function previous  (carousel){
    counter--;
    if(counter <  0){
        counter = img.length -1;
        
        
    }
    var element = document.getElementById(carousel);
    element.src = img [counter];
}




