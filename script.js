// let a= document.querySelector("a")
// a.addEventListener("click",(e)=>{
//   a.stopPropagation()
//   a.prevenDefault()
//   let div =document.createElement(div)
//   let p= document.createElement(p)
//   let aceptar=document.createElement(button)
//   let cancelar=document.createElement(button)

// div.className= "pop-up"


//   p.innertext="¿Estás seguro de borrar el comentario?"
//   aceptar.innertext="Sí, dale para adelante"
//   cancelar.innertext="Mmm...mejor no"

//   let body= document.querySelector('body');
//     body.appendChild(div)
//     div.appendChild()
// })

let form = document.querySelector("form")

form.addEventListener("submit", (e) => {
  e.stopPropagation()
  e.preventDefault()

  let body = document.body
  let div = document.createElement("div")
  let title = document.createElement("h3")
  let ul = document.createElement("ul")
  let nombre = document.createElement("li")
  let edad = document.createElement("li")
  let email = document.createElement("li")
  let comentario = document.createElement("li")
  let borrar = document.createElement("button")

  // asignar clases para darle estilo al div que se genera
  div.className = "seccion-respuestas"
  ul.className = "lista"
  nombre.className = "items"
  edad.className = "items"
  email.className = "items"
  comentario.className = "items"
  borrar.id = "borrar"

  title.innerText = form.elements.nombre.value + " nos da su opinión:"
  nombre.innerText = form.elements.nombre.value
  edad.innerText = form.elements.edad.value
  email.innerText = form.elements.mail.value
  comentario.innerText = '"' + form.elements.comentario.value + '"'
  borrar.innerText = "Borrar comentario"

  div.appendChild(title)
  div.appendChild(ul)
  ul.appendChild(nombre)
  ul.appendChild(edad)
  ul.appendChild(email)
  ul.appendChild(comentario)
  div.appendChild(borrar)
  body.appendChild(div)


  form.reset()

//   validar el campo "nombre"
    let validarNombre= nombre.innerText
    var letras = true
    for (let i = 0; i < validarNombre.length; i++) {
      let letra = validarNombre[i]
      let codigo = letra.charCodeAt()

      if (codigo > 64 && codigo < 123) {
        letras = true
          } else {
        letras = false
        break
      }

      if (letras == true) {
        let mostrarValidezNombre = document.createElement("p")
        let tituloCampoEdad = document.getElementById("tituloCampoEdad")
        form.appendChild(mostrarValidezNombre)
        form.insertBefore(mostrarValidezNombre, tituloCampoEdad)
        mostrarValidezNombre = "¡Nombre válido! :)"
      } else {
        let mostrarValidezNombre = document.createElement("p")
        let tituloCampoEdad = document.getElementById("tituloCampoEdad")
        form.appendChild(mostrarValidezNombre)
        form.insertBefore(mostrarValidezNombre, tituloCampoEdad)
        mostrarValidezNombre = "Alguno de los caracteres que ingresaste es inválido. Recordá ingresar solo letras"
      }
    }
  
  // activar boton de borrar comentario
  borrar.addEventListener("click", (e) => {
    e.stopPropagation()
    e.preventDefault()
    body.removeChild(div)
    div.removeChild(ul)

  })

  // if-else para enviar alerta en caso de que aunque sea uno de los campos no se llene: incompleto!
  // } else {
  //   let alerta = document.createElement("div")
  //   let h3 = document.createElement("h3")

  //   alerta.classList.add("alerta")

  //   body.appendChild(alerta)
  //   alerta.appendChild(h3)

  //   h3.innerText = "¡Tenés que llenar el formulario entero!"
  // }
})
