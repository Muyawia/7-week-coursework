//require packages for functionality and format for read me for data to be sent to
const inquirer = require("inquirer");
const fs = require("fs");
const createReadme = require("./utils/createReadme.js");
//list of questions to be asked by inquirier prompt
const questions = [
  {
    type: "input",
    message: "What's the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Now describe your project...",
    name: "description",
  },
  {
    type: "input",
    message: "What is your Github username? (No @ needed)",
    name: "github",
    default: "Github Username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];
//write to fs
function write(file, data) {
  fs.writeFile(file, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Successfully wrote to " + file);
  });
}
//initialise program, ask questions, record answers and generate readme using imported js file
async function init() {
  const file = "README.md";
  const responses = await inquirer.prompt(questions);
  console.log("Thank you for your answers!");

  const generate = createReadme(responses);

  write(file, generate);
}
//run first function
init();