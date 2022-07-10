const data = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}
const entries = Object.entries(data);
console.log(entries); // CONVIERTE EN MATRIZ
console.log(entries.length); //PODEMOS SABER CUANTOS ELEMENTOS CONTIENE EL OBJETO

const data1 = {
    frontend: 'Oscar',
    backend: 'Isabel',
    design: 'Ana',
}
const values = Object.values(data1);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' --'));
console.log('food'.padEnd(12,' __________'))

const obj = {
    name:'Oscar',
}

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    })
}


