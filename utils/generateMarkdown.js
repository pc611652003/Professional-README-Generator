// # Title - Badge
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeMessage = "";
  switch(license) {
    case 'GNU AGPLv3':
        badgeMessage = "AGPL-3.0";
      break;
    case 'GNU GPLv3':
        badgeMessage = "GPL-3.0";
      break;
    case 'GNU LGPLv3':
        badgeMessage = "LGPL-3.0";
      break;
    case 'Mozilla Public License 2.0':
        badgeMessage = "MPL-2.0";
      break;
    case 'Apache License 2.0':
        badgeMessage = "Apache-2.0";
      break;
    case 'MIT License':
        badgeMessage = "MIT";
      break;
    case 'Boost Software License 1.0':
        badgeMessage = "BSL-1.0";
      break;
    case 'None':
      return "";
  }
  return `![${badgeMessage}](https://img.shields.io/static/v1?label=license&message=${badgeMessage}&color=brightgreen "Badge")`;
}

// ## Description
// TODO: Create a function that returns the desciption section of README
// If there is no description, return an empty string
function renderDescriptionSection(description) {
  if (description) {
    return `
${description}
    `;
  } else {
    return `
    
    `;
  }
}

// ## Installation
// TODO: Create a function that returns the installation section of README
// If there is no installation command, return an empty string
function renderInstallationSection(installCommand) {
  if (installCommand) {
    return `
To install necessary dependencies, run the following commands:
${installCommand}
    `;
  } else {
    return `
    
    `;
  }
}

// ## Usage
// TODO: Create a function that returns the usage section of README
// If there is no usage instruction, return an empty string
function renderUsageSection(usageInstruction) {
  if (usageInstruction) {
    return `
To use the application, run the following instructions:
${usageInstruction}
    `;
  } else {
    return `
    
    `;
  }
}

// ## Feature
// TODO: Create a function that returns the features section of README
// If there is no feature, return an empty string
function renderFeatureSection(feature) {
  if (feature.length == 0) {
    return `
    
`;
  } else {
    var featureText = ``;
    for (var i = 0; i < feature.length; i++) {
      featureText = `${featureText}
 - ${feature[i].featureInfo}`
    }
    featureText = `${featureText}
`;
    return featureText;
  }
}

// ## Credits - Collaborators
// TODO: Create a function that returns the collaborators part of the credits section of README
// If there is no collaborator, return an empty string
function renderCollaboratorPart(collaborator) {
  if (collaborator.length == 0) {
    return ``;
  } else {
    var collaboratorText = `
Collaborators:`;
    for (var i = 0; i < collaborator.length; i++) {
      var collaboratorLink = `https://github.com/${collaborator[i].GitHubUsername}`
      collaboratorText = `${collaboratorText}
Name: ${collaborator[i].collaboratorName}, GitHub Profile: [${collaboratorLink}](${collaboratorLink})`
    }
    collaboratorText = `${collaboratorText}
`;
    return collaboratorText;
  }
}

// ## Credits - Third-Party Assets
// TODO: Create a function that returns the third-party asset part of the credits section of README
// If there is no third-party asset, return an empty string
function renderThirdPartyAssetPart(thirdPartyAsset) {
  if (thirdPartyAsset.length == 0) {
    return ``;
  } else {
    var thirdPartyAssetText = `
Third-Party Assets:`;
    for (var i = 0; i < thirdPartyAsset.length; i++) {
      thirdPartyAssetText = `${thirdPartyAssetText}
Asset Name: ${thirdPartyAsset[i].assetName}, Creator: ${thirdPartyAsset[i].creatorName}, Web: [${thirdPartyAsset[i].webPresence}](${thirdPartyAsset[i].webPresence})`
    }
    thirdPartyAssetText = `${thirdPartyAssetText}
`;
    return thirdPartyAssetText;
  }
}

// ## Credits - Tutorials
// TODO: Create a function that returns the tutorials part of the credits section of README
// If there is no tutorial, return an empty string
function renderTutorialsPart(tutorial) {
  if (tutorial.length == 0) {
    return ``;
  } else {
    var tutorialText = `
Tutorials:`;
    for (var i = 0; i < tutorial.length; i++) {
      tutorialText = `${tutorialText}
Tutorial Name: ${tutorial[i].tutorialName}, Link: [${tutorial[i].tutorialLink}](${tutorial[i].tutorialLink})`
    }
    tutorialText = `${tutorialText}
`;
    return tutorialText;
  }
}

// ## Credits
// TODO: Create a function that returns the credits section of README
// If there is no credits, return an empty string
function renderCreditsSection(collaborator, thirdPartyAsset, tutorial) {
  var creditText = ``;
  if ((collaborator.length == 0) && (thirdPartyAsset.length == 0) && (tutorial.length == 0)) {
    creditText = `

`;
  } else {
    creditText = `${renderCollaboratorPart(collaborator)}${renderThirdPartyAssetPart(thirdPartyAsset)}${renderTutorialsPart(tutorial)}`;
  }
  return creditText;
}

// ## License - Link
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'GNU AGPLv3':
      return "https://spdx.org/licenses/AGPL-3.0-or-later.html";
    case 'GNU GPLv3':
      return "https://spdx.org/licenses/GPL-3.0-or-later.html";
    case 'GNU LGPLv3':
      return "https://spdx.org/licenses/LGPL-3.0-or-later.html";
    case 'Mozilla Public License 2.0':
      return "https://spdx.org/licenses/MPL-2.0.html";
    case 'Apache License 2.0':
      return "https://spdx.org/licenses/Apache-2.0.html";
    case 'MIT License':
      return "https://spdx.org/licenses/MIT.html";
    case 'Boost Software License 1.0':
      return "https://spdx.org/licenses/BSL-1.0.html";
    case 'None':
      return "";
  }
}

// ## License
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return `
    
    `;
  } else {
    var licenseLink = renderLicenseLink(license);
    return `
This project is licensed under the ${license}.
License Readme Link: [${licenseLink}](${licenseLink})
    `;
  }
}

// ## Contributing
// TODO: Create a function that returns the contributing section of README
// If there is no contribution guideline, return an empty string
function renderContributingSection(contributing) {
  if (contributing) {
    return `
${contributing}}
    `;
  } else {
    return `
    
    `;
  }
}

// ## Tests
// TODO: Create a function that returns the tests section of README
// If there is no test command, return an empty string
function renderTestSection(testCommand) {
  if (testCommand) {
    return `
To test the application, run the following commands:
${testCommand}
    `;
  } else {
    return `
    
    `;
  }
}

// ## Questions
// TODO: Create a function that returns the questions section of README
function renderQuestionSection(username, email) {
  var githubLink = `https://github.com/${username}`;
  return `
If you have any questions about the repo, open an issueor contact me directly at ${email}.
You can find more of my work at [${username}](${githubLink}).
    `;
}

// README.md
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.license)}

## Description
${renderDescriptionSection(data.description)}
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${renderInstallationSection(data.installCommand)}
## Usage
${renderUsageSection(data.usageInstruction)}
## Features
${renderFeatureSection(data.feature)}
## Credits
${renderCreditsSection(data.collaborator, data.thirdPartyAsset, data.tutorial)}
## License
${renderLicenseSection(data.license)}
## Contributing
${renderContributingSection(data.contributing)}
## Tests
${renderTestSection(data.testCommand)}
## Questions
${renderQuestionSection(data.username, data.email)}
`;
}

module.exports = generateMarkdown;