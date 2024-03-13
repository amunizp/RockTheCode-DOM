//TODO Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo .
const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']
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
const cuerpo = document.querySelector('body')
cuerpo
  .querySelector('[data-function="printHere"]')
  .appendChild(createULLIs(places))
