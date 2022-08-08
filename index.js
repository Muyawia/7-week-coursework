//Import the file system, inquirer and the createReadme js file
const fs = require('fs');
const path = require('path');
const inquirer = import('inquirer');
const createReadme = require('./utils/createReadme')

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

function write(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions).then((inquirerReplies) => {
        console.log('...Creating ReadMe...');
        write('ReadMe.md', createReadme({...inquirerReplies}));
    });
}

init();

//inquirer.prompt(console.log('...Creating ReadMe...'));

/* 
    {
        type: "",
        name: "",
        message: "",
    },
*/