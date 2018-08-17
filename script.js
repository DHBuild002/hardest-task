var hTask = {
      tasks: [{
            taskText: "Eat",
            completed: false
         },
         {
            taskText: "Dance",
            completed: false
         },
         {
            taskText: "Be Merry",
            completed: false
         }
      ],
      addTask: function(taskText) {
         this.tasks.push({
            taskText: taskText,
            completed: false
         });
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
      toggleAll: function(){
        debugger;
            var taskCount = this.tasks.length;
            var completedTasks = 0;
        
        this.tasks.forEach(function(task){
          if(task.completed === true){
            completedTasks++;          
          }
        });
        this.tasks.forEach(function(task){
              if(completedTasks === taskCount){
                task.completed = false;
        } else {
                task.completed = true;
              }
            });
      }
};       
              
            var handlers = {
               addTask: function() {
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
               removeTask: function(position) {
                  hTask.removeTask(position);
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
               displayTasks: function() {
                  var tasksUl = document.querySelector('ul');
                  tasksUl.innerHTML = '';
                  for (var i = 0; i < hTask.tasks.length; i++) {

                     var taskLi = document.createElement('li');
                     var task = hTask.tasks[i];
                     var taskIsCompleted = '';
                    
                     if (hTask.tasks === 0) {
                        return "Your Task list is empty!"
                     } else if (task.completed === true) {
                        taskIsCompleted = '(x) ' + task.taskText;
                     } else {
                        taskIsCompleted = '( ) ' + task.taskText;
                     }
                     taskLi.id = i;

                     taskLi.textContent = taskIsCompleted;
                     taskLi.appendChild(this.addRemoveButton());
                     tasksUl.appendChild(taskLi);
                  }
               },
               addRemoveButton: function() {
                  var removeButton = document.createElement('button');
                  removeButton.textContent = 'Remove Task';
                  removeButton.className = 'removeButton';
                  return removeButton;
               },
               createEventListeners: function() {
                  var tasksUl = document.querySelector('ul');

                  tasksUl.addEventListener('click', function(event) {
                     // console.log(event.target.parentNode.id);

                     var elementClicked = event.target;
                     if (elementClicked.className === 'removeButton') {
                        handlers.removeTask(parseInt(elementClicked.parentNode.id));
                     }
                  });
               }
            };
            view.displayTasks();
            view.createEventListeners();