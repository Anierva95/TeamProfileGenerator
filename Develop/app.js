const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
    type: "input",
    message: "Hello manager, what is your name?",
      name: "name"
    },
    {
      type: "input",
      message:"And your Id?",
      name: "id"
    },
    {
      type: "input",
      message:"Lastly, your email?",
      name: "email"
    }
]).then(function(answer) {
    console.log(answer);
    console.log(answer.id)
});