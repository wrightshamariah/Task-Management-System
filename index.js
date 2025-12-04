let input = require('prompt-sync')();


let taskNames = [];
let taskDurations = [];

let taskName1 = input("Enter name: ");
let taskName2 = input("Enter name: ");
let taskName3 = input("Enter name: ");

taskNames.push(taskName1);
taskNames.push(taskName2);
taskNames.push(taskName3);

console.table(taskNames);

let totalTasks = Number(input("How many tasks do you want to enter? "));

for (let i = 0; i < totalTasks; i++) {
    let name = input(`Enter task #${i + 1} name: `);
    let duration = input(`Enter duration for "${Number}" in hours: `);
}
    taskNames.push(name);
    taskDurations.push(Number(duration));


console.log("taskName:");
console.table(taskName);

console.log("Task Durations:");
console.table(taskDurations);