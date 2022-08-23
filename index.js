//Import the file system, inquirer and the createReadme js file
const fs = require('fs');
const path = require('path');
const inquirer = import('inquirer');
const createReadme = require('./utils/createReadme.js');

const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name: "Project title?",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the project breifly",
    },
];

function write(filename, data) {
    fs.writeFile(filename, data, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("File has been written to " + filename);
    });
  }

  async function init() {
    const filename = "README.md";
    const responses = await inquirer.prompt([questions]);
    console.log("Form complete :)");
  
    const markDown = generateMarkDown(responses);
  
    createReadme(filename, markDown);
  }

init();