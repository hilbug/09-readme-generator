// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  

`;
}

module.exports = generateMarkdown;

/* README Format from Good-README-Guide
Title
License badge 
  https://shields.io/category/license
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

