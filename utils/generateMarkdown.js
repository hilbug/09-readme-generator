// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![License: ${data.license.toUpperCase()}](https://img.shields.io/badge/License-${data.license.toUpperCase()}-brightgreen.svg)]

## Description
${data.description}  

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Installation
${data.installation} 

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Contact email: ${data.email}\n
GitHub Profile: [${data.github}](https://github.com/${data.github})
${data.addlquestions}

## License
This project is licensed under the terms of the ${data.license.toUpperCase()} license.
`;
}

module.exports = generateMarkdown;

/* README Format from Good-README-Guide
Title
License badge
  https://shields.io/category/license
  https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
Description
Table of contents (Links)
Sections:
  Installation
  Usage
  Contributing
  Tests
  Questions
    Email
    GitHub Profile link
  License
*/

