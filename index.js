// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const text = "text";
const questions = "blue" + text;

const template = questions + text;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('newfile.md', template, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

writeToFile();