const trinkKaffee = (müdigkeitInProzent) => {
  console.log(`Du bist ${müdigkeitInProzent}% müde.`);
  müdigkeitInProzent--;
  if(müdigkeitInProzent > 0) {
    return trinkKaffee(müdigkeitInProzent);
  } else {
    return 'Du bist nicht mehr müde';
  }
}

const müdigkeit = prompt(`Wie müde bist du? In Prozent:`);
alert(trinkKaffee(müdigkeit));
