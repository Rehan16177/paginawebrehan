const nombre = prompt("¿Cuál es tu nombre?");
  const sexo = prompt("¿Cuál es tu sexo? (Mujer/Hombre)").toLowerCase();
  if ((sexo== 'mujer' && nombre.charAt(0)<'M')
        || (sexo== 'hombre' && nombre.charAt(0)>'N')) {     //Rehan
    console.log("GRUP A");
  }
else {
    console.log("Grup B");
}