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
  return `https://img.shields.io/badge/license-${badgeMessage}-brightgreen`;
}

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

function renderQuestionSection(username, email) {
  var githubLink = `https://github.com/${username}`;
  return `
If you have any questions about the repo, open an issueor contact me directly at ${email}.
You can find more of my work at [${username}](${githubLink}).
    `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}(${renderLicenseBadge(data.license)})

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
## Usage
## Features
## Credits
## License
${renderLicenseSection(data.license)}
## Contributing
## Tests
## Questions
${renderQuestionSection(data.username, data.email)}
`;
}

module.exports = generateMarkdown;