const toggleMode = document.querySelector('.toggle-btn');
const ul = document.querySelector('.todos');

const addTodo = todo => {
    const html = `<li>
    <div class="flex">
      <div class="circle"><img src="./images/icon-check.svg" alt=""></div>
    <span>${todo}</span>
    </div>
    <img src="./images/icon-cross.svg" alt="" class="cross">
  </li>`

  ul.innerHTML += html
}

toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('light')
})

const createTodo = document.querySelector('.create-todo');

createTodo.addEventListener('submit', e => {
    e.preventDefault();
    const todo = createTodo.add.value.trim();
    if(todo.length){
        addTodo(todo);
        createTodo.reset()
    }   
})

ul.addEventListener('click', e => {
    if(e.target.classList.contains('cross')){
        e.target.parentElement.remove();
    } else if(e.target.classList.contains('circle')){
        e.target.parentElement.parentElement.classList.toggle('completed');
    } else if(e.target.classList.contains('check-image')){
        e.target.parentElement.parentElement.parentElement.classList.toggle('completed');
    }
})


