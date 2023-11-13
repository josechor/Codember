const cadena =
  "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";
console.time("challenge02");

let contador = 0;
cadenaSalida = "";

cadena.split("").arrayCadena.forEach((element) => {
  if (element === "#") {
    contador++;
  } else if (element === "@") {
    contador--;
  } else if (element === "*") {
    contador = Math.pow(contador, 2);
  } else if (element === "&") {
    cadenaSalida += contador;
  }
});

console.log(`submit ${cadenaSalida}`);
console.timeEnd("challenge02");
