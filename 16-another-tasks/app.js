function createTaskManager(initialTasks = []) {
  let tasks = [...initialTasks];
  return {
    getTasks() {
      return tasks;
    },
    addTask(name, id, order, description = '') {
      tasks.push({ id, name, order, description });
    },
    updateTask(id, name, order, description) {
      tasks = tasks.map(task =>
        task.id === id
          ? {
              ...task,
              ...(name !== undefined && { name }),
              ...(order !== undefined && { order }),
              ...(description !== undefined && { description })
            }
          : task
      );
    },
    sortTasks() {
      tasks.sort((a, b) => a.order - b.order);
    },
    deleteTask(id) {
      tasks = tasks.filter(task => task.id !== id);
    }
  };
}

const newTask = {
  tasks: [
    {
      id: 1,
      name: 'тест',
      description: 'описание',
      order: 0
    }
  ]
};

// Использование Task Manager с замыканием
const manager = createTaskManager(newTask.tasks);
manager.addTask('новая задача', 2, 1, 'описание 2');
manager.updateTask(1, 'обновлено', 0, 'обновлённое описание');
manager.sortTasks();
manager.deleteTask(2);
console.log(manager.getTasks());






