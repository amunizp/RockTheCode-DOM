//TODO 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
// evento click que ejecute un console log con la información del evento del click
const cuerpo = document.querySelector('body')
var botonToCick = document.createElement('button')

botonToCick.textContent = 'Clica Aqui'
botonToCick.id = 'btnToClick'
botonToCick.addEventListener('click', (ev) => {
  console.log(ev)
})
cuerpo.appendChild(botonToCick)
//? quizas podia ponerlo directamente en HTML pero supongo que se queria de manera dinamica?
//TODO 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputFocus = document.querySelector('.focus')
inputFocus.addEventListener('focus', (ev) => {
  console.log(ev.target.value)
})
//TODO 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputs = document.querySelectorAll('input')
inputs.forEach((input) => {
  input.addEventListener('input', (ev) => {
    console.log(ev.target.value)
  })
})
