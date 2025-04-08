function singleMultTable() {
    var result = 0;
    var num = prompt("Indiqui un número per calcular-ne la taula de multiplicar");
    var counter = 0;

    while(counter <= 10) {
        result = num * counter;
        console.log(num + "x" + counter + "=" + result);
        counter++;
    }
}

function computeMultTables() {
    var num = 1;
    var result = 0;
    while(num <= 10) {
        console.log("Taula de multiplicar del " + num);
        var counter = 0;
        while(counter <= 10) {
            result = num * counter;
            console.log(num + "x" + counter + "=" + result);
            counter++;
        }
        num++;
    }
}