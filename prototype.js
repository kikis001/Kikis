class Usuario {
  constructor(nombre) {
    this.dd = nombre;
  }
  saludo() {
    let miki = this.dd;
    console.log(miki);
  }
}
var miki = new Usuario("Kikis");

miki.saludo();

// const potencia = function(base, exponente){
//   let resultado = 1;
//   for(let cuenta = 0; cuenta<exponente; cuenta++){
//     resultado *= base
//   } 
//   return resultado
// }
// console.log(potencia(2, 10))


const array = ['Miki', 'Truns', 'Rodolfo']

for(let i = 1; i < 11; i++){
  (i*2)
}


for(let i = 0; i<array.length; i++){
  console.log('Mi familia es: ', array[i], 'y su posción es:', i, array)
}

array.forEach((element, index, arra) => {
  console.log('Mi familia son: ', element, 'y su posición es:', index, arra)
});