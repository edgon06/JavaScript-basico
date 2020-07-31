/* ---------------------------------- Cosas básicas en JavaScript ----------------------------------------- */
/* Cada instruccion se termina con ';' */

/* Declaración de variables:
 Nota: Javascript es un lenguaje de programación no tipado. 
 Nota: Es posible declarar variables con la instrucción 'var' o con la instrucción 'let'. 
 let soluciona algunos problemas de var por lo que es lo que se debería utilizar en la actualidad.*/

let nombre = "Edwin Gonzalez";
let altura = 172;

/* Se puede concatenar texto con numeros: */
let texto = nombre + " altura: " + altura;

/* Añadir un texto a un documento html: */
// document.write(nombre);

/* Para mostrar una ventana emergente con un mensaje se utiliza la instrucción alert(mensaje): */
 //alert('Hola mundo');

/* Para mostrar una ventana emergente para introducir un dato se utiliza la instrucción prompt("Texto a mostrar","Texto por defecto"), que retorna el valor introducido: */
 //variable = prompt('Ingrese su nombre:','');

/* Por lo general para hacer cosas se añade algo a un elemento html con un id especificado: */
/* Se crea una variable que representara ese elemento html en este script: */
let datos;
/* Se enlaza a la variable dicho elemento con la instruccion document.getElementById("id-del-elemento") */
datos = document.getElementById("contenedor-texto");
/* Se añade el texto al elemento html */
datos.innerHTML = texto;

/* Es posible incrustar código html con código JavaScript utilizando un "template" de html con el caracter '`' de la siguiente forma: */
datos.innerHTML = `
 <h2> Un Titulo añadido con JavaScript </h2>
  <p> Un parrafito de ejemplo. El valor de la variable nombre es " ${nombre} " <p>
`;

/* ----------------------------------  Estructuras condicionales en JavaScript ----------------------------------  */
if(altura > 170)
{
    /* Nota: para no sobre escribir el contenido del elemento se puede usar el operador de incremento '+=' en lugar de el de asignacion '=' */
    datos.innerHTML += 
    `<p> ${nombre} es una persona alta, mide ${altura} centímetros.</p>`;
}else
{
    datos.innerHTML += 
    `<p> ${nombre} es una persona baja, mide ${altura} centímetros.</p>`;
}

/* Declaracion de arreglos en JavaScript: */
let arreglo = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

/* Estructuras repetitivas en JavaScript */
datos.innerHTML += 
`<p> Imprimiré los elementos de un arreglo con una estructura repetitiva: </p>
    <ul>`;
for(let i = 0; i< arreglo.length; i++) // Nota: arreglo.length retorna el tamaño del array arreglo
{
    datos.innerHTML += 
    `<li> Elemento del array en la poscicion ${i}: ${arreglo[i]}. </li>`;
}
datos.innerHTML += `</ul>`;

/* ---------------------------------- Definir funciones (con retorno de valor) en JavaScript ----------------------------------------- */
function ProducirMensaje(nombre, altura)
{
    let texto;
    if(altura > 170)
    {
        texto = nombre + " es una persona alta, mide "+ altura +" centímetros";
    }else
    {
        texto = nombre + " es una persona baja, mide "+ altura +" centímetros";
    }
    return texto;
}

/* Definir métodos en JavaScript */
function MostrarDatos(nombre, altura){
    datos.innerHTML += 
    `<p> Mostré con JavaScript unos datos en una ventanita. </p>`;
       alert(ProducirMensaje(nombre,altura));
}

/* Llamar métodos y funciones en JavaScript */
// MostrarDatos(prompt('Ingrese su nombre:',''), prompt('Ingrese su estatura:',''));

/* Nota: otra forma de trabajar con los arreglos es utilizando "funciones anonimas": 

 arreglo.forEach(function(elemento)
 {
     document.write('<br>' + elemento);
 });
*/

 /* ---------------------------------- Ejecutar eventos en JavaScript ----------------------------------------- */

 /* Función externa */
function ejecutar() {
    MostrarDatos(prompt('Ingrese su nombre:',''), prompt('Ingrese su estatura:',''));
  }
  
  /* Asignar la función externa al elemento html con id boton-evento
    Nota: se asigna la función sin los paréntesis porque estamos asignando la función, no el valor retornado por esta */
  document.getElementById("boton-evento").onclick = ejecutar;


 /* ---------------------------------- objetos en JavaScript ----------------------------------------- */

/* Definir propiedades/atributos a un tipo de objetos: */

/*
    let miObjeto = new Object();
    miObjeto.propiedad1 = "Texto";
    miObjeto.propiedad2 = 1969;
*/

/* Tambien es posible acceder a las propiedades de objetos de la siguiente forma: */
/*
    let miObjeto = new Object();
    miObjeto["propiedad1"] = "Texto";
    miObjeto["propiedad2"] = 1969;
*/

/* Tambien es posible inicializar objetos de la siguiente forma: */
/*
    let objeto = {  propiedad_1  : valor_1,   // propiedad_# puede ser un identificador...
                    propiedad_2  : valor_2,
                    metodo_1: function(parametros) {
                            // ...hacer algo
                            } 
                }; // o una cadena
*/

/* Ejemplo: */
/*
    let miHonda = {color: "rojo", ruedas: 4, motor: {cilindros: 4, tamanio: 2.2}};
*/

/* Crear objetos con un método constructor: */

        function Objeto(propiedad1, propiedad2) 
        {
            this.propiedad1 = propiedad1;
            this.propiedad2 = propiedad2;
            this.mostrar = function() {
                alert("Los valores introducidos fueron " + this.propiedad1 + " y " + this.propiedad2 + ".");
            };
        }
    
    // Para luego:
    function ejecutarEventoObjeto()
    {
        let miObjeto = new Objeto(prompt("Inserte un texto:",""),prompt("Inserte otro texto:",""));
        miObjeto.mostrar();
    }    
     
    document.getElementById("boton-objeto").onclick = ejecutarEventoObjeto;   


