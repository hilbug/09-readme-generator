// Requires...
// Read/write files
const fs = require("fs");
// Util.promisify
const util = require("util");
// Question prompts
const inquirer = require("inquirer");
// Generate markdown function
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a title for your project.'
    }
];

// Prompt User with questions
let promptUser = () => {
    return inquirer.prompt(questions);
}

// function to write README file
// function writeToFile(fileName, data) {
// }
const writeToFile = util.promisify(fs.writeFile);

// function to initialize program - 9-3 ex. 40
let init = async () => {
    console.log("initializing");
    try {
        // Get user answers
        const answers = await promptUser();
        console.log(answers);

        // Write answers to readme
        const readme = generateMarkdown(answers);

        // Save readme to a file
        await writeToFile("README_test.md", readme);

        // File successful
        console.log("Successfully wrote to README_test.md");

    } catch(err) {
        console.log(err);
    }
}

// function call to initialize program
init();
