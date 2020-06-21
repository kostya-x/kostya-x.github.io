const BASE_URL = 'https://todo.hillel.it';

const $todoForm = document.querySelector('.todo-form');
const $todoInput = document.querySelector('.todo-input');
const $tasksList = document.querySelector('.tasks-list');

const $todoContent = document.querySelector('.todo-content');
const $login = document.querySelector('.login');
const $loginForm = document.querySelector('.login-form');
const $loginInput = document.querySelector('.login-input');

const state = {
  token: '',
  notes: []
};

function createTask(taskObject) {
  const $taskItem = document.createElement('li');
  const $taskText = document.createElement('span');
  const $taskBtnHolder = document.createElement('div');
  const $taskDone = document.createElement('button');
  const $taskEdit = document.createElement('button');
  const $taskRemove = document.createElement('button');

  $taskItem.classList.add('task-item');
  $taskText.classList.add('task-text');
  $taskDone.classList.add('task-btn', 'btn-done');
  $taskRemove.classList.add('task-btn', 'btn-remove');
  $taskEdit.classList.add('task-btn', 'btn-edit');
  $taskBtnHolder.classList.add('task-btn-holder');

  $taskText.innerText = taskObject.value;
  $taskDone.innerText = 'Done';
  $taskEdit.innerText = 'Edit';
  $taskRemove.innerText = 'Remove';

  $taskItem.appendChild($taskText);
  $taskBtnHolder.appendChild($taskDone);
  $taskBtnHolder.appendChild($taskEdit);
  $taskBtnHolder.appendChild($taskRemove);

  $taskItem.setAttribute('data-id', taskObject._id);
  $taskItem.appendChild($taskBtnHolder);

  if (taskObject.checked) {
    $taskText.classList.add('task-done-text');
    $taskEdit.disabled = true;
    $taskDone.innerText = 'Undone';
  }

  return $taskItem;
}

function renderTaskList(taskList) {
  $tasksList.innerHTML = '';

  taskList.forEach(task => {
    $tasksList.prepend(createTask(task));
  });
}

function createEdition(elementObject) {
  const $taskInput = document.createElement('input');
  const $taskItem = elementObject.closest('.task-item');
  const $taskBtnHolder = $taskItem.querySelector('.task-btn-holder');

  $taskInput.classList.add('task-text-edit');
  $taskInput.setAttribute('type', 'text');

  const taskText = $taskItem.querySelector('.task-text').innerText;
  $taskInput.value = taskText;

  $taskItem.querySelector('.task-text').hidden = true;
  $taskItem.querySelector('.btn-done').hidden = true;
  $taskItem.querySelector('.btn-edit').hidden = true;
  $taskItem.querySelector('.btn-remove').hidden = true;

  $taskItem.prepend($taskInput);

  $taskInput.focus();

  const $taskSave = document.createElement('button');
  const $taskCancel = document.createElement('button');

  $taskSave.classList.add('task-btn', 'btn-save');
  $taskCancel.classList.add('task-btn', 'btn-cancel');

  $taskSave.innerText = 'Save';
  $taskCancel.innerText = 'Cancel';

  $taskBtnHolder.appendChild($taskSave);
  $taskBtnHolder.appendChild($taskCancel);
}

function removeEdition(elementObject) {
  elementObject.querySelector('.task-text-edit').remove();
  elementObject.querySelector('.btn-save').remove();
  elementObject.querySelector('.btn-cancel').remove();
}

function showButtons(elementObject) {
  elementObject.querySelector('.task-text').hidden = false;
  elementObject.querySelector('.btn-done').hidden = false;
  elementObject.querySelector('.btn-edit').hidden = false;
  elementObject.querySelector('.btn-remove').hidden = false;
}

function loaderToggle() {
  const $loader = document.querySelector('.loader');
  $loader.classList.toggle('hide');

}

$loginForm.addEventListener('submit', e => {
  e.preventDefault();

  loaderToggle();

  fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      value: $loginInput.value
    })
  }).then(response => response.json())
    .then(dataLogin => {
      state.token = `Bearer ${dataLogin.access_token}`;

      $login.classList.add('hide');
      $todoContent.classList.remove('hide');

      fetch(`${BASE_URL}/todo`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'Authorization': state.token
        }
      }).then(response => response.json())
        .then(dataNotes => {
          state.notes = dataNotes;
          renderTaskList(state.notes);

          loaderToggle();
        });
    });
});

$todoForm.addEventListener('submit', e => {
  e.preventDefault();

  loaderToggle();

  fetch(`${BASE_URL}/todo`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization': state.token
    },
    body: JSON.stringify({
      value: $todoInput.value,
      priority: 1
    })
  }).then(response => response.json())
    .then(note => {
      state.notes.push(note);
      $tasksList.prepend(createTask(note));

      $todoInput.value = '';

      loaderToggle();
    });
});

$tasksList.addEventListener('click', baseEvent => {
  const element = baseEvent.target;
  const targetClassList = element.classList;

  let currentId;

  const btnClass = ['btn-done', 'btn-remove', 'btn-edit'];

  btnClass.forEach(elem => {
    if (targetClassList.contains(elem)) {
      currentId = +element.closest('.task-item').getAttribute('data-id');
    }
  });

  if (targetClassList.contains('btn-done')) {
    loaderToggle();

    fetch(`${BASE_URL}/todo/${currentId}/toggle`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization': state.token
      }
    }).then(response => response.json())
      .then(() => {
        state.notes = state.notes.map(task => ({
          ...task,
          checked: task._id === currentId ? !task.checked : task.checked
        }));

        element
          .closest('.task-item')
          .querySelector('.task-text')
          .classList.add('task-done-text');

        element.disabled = true;

        renderTaskList(state.notes);
        loaderToggle();
      });
  } else if (targetClassList.contains('btn-remove')) {
    loaderToggle();

    fetch(`${BASE_URL}/todo/${currentId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': state.token
      }
    }).then(response => response.json())
      .then(() => {
        state.notes = state.notes.filter(note => note._id !== currentId);
        renderTaskList(state.notes);
        loaderToggle();
      });
  } else if (targetClassList.contains('btn-edit')) {
    createEdition(element);
  }
});

$tasksList.addEventListener('click', editEvent => {
  const element = editEvent.target;
  const $taskItem = element.closest('.task-item');
  const targetID = +$taskItem.getAttribute('data-id');
  const editElement = editEvent.target;
  const editTargetClassList = editElement.classList;

  if (editTargetClassList.contains('btn-save')) {
    loaderToggle();

    const inputText = $tasksList.querySelector('.task-text-edit').value;

    fetch(`${BASE_URL}/todo/${targetID}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Authorization': state.token
      },
      body: JSON.stringify({
        value: inputText,
        priority: 1
      })
    }).then(response => response.json())
      .then(() => {
        state.notes = state.notes.map(task => ({
          ...task,
          value: task._id === targetID ? inputText : task.value
        }));

        renderTaskList(state.notes);
        loaderToggle();
      });

    removeEdition($taskItem);
    showButtons($taskItem);
  } else if (editTargetClassList.contains('btn-cancel')) {
    removeEdition($taskItem);
    showButtons($taskItem);
  }
});