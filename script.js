var hTask = {
  tasks: [
			{taskText: "Eat", completed: false},
			{taskText: "Dance", completed: false},
			{taskText: "Be Merry", completed: false}
		],
  addTask: function(taskText) {
    this.tasks.push({taskText: taskText, completed: false});
  },
  renameTask: function(position, taskText) {
    this.tasks[position].taskText = taskText;
  },
  removeTask: function(position) {
    this.tasks.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var task = this.tasks[position];
    task.completed = !task.completed;
  },
  toggleAll: function() {
    var taskCount = this.tasks.length;
    var completedTasks = 0;
    for (var i = 0; i < taskCount; i++) {
      if (this.tasks[i].completed === true) {
        completedTasks++;
      }
    }
    if (completedTasks === taskCount) {
      for (var i = 0; i < taskCount; i++) {
        this.tasks[i].completed = false;
      }
    } else {
      for (var i = 0; i < taskCount; i++) {
        this.tasks[i].completed = true;
      }
    }
  }
};

var handlers = {
	addTask: function(){
		var addTaskInput = document.getElementById('addTaskInput');
		hTask.addTask(addTaskInput.value);
		addTaskInput.value = '';
		view.displayTasks();
	},
	renameTask: function() {
		var renameTaskText = document.getElementById('renameTaskText');
		var renameTaskPosition = document.getElementById('renameTaskPosition');

		hTask.renameTask(renameTaskPosition.valueAsNumber, renameTaskText.value);
		renameTaskPosition.value = '';
		renameTaskText.value = '';
		view.displayTasks();
	},
	removeTask: function() {
		var removeTaskPosition = document.getElementById('removeTaskPosition');
		hTask.removeTask(removeTaskPosition.valueAsNumber);
		removeTaskPosition.value = '';
		view.displayTasks();
	},
	toggleAll: function() {
  	hTask.toggleAll();
	},
	toggleCompleted: function() {
		var toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
		hTask.toggleCompleted(toggleCompletedPosition.valueAsNumber);
		toggleCompletedPosition.value = '';
		view.displayTasks();
	}
};

var view = {
	displayTasks: function(){
			var tasksUl = document.querySelector('ul');
			tasksUl.innerHTML = '';
			for(var i = 0; i < hTask.tasks.length; i++){
				
				var taskLi = document.createElement('li');
				var task = hTask.tasks[i];
				var taskIsCompleted = '';
				if (hTask.tasks === 0){
					return "Your Task list is empty!"
				} else if (task.completed === true) {
					taskIsCompleted = '(x) ' + task.taskText;
				} else {
					taskIsCompleted = '( ) ' + task.taskText;
				}
        // Line Below: adding the ID of each task in before appending the remove task buttons
        taskLi.id = i;
      
				taskLi.textContent = taskIsCompleted;
        // Line Below: Adds a remove task button next to each item in the list
        taskLi.appendChild(this.addRemoveButton());
				tasksUl.appendChild(taskLi);
		}
  },
      addRemoveButton: function(){
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Task';
        removeButton.className = 'removeButton';
        return removeButton;
      }
	};

// Setting up an Event listener to the whole Unordered list
var eventsInUl = document.querySelector('ul');
eventsInUl.addEventListener('click', function(event) {
  // Line Below: Targets the Click event inside of the UL then gives you all the dom information about that click event
  // Using one of the properties named ParentNode, you can access the ID in the parenting LI
  console.log(event.target.parentNode.id);
});