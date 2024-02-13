/* Esto permite mostrar cosas que quiero escribir en la consola de la pagina del html que tengo viculado, 
es como el escribir de pseint pero no me va a aparecer en la pagina */
console.log("hola mundo")
const inputNombre = document.querySelector('#nombre')
const inputApellido = document.querySelector('#apellido')
const inputEdad = document.querySelector('#edad')
const inputCelular = document.querySelector('#celular')
const inputEmail = document.querySelector('#email')
const formulario = document.getElementById('formulario')
const tbody = document.getElementById('tbody')

function manejarSubmit(evento) {
    evento.preventDefault()

    const redioOcupacion =document.querySelector('.ocupacion:checked')

    const nombre = inputNombre.value 
    const apellido = inputApellido.value 
    const edad = inputEdad.value 
    const ocupacion = redioOcupacion.value 
    const celular = inputCelular.value 
    const email = inputEmail.value 

    tbody.innerHTML += `
    <tr>
      <td>${nombre}</td>
      <td>${apellido}</td>
      <td>${edad}</td>
      <td>${ocupacion}</td>
      <td>${celular}</td>
      <td>${email}</td>
    </tr>
    `

    formulario.reset();
}

formulario.addEventListener('submit', manejarSubmit)
/*const inputNombre = document.querySelector('#nombre')
const inputCiudad = document.querySelector('#ciudad')
const formulario = document.getElementById('formulario')
const tbody = document.querySelector('#tabla tbody')
const select = document.querySelector('#deporte')

function manejarSubmit(evento) {
  evento.preventDefault()

  const radioActivo = document.querySelector('.radio:checked')

  const nombre = inputNombre.value
  const ciudad = inputCiudad.value
  const genero = radioActivo.value
  const deporte = select.value

  tbody.innerHTML += `
    <tr>
      <td>${nombre}</td>
      <td>${ciudad}</td>
      <td>${genero}</td>
      <td>${deporte}</td>
    </tr>
  `

  formulario.reset();
}

formulario.addEventListener('submit', manejarSubmit)*/