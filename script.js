
const itemValue = document.querySelector('.todo__item-value')
const itemCircle = document.querySelector('.todo__item-circle')
const itemCircle2 = document.querySelector('.circle-active')
const todoBtn = document.querySelector('.todo__btn')
const tedoList = document.querySelector('.todo__list')
const input = document.getElementById('input')


// itemValue.addEventListener('click', () => {
//   itemCircle2.style.display = 'block'
//   itemCircle.style.display = 'none'
//   itemValue.classList.add('value-ective')
// })
// itemCircle.addEventListener('click', () => {
//   itemCircle.style.display = 'none'
//   itemCircle2.style.display = 'block'
//   itemValue.classList.add('value-ective')
// })

todoBtn.addEventListener('click', addListItem)

function addListItem (event) {
  const newElem = `
    <li class="todo__list-item">
    <span></span>
    <div class="todo__item-circle"></div>
    <div class="circle-active"></div>
    <p class="todo__item-value">${input.value}</p>
    </li>
  `
  tedoList.innerHTML += newElem
}


