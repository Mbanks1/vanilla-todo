document.querySelector('form').addEventListener('submit', handleSubmitForm)



function handleSubmitForm(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
         addTodo(input.value);
    input.value = ';'
}

function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = todo;

    li.classList.add('todo-list-item');
    ul.appendChild(li);
    console.log(todo)
}
