// Parámetros por defecto (antes)

function newFunction(name, age, country) {
var name = name || 'oscar';
var age = age || 32;
var country = country || 'MX';
console.log(name, age, country);
}

// Parámetros por defecto (es6)
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
console.log(name, age, country);
}
newFunction2();
newFunction2 ('Ricardo', '23', 'CO');


// concatenación (antes)

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);


// Templates literal (es6)

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// Multilinea en los string

let lorem = "Quiero escribir una frase épica \n" + "otra frase épica que necesitamos.";
let lorem2 = `otra frase épica que necesitamos
ahora es otra frase épica`;
console.log(lorem);
console.log(lorem2);


// Destructuración de elementos

let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX',
}

console.log(person.name, person.age);
// oscar 32

let { name } = person;
console.log(name, age);
// oscar 32


// Union de elementos separando por equipos

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);


// let scope 

{
    var globalVar = "Global Var";
}

{
    let globalLet = 'Global let';
    console.log(globalLet);
    // Global let
}

console.log(globalVar);
// Global Var
console.log(globalLet);
// error

const a = 'b';
a= 'a';

console.log(a);
// error, ya que no se puede reasignar una constante.

var b = 'b';
b= 'a';

console.log(b);
// b porque las variables si se pueden reasignar


// crear nuevo objetos (antes)

let names ='oscar';
let ages = 32;
obj = {names: names, ages: ages};

// crear nuevo objetos (es6)
obj2 = {names, ages};
console.log(obj2);


// arrow function

const namess = [
    {namess: 'Heike', age: 32},
    {namess: 'Brenda', age: 25},
]

// es5

let listOfNames =namess.map(function(item){
    console.log(item.namess);
})

// es6
// opcion 1
let listOfNames2 =namess.map(item => console.log(item.namess));

// opcion2

const listOfNames3 = (namess, agess, countryss) => {
    console.log(item.namess);
}

const listOfNames4 = namess => {
    ...
}

const square = num => num * num;

//Función tradicional
function nombre (parámetros) {
    return (valorRetornado)
}

//Función flecha
const nombre = (parámetros) => {
    return (valorRetornado)
}

// Promesa

const helloPromise = () => {
    return new Promise ((resolve, reject) => {
        if (false) {
            resolve ('Hey');
        } else {
            reject ('ups!!');
        }
    });
}

helloPromise ()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

const promesa = () => {
    return new Promise( (resolve, reject) => {
        if( something ) {
            resolve( "Se ha resuelto la promesa" )
        else {
            reject( "Se ha rechazado la promesa" )
        }
    }
}

promesa
    .then( respuesta => console.log(respuesta) ) //En caso que se ejecute resolve
    .catch( error => console.log(error) ) //En caso que se ejecute reject

    class calculator {
        constructor () {
            this. valueA = 0;
            this. valueB = 0;
        }
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }
    const calc = new calculator();
    console.log(calc.sum(2, 2));

    import { hello} from './module';

    hello();

    function* helloWorld() {
        if (true){
            yield 'Hello';
        }
        if(true){
            yield 'World';
        }
    };
    
    const generatorHello = helloWorld();
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);

    
