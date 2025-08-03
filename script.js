document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeBtn.classList.add("remove-btn");

        removeButton.onclick = function () {
            li.remove(); 
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage and display them
    loadTasks();

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => {
            addTask(taskText, false); // Load without re-saving
        });
    }

    // Save all current tasks to Local Storage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#task-list li').forEach(li => {
            // Get the text without the remove button
            const taskText = li.firstChild.textContent;
            tasks.push(taskText);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to add a new task to the list
    function addTask(taskText, save = true) {
        if (typeof taskText !== 'string') {
            taskText = taskInput.value.trim();
        }

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create  list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create  "Remove" button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add = 'remove-btn';

        // Add event to remove button
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            saveTasks(); // Update Local Storage after removal
        };

        //  button to list item and list item to task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = '';

        // Save to Local Storage if needed
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }
    }

    // Add task on button click
    addButton.addEventListener('click', () => addTask());

    // Add task on Enter key press
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
