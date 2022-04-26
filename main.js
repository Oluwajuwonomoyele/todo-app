const toggleMode = document.querySelector('.toggle-btn');
const ul = document.querySelector('.todos');
const itemsLeft = document.querySelector('.nav span');
const createTodo = document.querySelector('.create-todo');
const clear = document.querySelector('.clear');
const tabs = document.querySelectorAll('.tabs p');
const tabsMobile = document.querySelectorAll('.tabs-mobile p');

//add todo to html
const addTodo = todo => {
    const html = `<li>
    <div class="flex">
      <div class="circle"><img src="./images/icon-check.svg" alt="" class="check-image"></div>
    <span>${todo}</span>
    </div>
    <img src="./images/icon-cross.svg" alt="" class="cross">
  </li>`

  ul.innerHTML += html
};

//update items left
const updateItemsLeft = (number) => {
    itemsLeft.textContent = Number(itemsLeft.textContent) + number;
}

//toggle light mode
toggleMode.addEventListener('click', () => {
    document.body.classList.toggle('light')
})

//create new todo
createTodo.addEventListener('submit', e => {
    e.preventDefault();

    const todo = createTodo.add.value.trim();
    if(todo.length){
        addTodo(todo);
        updateItemsLeft(1);
        createTodo.reset();
    }   
})

//ul delegation
ul.addEventListener('click', e => {
    if(e.target.classList.contains('cross')){
        e.target.parentElement.remove();
    } else if(e.target.classList.contains('circle')){
        e.target.parentElement.parentElement.classList.toggle('completed');
        if(e.target.parentElement.parentElement.classList.contains('completed')){
            updateItemsLeft(-1);
        }else {
            updateItemsLeft(1);
        }
    } else if(e.target.classList.contains('check-image')){
        e.target.parentElement.parentElement.parentElement.classList.toggle('completed');
        if(e.target.parentElement.parentElement.classList.contains('completed')){
            updateItemsLeft(-1);
        }else {
            updateItemsLeft(1);
        }
    }
})

//clear completed todos
clear.addEventListener('click', () => {
    const children = ul.querySelectorAll('li');
    children.forEach(child => {
        if(child.classList.contains('completed')){
            child.remove();
        }
    })
})

//filter active and completed
tabs.forEach(tab => {
   tab.addEventListener('click', () => {
       tabs.forEach(e => {
           e.classList.remove('active')
       });
       tab.classList.add('active');
       const children = ul.querySelectorAll('li');
       if(tab.textContent === "Active"){
           children.forEach(child => {
               if(child.classList.contains('completed')){
                   child.style.display = "none";
               }else{
                   child.classList.display = "flex";
               }
           })
        } else if(tab.textContent === "Completed"){
            children.forEach(child => {
                if(!child.classList.contains('completed')){
                    child.style.display = "none";
                }else{
                    child.style.display = "flex";
                }
            })
        }else {
            children.forEach(child => {
                child.style.display = "flex"
            })
        }
   });
});