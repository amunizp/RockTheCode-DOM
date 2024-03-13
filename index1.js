// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const boton = document.querySelector('button.showme').outerHTML
const ContenidoBoton = document.querySelector('button.showme').textContent

console.log(boton)
console.log(ContenidoBoton)
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const titulo = document.querySelector('h1#pillado').outerHTML
const ContenidoTitulo = document.querySelector('h1#pillado').textContent
console.log(titulo)
console.log(ContenidoTitulo)
// 1.3 Usa querySelector para mostrar por consola todos los p
const todasP = document.querySelectorAll('p')
todasP.forEach((elemento) => {
  console.log(elemento.textContent)
})
// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// la clase.pokemon
const todasPokemon = document.querySelectorAll('.pokemon')
for (const elemento of todasPokemon) {
  console.log(elemento.outerHTML)
}

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".
const pruebaMe = document.querySelectorAll('[data-function="testMe"]')
for (let index = 0; index < pruebaMe.length; index++) {
  const element = pruebaMe[index].outerHTML
  console.log(element)
}
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".
const tercerTestMe = pruebaMe[2].outerHTML
console.log(tercerTestMe)
