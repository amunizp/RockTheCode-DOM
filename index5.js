//TODO Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums.

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

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
cuerpo.appendChild(createULLIs(albums))
