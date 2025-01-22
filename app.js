//Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio';

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function intentoDeBoton() {
  alert('El boton fue clickeado');
}

//Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function intentoDePrompt() {
  let ciudad = prompt("¿Cuál es el nombre de una ciudad de Brasil?");
      
        if (ciudad) {
        alert("Estuve en " + ciudad + " y me acordé de ti");
      }
}

//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function intentoDeAlert() {
  alert('Yo amo JS');
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function intentoDeSuma() {
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
      
let suma = num1 + num2;
      
alert("El resultado de la suma es: " + suma);
}
