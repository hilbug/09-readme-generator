# README&#46;md Generator
![Depfu](https://img.shields.io/depfu/hilbug/09-readme-generator) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
A command-line application that dynamically generates a professional README&#46;md from a user's input using the Inquirer npm package. The README file will contain the following sections: Title, License Badge, Description, Installation, Usage, Contributing, Tests, Questions, and License. Each section's details will be added based on the user's answers to the prompts.

Technologies used: node.js, npm, inquirer

Contact: hil.ferraro@gmail.com

## Installation
To start using this application, first ensure you have Node.js and npm installed. Then follow these steps:
1. Fork this repository
2. Run `npm init`
3. Run `npm install inquirer`
4. Run `node index.js` to start the application.

## Usage
1. When the application starts, answer each prompt or leave blank.
2. When all questions have been answered, a file named README_demo&#46;md will be generated within the local folder. 
![Screen Shot 2020-08-20 at 11 12 35 PM](https://user-images.githubusercontent.com/65197724/90848441-e81c5280-e33a-11ea-8834-f4e750f3bf47.png)

### Video Demo
View a video providing a walk-through of the application [here](https://drive.google.com/file/d/1MMK4GyxDCSeu2jjALhZ1f_CZ_spNe9qv/view).


## Honorable Mentions
- Inquirer: https://www.npmjs.com/package/inquirer
- License Badges: https://gist.github.com/artem-solovev/e1602722f84835f35daef4dfb3df5500
- Depfu: https://depfu.com/
- Many thanks to @LivesInRoom29 and @tiffany-brand for their assistance with displaying the approrpiate license badge.

## User Story

```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```
