"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo(tasks) {
        if (tasks === void 0) { tasks = []; }
        this.tasks = tasks;
    }
    Todo.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("----- NEW TASK ------>  task \"" + task + "\" was added to the list.");
        return "" + this.tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        this.tasks.forEach(function (task) {
            console.log("" + task);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.tasks.indexOf(task);
        if (index >= 0) {
            this.tasks.splice(index, 1);
            console.log('======== DELETE TASK ========');
        }
        return "" + this.tasks.length;
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
