// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// Starts inquirer to prompt the user for input data

inquirer.prompt([
  {
    name: "project_title",
    type: "input",
    message: "What is your project's title?",
  },
  {
    name: "description_text",
    type: "input",
    message: "Enter your project's description:",
  },
  {
    name: "installation_text",
    type: "input",
    message: "Enter your project's installation information:",
  },
  {
    name: "usage_text",
    type: "input",
    message: "Enter your project's usage information:",
  },
  {
    name: "license_text",
    type: "input",
    message: "Enter your project's license information:",
  },
  {
    name: "contribution_text",
    type: "input",
    message: "Enter your project's Contribution Guidelines:",
  },
  {
    name: "tests_text",
    type: "input",
    message: "Enter your project's test information:",
  },
  {
    name: "questions_text",
    type: "input",
    message: "Enter your project's question information:",
  },
  {
    name: "link_text",
    type: "input",
    message: "Enter your project's deployed location URL: https://",
  },
  {
    name: "screenshot_text",
    type: "input",
    message: "Enter a URL to a screenshot of your project: ",
  },
])
.then((answer) => {
  console.log(answer.project_title);

// Sets variables for the text sections in the ReadMe file and assigns them the input value

let projectTitle = answer.project_title;
let descriptionText = answer.description_text;
let installationText = answer.installation_text;
let usageText = answer.usage_text;
let licenseText = answer.license_text;
let contributionText = answer.contribution_text;
let testsText = answer.tests_text;
let questionsText = answer.questions_text;
let linkText = "URL: https://" + answer.link_text;
let screenshotText = "![Screenshot](" + answer.screenshot_text + ")  \n";

// Creates variables for each section of the ReadMe and assigns them string values

const title = "# "+ projectTitle;
const description = "\n<a name='description'></a>\n ## Description \n" + descriptionText;
const tableOfContents = 
"\n## Table of Contents  \n"
+" 1. [ Description. ](#description)  \n" 
+" 2. [ Installation. ](#installation)  \n" 
+" 3. [ Usage tips. ](#usage)  \n"
+" 4. [ License. ](#license)  \n"
+" 5. [ Contribution Guidelines. ](#contribution)  \n"
+" 6. [ Tests. ](#tests)  \n"
+" 7. [ Questions. ](#questions)  \n"
+" 8. [ Deployment Location. ](#link)  \n" 
+" 9. [ Screenshot. ](#screenshot)  \n";

const installation = "\n <a name='installation'></a>\n ## Installation \n " + installationText;
const usage = "\n <a name='usage'></a>\n ## Usage \n" + usageText;
const license = "\n <a name='license'></a>\n ## License \n" + licenseText;
const contribution = "\n <a name='contribution'></a>\n ## Contribution Guidelines \n" + contributionText;
const tests = "\n <a name='tests'></a>\n ## Tests \n" + testsText;
const questions = "\n <a name='questions'></a>\n ## Questions \n" + questionsText;
const link = "\n <a name='link'></a>\n ## Deployment Location \n" + linkText;
const screenshot = "\n <a name='screenshot'></a>\n ## Screenshot: \n" + screenshotText;

// Compiles a template ReadMe from the variables above. 

const template = title + description + tableOfContents + installation + usage + license + contribution + tests
                + questions + link + screenshot;

// Creates a function to write ReadMe file using the template
function writeToFile(fileName, data) {
    fs.writeFile('README.md', template, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
}

writeToFile();
});



// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();

