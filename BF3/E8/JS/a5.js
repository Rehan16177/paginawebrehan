function calcularCapital() {
    var capital = prompt("Introduce la cantidad a invertir:");
    var interesanual = prompt("Introduce el interés anual en porcentaje:");
    var year = prompt("Introduce el número de años:");

    capital = parseInt(capital);
    interesanual = parseInt(interesanual);
    year = parseInt(year);


    for (var i = 1; i <= year; i++) {
        capital += capital * interesanual /100;
        console.log(i + ":" + capital + "€");
    } 
}