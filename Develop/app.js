const fs = require('fs');
const inquirer = require('inquirer');

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
      message: ""
    }

]).then(function(answer) {
    console.log(answer);
    console.log(answer.id)
});