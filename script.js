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
    debugger;
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

// Adding the tasks into the Apps Body (HTML)

// this is the object that contains all the view methods
var view = {
	// this is the method that displays our current tasks to the HTML page
	displayTasks: function(){
			// This line create the container for the list items
			var tasksUl = document.querySelector('ul');
			// This wipes the Whole List on page load
			tasksUl.innerHTML = '';
			for(var i = 0; i < hTask.tasks.length; i++){
				// This line creates the blank Li Element for the HTML page
				var taskLi = document.createElement('li');
				var task = hTask.tasks[i];
				var taskIsCompleted = '';
				// (x) taskText
				// var taskTextCompleted = '';

				//if(taskCompleted === true)
					// (x) taskText
					// else
					// () taskText

					// taskLi.textContent = taskTextCompleted;
				if (hTask.tasks === 0){
					return "Your Task list is empty!"
				} else if (task.completed === true) {
					// This tells the computer what to put in the list item
					taskIsCompleted = '(x) ' + task.taskText;
				} else {
					taskIsCompleted = '( ) ' + task.taskText;
				}
				taskLi.textContent = taskIsCompleted;
				// This line below, tells the system what to do with the list item
				tasksUl.appendChild(taskLi);
		}
	}
};
