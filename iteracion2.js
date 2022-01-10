// 2.1 En base al siguiente javascript, crea variables en base a las propiedades 
// del objeto usando object destructuring e imprimelas por consola. Cuidado, 
// no hace falta hacer destructuring del array, solo del objeto.
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

let { title } = game
console.log(title)

let { gender } = game
console.log(gender)

let { year } = game
console.log(year)


// 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables 
// llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
// imprimelo por consola.
const fruits = ['Banana', 'Strawberry', 'Orange'];

let [fruit1, fruit2, fruit3] = fruits
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)



// 2.3 En base al siguiente javascript, usa destructuring para crear 2 
// variables igualandolo a la función e imprimiendolo por consola.
const animalFunction = () => {     return {name: 'Bengal Tiger', race: 'Tiger'} };

let { name, race } = animalFunction()
console.log(name)
console.log(race)


// 2.4 En base al siguiente javascript, usa destructuring para crear las 
// variables name y itv con sus respectivos valores. Posteriormente crea 
// 3 variables usando igualmente el destructuring para cada uno de los años 
// y comprueba que todo esta bien imprimiendolo.
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let { name, itv } = car
let [año1, año2, año3] = car.itv
console.log(name)
console.log(itv)
console.log(año1)
console.log(año2)
console.log(año3)