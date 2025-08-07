const ToDoList = {
  tasks: [],
  addTask(taskName, taskId, taskPriority) {
    this.tasks.push({
      title: taskName,
      id: taskId,
      priority: taskPriority
    });
  },
  deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  },
  updateTask(taskId, taskName, taskPriority) {
    this.tasks = this.tasks.map(task => {
      if (task.id === taskId) {
        const updatedTask = { ...task };
        if (taskName !== undefined) {
          updatedTask.title = taskName;
        }
        if (taskPriority !== undefined) {
          updatedTask.priority = taskPriority;
        }
        return updatedTask;
      }
      return task;
    });
  },
  sortTasks() {
    this.tasks.sort((a, b) => a.priority - b.priority);
  }
};

ToDoList.addTask('Сделать домашку', 1, 2);
console.log(ToDoList.tasks);
ToDoList.addTask('Погулять с собакой', 2, 1);
console.log(ToDoList.tasks);
ToDoList.addTask('Купить продукты', 3, 3);
console.log(ToDoList.tasks);
ToDoList.updateTask(1, 'Сделать домашку по JS', 1);
console.log(ToDoList.tasks);
ToDoList.updateTask(3, 'Купить продукты и напитки');
console.log(ToDoList.tasks);
ToDoList.updateTask(2, undefined, 2);
console.log(ToDoList.tasks);
ToDoList.updateTask(4, 'Не существующая задача', 1);
console.log(ToDoList.tasks);
ToDoList.deleteTask(2);
console.log(ToDoList.tasks);
ToDoList.sortTasks();
console.log(ToDoList.tasks);