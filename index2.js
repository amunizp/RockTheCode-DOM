// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const cuerpo = document.querySelector('body')
const div1 = document.createElement('div')
cuerpo.appendChild(div1)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const p1 = document.createElement('p')
const div2 = document.createElement('div')
div2.appendChild(p1)
cuerpo.appendChild(div2)
// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un
// 	loop con javascript.
const div3 = document.createElement('div')

for (let index = 0; index < 6; index++) {
  const p2 = document.createElement('p')
  div3.appendChild(p2)
}
cuerpo.appendChild(div3)
// 1.4 Inserta dinamicamente con javascript en un html una p con el
// 	texto 'Soy dinámico!'.
var pConTexto = document.createElement('p')
pConTexto.innerText = 'Soy dinámico!'
cuerpo.appendChild(pConTexto)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const subtitulo2 = document.querySelector('h2.fn-insert-here')
const texto = document.createTextNode('Wubba Lubba dub dub')
subtitulo2.appendChild(texto)
// 1.6 Basandote en el siguiente array crea una lista ul > li con
// los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const listaUL = document.createElement('ul')
apps.forEach((app) => {
  const listaIL = document.createElement('il')
  listaIL.innerHTML = app
  listaUL.appendChild(listaIL)
})

cuerpo.appendChild(listaUL)
// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const paraQuitar = document.querySelectorAll('.fn-remove-me')
console.log(paraQuitar)
paraQuitar.forEach((element) => {
  element.remove()
})
// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
var pConTexto = document.createElement('p')
pConTexto.innerText = 'Voy en medio!'
cuerpo.insertBefore(pConTexto, document.querySelectorAll('.fn-insert-here')[2])

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase
// 	.fn-insert-here

const divsConInserto = document.querySelectorAll('.fn-insert-here')
divsConInserto.forEach((div) => {
  var pConTexto = document.createElement('p')
  pConTexto.innerText = 'Voy dentro!'
  div.appendChild(pConTexto)
})
