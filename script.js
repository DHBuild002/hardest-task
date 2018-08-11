var hTask = {
	tasks: [],

	showTasks: function() {
		if (this.tasks.length === 0) {
			console.log('You have no items in your To-do List - Time to relax!')
		} else {
			console.log('Current Tasks:');
			for(var i = 0; i < this.tasks.length; i++){
				if (this.tasks[i].completed === true){
					console.log('(x)', this.tasks[i].taskText);
				} else {
					console.log('( )', this.tasks[i].taskText);
				}
			}
		}
	},
	addTask: function(taskText) {
		this.tasks.push({
			taskText: taskText,
			completed: false
		});
		this.showTasks(hTask.taskText);
	},
	updateTask: function(position, taskText){
		// this.todos[position] = updatedTask;
		this.tasks[position].taskText = taskText;
		this.showTasks();
	},
	deleteTask: function(position){
		this.tasks.splice(position, 1);
		this.showTasks();
	},
	toggleCompletion: function(position) {
		var task = this.tasks[position];
		task.completed = !task.completed;
		this.showTasks();
	},
	toggleAll: function(){
		var taskCount = this.tasks.length;
		var completedTasks = 0;
		// GET number of completed todos
		for(var i = 0; i < taskCount; i++){
			if (this.tasks[i].completed === true) {
				completedTasks++;
			}
		}
		// if everything is true, make everything false
		if(completedTasks === taskCount){
			for(var i = 0; i < taskCount; i++) {
				this.tasks[i].completed = false;
			}
		} else {
				// Otherwise make everything true
				for(var i = 0; i < taskCount; i++){
					this.tasks[i].completed = true;
				}
		}
		this.showTasks();
		}
};

// Targetting Javascript using HTML
var showTasksButton = document.getElementById('showTasksButton');
console.log(showTasksButton)
	// Run Display Tasks method after click of above button
	showTasksButton.addEventListener('click', function(){
		hTask.showTasks();
	});

// Targetting Javascript using HTML
var completeTasksButton = document.getElementById('completeTasksButton');
console.log(completeTasksButton)
	// Run Display Tasks method after click of above button
	completeTasksButton.addEventListener('click', function(){
		hTask.toggleAll();
	});
