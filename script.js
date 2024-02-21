// Query for submit button and task input field
const submit = document.querySelector('button[type="submit"]'); 
const newTask = document.getElementById('new-task');

// Disable submit button by default
submit.disabled = true;

// Listen for input in task field
newTask.addEventListener('input', () => {
  // Enable submit if input
  submit.disabled = false; 
});

// Listen for form submission
document.querySelector('form').addEventListener('submit', e => {
  //prevent default form submission
  e.preventDefault();
  // Find user submitted task
  const task = newTask.value;

  // Create list item
  const li = document.createElement('li');

  // Add task text to li
  li.textContent = task;

  // Add li to ul
  document.getElementById('tasks').append(li);

  // Clear input
  newTask.value = '';

  // Disable submit
  submit.disabled = true;

  // Prevent default form submission
  return false;
});