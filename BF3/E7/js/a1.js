function presente(id,bclass) {
    var element = document.querySelector(id);
    element.style.color = "#008000";
    var botons = document.getElementsByClassName(bclass);
    for(var pos = 0; pos < botons.length; pos++) {
        botons[pos].style.display = "none";

    } 

} 

function ausente(id,bclass) {
    var element = document.querySelector(id);
    element.style.color = "#e80707";
    var botons = document.getElementsByClassName(bclass);
    for(var pos = 0; pos < botons.length; pos++) {
        botons[pos].style.display = "none";

    } 

} 
    


    












