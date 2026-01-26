const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodos() {
  todoList.innerHTML = ''; 

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item'; // CSS와 이름 맞춤
    if (todo.completed) {
      li.classList.add('completed');
    }

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;

    const span = document.createElement('span');
    span.className = 'todo-text';
    span.textContent = todo.text;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;'; // 깔끔한 X 기호

    // 요소 조립
    li.append(checkbox);
    li.append(span);
    li.append(deleteBtn);
    todoList.appendChild(li);

    // 이벤트 리스너: 체크박스
    checkbox.addEventListener('change', () => {
      todos[index].completed = checkbox.checked;
      li.classList.toggle('completed', checkbox.checked);
      saveTodos();
    });

    // 이벤트 리스너: 삭제
    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1); // 인덱스를 직접 사용하여 더 정확하게 삭제
      saveTodos();
      renderTodos(); // 리스트 재렌더링
    });
  });
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === '') {
    alert('내용을 입력하세요');
    return;
  }
  const newTodo = {
    text: todoText,
    completed: false,
  };
  todos.push(newTodo);
  todoInput.value = '';
  saveTodos();
  renderTodos();
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

// 페이지 로드 시 초기 렌더링
window.onload = renderTodos;