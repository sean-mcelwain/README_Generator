// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const text = "text";
const questionInquirer = "blue" + text;


const title = "# Project Title  \n";
const description = "# Description \n Description Text  \n";
const tableOfContents = 
"# Table of Contents  \n"
+" 1. [ Description. ](#description)  \n" 
+" 2. [ Installation. ](#description)  \n" 
+" 3. [ Usage tips. ](#usage)  \n"
+" 4. [ License. ](#license)  \n"
+" 5. [ Contribution Guidelines. ](#contribution)  \n"
+" 6. [ Tests. ](#tests)  \n"
+" 7. [ Questions. ](#questions)  \n"
+" 8. [ Deployment Location. ](#link)  \n" 
+" 9. [ Screenshot. ](#screenshot)  \n"

const installation = "<a name='installation'></a> # Installation \n Installation Text  \n"
const usage = "<a name='usage'></a> # Usage \n Usage Text  \n"
const license = "<a name='license'></a> # License \n License Text  \n"
const contribution = "<a name='contribution'></a> # Contribution Guidelines \n Guidelines Text  \n"
const tests = "<a name='tests'></a> # Tests \n Test Text  \n"
const questions = "<a name='tests'></a> # Tests \n Test Text  \n"
const link = "<a name='link'></a> # Deployment Location \n URL  \n"
const screenshot = "<a name='screenshot'></a> # Screenshot: \n ![Screenshot](https://github.com/sean-mcelwain/weather_dashboard/blob/main/assets/images/screenshot.jpg)  \n"








const template = title + description + tableOfContents + installation + usage + license + contribution + tests
                + questions + link + screenshot;

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