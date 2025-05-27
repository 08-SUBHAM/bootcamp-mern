// Task Manager Application

// Task class to create task objects
class Task {
  constructor(id, title, priority = 'medium', completed = false) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.completed = completed;
    this.createdAt = new Date();
  }

  toggleComplete() {
    this.completed = !this.completed;
    return this.completed;
  }

  updatePriority(newPriority) {
    const validPriorities = ['low', 'medium', 'high'];
    if (validPriorities.includes(newPriority)) {
      this.priority = newPriority;
      return true;
    }
    return false;
  }
}

// Task Manager class to manage tasks
class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextId = 1;
  }

  addTask(title, priority = 'medium') {
    const task = new Task(this.nextId++, title, priority);
    this.tasks.push(task);
    return task;
  }

  deleteTask(id) {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this.tasks.length !== initialLength;
  }

  getTask(id) {
    return this.tasks.find(task => task.id === id);
  }

  getTasksByPriority(priority) {
    return this.tasks.filter(task => task.priority === priority);
  }

  getCompletedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  getPendingTasks() {
    return this.tasks.filter(task => !task.completed);
  }

  // Example of using array methods
  getTaskStats() {
    const total = this.tasks.length;
    const completed = this.getCompletedTasks().length;
    const pending = total - completed;
    
    const priorityCounts = this.tasks.reduce((acc, task) => {
      acc[task.priority] = (acc[task.priority] || 0) + 1;
      return acc;
    }, {});

    return {
      total,
      completed,
      pending,
      byPriority: priorityCounts
    };
  }
}

// Example usage
const myTasks = new TaskManager();

// Add some tasks
myTasks.addTask('Learn JavaScript', 'high');
myTasks.addTask('Practice coding', 'high');
myTasks.addTask('Read documentation', 'medium');
myTasks.addTask('Take a break', 'low');

// Complete a task
const firstTask = myTasks.getTask(1);
if (firstTask) {
  firstTask.toggleComplete();
}

// Get and display stats
const stats = myTasks.getTaskStats();
console.log('Task Statistics:', stats);
console.log('All Tasks:', myTasks.tasks);
console.log('Pending Tasks:', myTasks.getPendingTasks());
console.log('High Priority Tasks:', myTasks.getTasksByPriority('high'));

// This code demonstrates:
// 1. Classes and objects
// 2. Array methods (filter, find, reduce, push)
// 3. Default parameters
// 4. Date handling
// 5. Object manipulation
// 6. Conditional logic
// 7. Method chaining