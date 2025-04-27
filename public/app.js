const main = () => {
  const addButton = document.getElementById('add-todo')
  const todoInput = document.getElementById('todo-input')
  const todoList = document.getElementById('todo-list')

  addButton.addEventListener('click', () => {
    if (!todoInput.value) {
      const warning = document.getElementById('warning')
      warning.textContent = 'TODOを入力してください'
      return
    } else {
      const warning = document.getElementById('warning')
      warning.textContent = ''
    }

    const newTodo = document.createElement('li')
    newTodo.textContent = todoInput.value
    todoList.appendChild(newTodo)
    todoInput.value = ''
  })

  const clearButton = document.getElementById('clear-todo')
  clearButton.addEventListener('click', () => {
    const todoItems = todoList.getElementsByTagName('li')
    while (todoItems.length > 0) {
      todoList.removeChild(todoItems[0])
    }
  })
}

main()
