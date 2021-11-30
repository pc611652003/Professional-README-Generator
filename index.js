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

// Function to Collect Collaborator Info
const promptCollaborator = promptData => {
    if (!promptData.collaborator) {
        promptData.collaborator = [];
    }
    return inquirer.prompt([
                        {
                            type: 'confirm',
                            name: 'addCollaborator',
                            message: 'Do you want to add a collaborator?',
                            default: false
                        }
                    ])
                    .then(confirmAnswer => {
                        if (confirmAnswer.addCollaborator) {
                            return inquirer.prompt([
                                                {
                                                    type: 'input',
                                                    name: 'collaboratorName',
                                                    message: 'What is the name of the collaborator?',
                                                    validate: collaboratorName => {
                                                        if (collaboratorName) {
                                                            return true;
                                                        } else {
                                                            console.log('Please enter the name of the collaborator!');
                                                            return false;
                                                        }
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'GitHubUsername',
                                                    message: 'What is the GitHub username of the collaborator?',
                                                    validate: GitHubUsername => {
                                                        if (GitHubUsername) {
                                                            return true;
                                                        } else {
                                                            console.log('Please enter the GitHub username of the collaborator!');
                                                            return false;
                                                        }
                                                    }
                                                }
                                            ])
                                            .then(collaboratorData => {
                                                promptData.collaborator.push(collaboratorData);
                                                return promptCollaborator(promptData);
                                            });
                        } else {
                            return promptData;
                        }
                    })
};

// Function to Collect Third Party Asset Info
const promptThirdPartyAsset = promptData => {
    if (!promptData.thirdPartyAsset) {
        promptData.thirdPartyAsset = [];
    }
    return inquirer.prompt([
                        {
                            type: 'confirm',
                            name: 'addThirdPartyAsset',
                            message: 'Do you want to add a third-party asset?',
                            default: false
                        }
                    ])
                    .then(confirmAnswer => {
                        if (confirmAnswer.addThirdPartyAsset) {
                            return inquirer.prompt([
                                                {
                                                    type: 'input',
                                                    name: 'assetName',
                                                    message: 'What is the name of the asset?',
                                                    validate: assetName => {
                                                        if (assetName) {
                                                            return true;
                                                        } else {
                                                            console.log('Please enter the name of the asset!');
                                                            return false;
                                                        }
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'creatorName',
                                                    message: 'What is the name of the creator?',
                                                    validate: creatorName => {
                                                        if (creatorName) {
                                                            return true;
                                                        } else {
                                                            console.log('Please enter the name of the creator!');
                                                            return false;
                                                        }
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'webPresence',
                                                    message: 'What is the primary web presence of the creator?',
                                                    validate: webPresence => {
                                                        if (webPresence) {
                                                            return true;
                                                        } else {
                                                            console.log('Please enter the primary web presence of the creator!');
                                                            return false;
                                                        }
                                                    }
                                                }
                                            ])
                                            .then(thirdPartyAssetData => {
                                                promptData.thirdPartyAsset.push(thirdPartyAssetData);
                                                return promptThirdPartyAsset(promptData);
                                            });
                        } else {
                            return promptData;
                        }
                    })
};

// Function to Collect Tutorials Info
const promptTutorials = promptData => {
    if (!promptData.tutorial) {
        promptData.tutorial = [];
    }
    return inquirer.prompt([
                        {
                            type: 'confirm',
                            name: 'addTutorial',
                            message: 'Do you want to add a tutorial?',
                            default: false
                        }
                    ])
                    .then(confirmAnswer => {
                        if (confirmAnswer.addTutorial) {
                            return inquirer.prompt([
                                                {
                                                    type: 'input',
                                                    name: 'tutorialName',
                                                    message: 'What is the name of the tutorial?',
                                                    validate: tutorialName => {
                                                        if (tutorialName) {
                                                            return true;
                                                        } else {
                                                            console.log('Please enter the name of the tutorial!');
                                                            return false;
                                                        }
                                                    }
                                                },
                                                {
                                                    type: 'input',
                                                    name: 'tutorialLink',
                                                    message: 'What is the link of the tutorial?',
                                                    validate: tutorialLink => {
                                                        if (tutorialLink) {
                                                            return true;
                                                        } else {
                                                            console.log('Please enter the link of the tutorial!');
                                                            return false;
                                                        }
                                                    }
                                                }
                                            ])
                                            .then(tutorialData => {
                                                promptData.tutorial.push(tutorialData);
                                                return promptTutorials(promptData);
                                            });
                        } else {
                            return promptData;
                        }
                    })
};

// Function to Collect Features
const promptFeatures = promptData => {
    if (!promptData.feature) {
        promptData.feature = [];
    }
    return inquirer.prompt([
                        {
                            type: 'confirm',
                            name: 'addFeature',
                            message: 'Do you want to list a feature?',
                            default: false
                        }
                    ])
                    .then(confirmAnswer => {
                        if (confirmAnswer.addFeature) {
                            return inquirer.prompt([
                                                {
                                                    type: 'input',
                                                    name: 'featureInfo',
                                                    message: 'Describe the feature:',
                                                    validate: featureInfo => {
                                                        if (featureInfo) {
                                                            return true;
                                                        } else {
                                                            console.log('Please describe the feature!');
                                                            return false;
                                                        }
                                                    }
                                                }
                                            ])
                                            .then(featureData => {
                                                promptData.feature.push(featureData);
                                                return promptFeatures(promptData);
                                            });
                        } else {
                            return promptData;
                        }
                    })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    const readmeText = generateMarkdown(data);

    fs.writeFile(`./dist/${fileName}`, readmeText, err => {
        if (err) throw err;
        console.log(`${fileName} is generated. Please check and confirm the result.`);
    })

};

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
            .then(promptCollaborator)
            .then(promptThirdPartyAsset)
            .then(promptTutorials)
            .then(promptFeatures)
            .then(answers => {
                writeToFile('README.md', answers);
            });
            
}

// Function call to initialize app
init();