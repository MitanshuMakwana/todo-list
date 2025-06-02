document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();

    if (task === '') {
      alert('Please enter a task!');
      return;
    }

    
    const listItem = document.createElement('li');
    const taskText = document.createElement('span');
    taskText.textContent = task;

    
    taskText.addEventListener('click', () => {
      taskText.classList.toggle('completed');
      listItem.classList.toggle('done-bg');
    });

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

   
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    
    taskInput.value = '';
  });
});
