//TODO 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const cuerpo = document.querySelector('body')

function createULLIs(params) {
  var ul = document.createElement('ul')
  ul.classList.add('createULLIs')
  params.forEach((element) => {
    var li = document.createElement('li')
    li.textContent = element
    ul.appendChild(li)
  })
  return ul
}

cuerpo.appendChild(createULLIs(countries))
//TODO 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const paraQuitar = document.querySelector('.fn-remove-me')
paraQuitar.remove()
//TODO 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
cuerpo
  .querySelector('[data-function="printHere"]')
  .appendChild(createULLIs(cars))

//TODO 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]
function createH4imgs(params) {
  params.forEach((element) => {
    var divH4IMG = document.createElement('div')
    divH4IMG.classList.add('createH4imgs')
    var h4 = document.createElement('h4')
    var img = document.createElement('img')
    h4.textContent = element.title
    img.src = element.imgUrl
    divH4IMG.append(h4, img)
    cuerpo.appendChild(divH4IMG)
  })
}
createH4imgs(countries2)
//TODO 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
// elemento de la serie de divs.
var newButton = document.createElement('button')
newButton.textContent = 'borra el ultimo'
newButton.addEventListener('click', (ev) => {
  var listaDivs = cuerpo.querySelectorAll('div.createH4imgs')
  ultimaImg = listaDivs[listaDivs.length - 1]
  ultimaImg.remove()
})

cuerpo.appendChild(newButton)
//TODO 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
// divs que elimine ese mismo elemento del html.
var listaDivsH4IMG = cuerpo.querySelectorAll('div.createH4imgs')
listaDivsH4IMG.forEach((element) => {
  var buttonBorraImagen = document.createElement('button')
  buttonBorraImagen.textContent = 'Borra esta seccion'
  element.appendChild(buttonBorraImagen)
  buttonBorraImagen.addEventListener('click', (ev) => {
    element.remove()
  })
})
//TODO algo para atrapar el error cuando esten todas las imagenes borradas un alert "Oye, que no queda nada! "
