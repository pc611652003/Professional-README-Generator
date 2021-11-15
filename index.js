// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
                        type: 'input',
                        name: 'username',
                        message: 'What is your GitHub username?',
                        validate: usernameInput => {
                            if (usernameInput) {
                                return true;
                            } else {
                                console.log('Please enter your GitHub username!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is your email address?',
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log('Please enter your email address!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'title',
                        message: 'What is the name of your project?',
                        validate: titleInput => {
                            if (titleInput) {
                                return true;
                            } else {
                                console.log('Please enter the name of your project!');
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'description',
                        message: 'Please write a short description of your project :'
                    },
                    {
                        type: 'list',
                        name: 'license',
                        message: 'What kind of license should your project have?',
                        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3',
                                 'Mozilla Public License 2.0', 'Apache License 2.0',
                                 'MIT License', 'Boost Software License 1.0', 'None']
                    },
                    {
                        type: 'input',
                        name: 'installCommand',
                        message: 'What command should be run to install dependencies?',
                        default: 'npm i'
                    },
                    {
                        type: 'input',
                        name: 'testCommand',
                        message: 'What command should be run to run tests?',
                        default: 'npm test'
                    },
                    {
                        type: 'input',
                        name: 'usageInstruction',
                        message: 'What does the user need to know about using the repo?'
                    },
                    {
                        type: 'input',
                        name: 'contributing',
                        message: 'What does the user need to know about contributing to the repo?'
                    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    const readmeText = generateMarkdown(data);

    console.log(readmeText);
    
    fs.writeFile(`./${fileName}`, readmeText, err => {
        if (err) throw err;
        console.log(`${fileName} is generated. Please check and confirm the result.`);
    })

}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
            .then(answers => {
                writeToFile('README.md', answers);
            });
            
}

// Function call to initialize app
init();