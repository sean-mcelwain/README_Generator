// Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// Starts inquirer to prompt the user for input data
const licenseArray = ["MIT License", "Apache License 2.0", "BSD License (3-Clause)"]

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
    type: "checkbox",
    message: "Select your project's license:",
    choices: licenseArray,
  },
  {
    name: "year",
    type: "input",
    message: "Enter your project's Copyright Year:",
  },
  {
    name: "copyrightHolder",
    type: "input",
    message: "Enter the name of the Copyright Holder:",
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
    name: "GitHub_link",
    type: "input",
    message: "Enter your GitHub username:",
  },  
  {
    name: "email_text",
    type: "input",
    message: "Enter Your email address for questions: ",
  },  
  {
    name: "questions_text",
    type: "input",
    message: "Enter your project's question information:",
  },

])
.then((answer) => {

// Sets variables for the text sections in the ReadMe file and assigns them the input value

let projectTitle = answer.project_title;
let descriptionText = answer.description_text;
let installationText = answer.installation_text;
let usageText = answer.usage_text;
let licenseText;
let badge;

    let year = answer.year;
    let copyrightHolder = answer.copyrightHolder;

    const MIT_license = "The MIT License (MIT) \n Copyright © " + year +" "+ copyrightHolder + ". \n"
    + "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: \n"
    + "The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. \n"
    + "THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";

    const apacheLicense = "Apache License 2.0 \n Copyright © " + year +" "+ copyrightHolder + ". \n"
    + "Licensed under the Apache License, Version 2.0 (the 'License'); \n"
    + "you may not use this file except in compliance with the License. \n"
    + "You may obtain a copy of the License at: \n http://www.apache.org/licenses/LICENSE-2.0 \n"
    + "Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. \n"
    + "See the License for the specific language governing permissions and limitations under the License.";

    const BSD_license = "BSD License (3-Clause) \n Copyright © " + year +" "+ copyrightHolder + ".\n"
    + "Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: \n"
    + " 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n"
    + " 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n"
    + " 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission. \n"
    + "THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.";

    if (answer.license_text == "MIT License"){
      licenseText = MIT_license;
      badge = " ![BADGE](https://img.shields.io/badge/license-MIT-green) ";
    }
    if (answer.license_text == "Apache License 2.0"){
      licenseText = apacheLicense;
      badge = " ![BADGE](https://img.shields.io/badge/license-Apache-blue) ";
    }
    if (answer.license_text == "BSD License (3-Clause)"){
      licenseText = BSD_license;
      badge = " ![BADGE](https://img.shields.io/badge/license-BSD-green) ";
    };
    
let contributionText = answer.contribution_text;
let testsText = answer.tests_text;
let questionsText = answer.questions_text;
let linkText = "GitHub Profile: https://github.com/" + answer.GitHub_link + ".  \n";
let emailText = "Contact Me: " + answer.email_text + ".  \n";

// Creates variables for each section of the ReadMe and assigns them string values

const title = "# "+ projectTitle + " " + badge;
const description = "\n<a name='description'></a>\n ## Description \n" + descriptionText;
const tableOfContents = 
"\n## Table of Contents  \n"
+" 1. [ Description. ](#description)  \n" 
+" 2. [ Installation. ](#installation)  \n" 
+" 3. [ Usage tips. ](#usage)  \n"
+" 4. [ License. ](#license)  \n"
+" 5. [ Contribution Guidelines. ](#contribution)  \n"
+" 6. [ Tests. ](#tests)  \n"
+" 7. [ Questions. ](#questions)  \n";

const installation = "\n <a name='installation'></a>\n ## Installation \n " + installationText;
const usage = "\n <a name='usage'></a>\n ## Usage \n" + usageText;
const license = "\n <a name='license'></a>\n ## License \n" + licenseText;
const contribution = "\n <a name='contribution'></a>\n ## Contribution Guidelines \n" + contributionText;
const tests = "\n <a name='tests'></a>\n ## Tests \n" + testsText;
const questions = "\n <a name='questions'></a>\n ## Questions \n" + linkText + emailText + " \n" + questionsText;

// Compiles a template ReadMe from the variables above. 

const template = title + description + tableOfContents + installation + usage + license + contribution + tests
                + questions;

// Creates a function to write ReadMe file using the template
function writeToFile(fileName, data) {
    fs.writeFile('README.md', template, function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
}

writeToFile();
});
