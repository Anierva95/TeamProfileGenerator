const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const chalk = require('chalk');


const employees = [];

inquirer
  .prompt([
    {
    type: "input",
    message: "Please enter the name of the manager.",
      name: "name"
    },
    {
      type: "input",
      message:"Please enter the manager's Id",
      name: "id"
    },
    {
      type: "input",
      message:"The manager's Email?",
      name: "email"
    },
    {
      type: "input",
      message: "What is the office number of the manager?",
      name: "officeNumber"
    },
    {
        type: "list",
        message: "Would you like to add an additonal employee?",
        name: "addEmployee",
        choices: ['Engineer', 'Intern', 'Neither']
      }

]).then(function(answer) {
    console.log(answer);
    console.log(answer.addEmployee);

    const newManager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
    console.log(newManager);

    employees.push(newManager);
    console.log(chalk.blue.inverse('HERE IS EMPLOYEES'));
    console.log(employees);

    addEmployeeLogic(answer);
});

const addIntern = () => {
    inquirer
  .prompt([
    {
    type: "input",
    message: "Please enter the name of the intern.",
      name: "name"
    },
    {
      type: "input",
      message:"Please enter the intern's Id",
      name: "id"
    },
    {
      type: "input",
      message:"The intern's Email?",
      name: "email"
    },
    {
      type: "input",
      message: "What school is this intern from?",
      name: "school"
    },
    {
        type: "list",
        message: "Would you like to add an additonal employee?",
        name: "addEmployee",
        choices: ['Engineer', 'Intern', 'Neither']
      }

]).then(function(answer) {
    console.log(answer);
    const newIntern = new Intern(answer.name, answer.id, answer.email, answer.school);
    employees.push(newIntern);
    console.log(chalk.blue.inverse('HERE IS EMPLOYEES'));
    console.log(employees);

    addEmployeeLogic(answer);
    
})
}

const addEmployeeLogic = (answer) => {
    if (answer.addEmployee === 'Intern') {
        addIntern();
    }
    else if (answer.addEmployee === 'Engineer') {
        // Add Engineer
    } else {

    }
};