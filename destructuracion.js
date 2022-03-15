//1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
//prediccion: saldra en el primer console "Tesla" y el segundo "Mercedes", por el motivo de que
//siempre comienza en el orden 0 la primera variable del objeto cars y la coma indica el siguiente orden.

//2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
//console.log(name);------->ERROR
console.log(otherName);
//prediccion: el primero saldra error porque es un argumento del diccionario y no una variable definida, 
//segundo sale Elon por la variable othername, la cual es el producto de la destructuracion.

//3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
//prediccion: en el primer console saldra 12345 debido a que esta definido por la variable password
//segundo console saldra no definido porque el argumento password no existe en el diccionario person.

//4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
//prediccion: en el primer console first es 2 por el numero de comas, por lo mismo second es 5;
//por lo tanto saldra False .En el segundo console es True debido a que third es 2, porque 
//el numero de comas da una vuelta al objeto y debuelve el elemento de la posicion 1.

//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//prediccion: en el primer console saldra value , por destructuracion de lastTest y la variable key.
//en el segundo saldra [1,5,1,8,3,3], por lo mismo de la primera, pero con el objeto secondKey
//el tercer console sale 1 por la objeto secondKey, debido a que esta llamando a la posicion 0.
//el cuarto saldra 5, debido a que el objeto secondKey se destructura y sale la variable willThisWork
//que es igual al nuemero de la posicion 1 por el numero de comas. 