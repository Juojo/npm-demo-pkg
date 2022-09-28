#!/usr/bin/env node

const argv = require('yargs').argv; // Llama a 'yargs'

if (argv.name == undefined) { // Chequea que se halla usado "--name", si no es el caso muestra un msg de error
    console.log('No se ingreso la flag "--name".'); 
} else if (argv.name === true) { // Si se esta usando la flag pero no se le asigna un valor
    console.log('La flag "--name" esta siendo usada pero no se le asigno un valor.');
} else { // Si se usa la flag y se le asigna un valor
    console.log(typeof argv.name === 'string' ? `Hola, ${argv.name}!` : undefined); // ! Si el tipo de dato de argv.name es un string ? (entonces) mostrame el mensaje de saludo : (caso contrario) pasa por consola "undefined".
}

// Made with: https://youtu.be/S-_Fx4-nal8