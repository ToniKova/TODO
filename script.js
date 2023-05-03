

const todoBtn = document.querySelector('.todo__btn')
const todoList = document.querySelector('.todo__list')
const input = document.getElementById('input')
const footer = document.querySelector('.todo-footer')
const countSpan = document.getElementById('span-all')
const countSpanFin = document.getElementById('span-fin')
const btnAllDel = document.querySelector('.todo-footer__btn')
console.log(btnAllDel)

let count = 0
let countFin = 0


btnAllDel.addEventListener('click', delAllTask)
todoList.addEventListener('click', markTask)
todoBtn.addEventListener('click', addTask)
todoList.addEventListener('click' , deleteTask)

//Обработчик для добавления задачи по клавише ЭНТЕР
document.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    addTask()
  }
})

//Функция для отметки выполненной задачи
function markTask (event) {
  // if (event.target.classList.contains('todo__item-value')) {
  //   const parenNode = event.target.closest('.todo__list-item')
  //   const taskTitle = parenNode.querySelector('.todo__item-value')
  //   const taskCircle = parenNode.querySelector('.todo__item-circle')
  //   const taskCircleActive = parenNode.querySelector('.circle-active')

  //   taskCircleActive.classList.add('circle-done')
  //   taskCircle.classList.add('item-circle-done')
  //   taskTitle.classList.add('value-ective')

  //   count--
  //   countSpan.innerText = count
  // }

  if (event.target.classList.contains('todo__item-circle')) {
    const parenNode = event.target.closest('.todo__list-item')
    const taskTitle = parenNode.querySelector('.todo__item-value')
    const taskCircle = parenNode.querySelector('.todo__item-circle')
    const taskCircleActive = parenNode.querySelector('.circle-active')

    taskCircleActive.classList.add('circle-done')
    taskCircle.classList.add('item-circle-done')
    taskTitle.classList.add('value-ective')
    
    // countFin++
    // countSpanFin.innerText = countFin
  } 
}

//Функция для удаления выполненой задачи
function deleteTask (event) {
  if (event.target.classList.contains('todo__del-btn')) {
    const parenNode = event.target.closest('.todo__list-item')
    parenNode.remove()
    count--
    countSpan.innerText = count
    if (todoList.children.length === 0) {
      footer.classList.remove('footer-active')
    } 
  }
}

//Функция для создания текущей задачи 
function addTask () {
  if (input.value === '') return
  if (todoList.children.length < 1) {
    footer.classList.add('footer-active')
  } 
  const newElement = `
    <li class="todo__list-item">
      <div class="todo__item-circle"></div>
      <div class="circle-active"></div>
      <p class="todo__item-value">${input.value}</p>
      <button class="todo__del-btn"></button>
    </li>
  `
  todoList.insertAdjacentHTML('afterbegin', newElement)  
  input.value = ''
  input.focus()
  count++
  countSpan.innerText = count

}

function delAllTask () {
  todoList.innerHTML = ''
  if (todoList.children.length === 0) {
    footer.classList.remove('footer-active')
    count = 0
    countSpan.innerText = count
  } 

}


