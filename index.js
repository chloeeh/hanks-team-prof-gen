// import npm packages
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// Import child classes of the Employee class
// Employee class not included here, because user must select 
// the child classes. Employee class is not an option for user
// selection
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Output Directory
const DIST_DIR = path.resolve(__dirname, 'dist');
// Output file path and name
const outputPath = path.join(DIST_DIR, 'teamProfile.html');

// Import HTML template
const templateHTML = require('./src/build-html');

// Create an empty array of team members
const teamMembers = [];



// ------------------------------------------------ EMPLOYEE DATA ------------------------------------------------

// Allow user to create a new team member OR if user selects "I'm done adding. Create directory"
// then end prompts and create file
function addTeamMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                name: 'what_team_member',
                message: 'Add an engineer, Add an intern, or create team directory?',
                choices: ['Engineer', 'Intern', 'I am done adding. Create directory.'],
            },
        ])
        // Based on user selection, call the relevant function
        .then((val) => {
            if (val.what_team_member === 'Engineer') {
                addEngineer();
            } else if (val.what_team_member === 'Intern') {
                addIntern();
            } else {
                createTeamFile();
            }
        });
}

/* ------------------------- Get manager data inputs ------------------------ */

// On init() the addManager() function kicks off the questions to the user
function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the team manager?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Employee ID of the team manager?',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email address of the team manager?',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is the office number of the team manager?',
            },
        ])
        .then((val) => {
            // create a new manager from manager class, inherited from employee class
            const manager = new Manager(val.name, val.id, val.email, val.officeNumber);
            // add manager to the teamMembers[] array
            teamMembers.push(manager);
            // Once a manager has been created, call the addTeamMember function
            // go to addTeamMember() function for the option to add another employee 
            // or build team from the items in the teamMembers[] array
            addTeamMember();
        });
}

/* ------------------------ Get engineer data inputs ------------------------ */

// These are questions specific to an engineer
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the engineers's name`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the engineer's employee ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the engineer's email address?`,
            },
            {
                type: 'input',
                name: 'gitHub',
                message: `What is the engineer's github profile name?`,
            },
        ])
        .then((val) => {
            // create a new engineer from the engineer class, inherited from the employee class
            const engineer = new Engineer(val.name, val.id, val.email, val.gitHub);
            // add the new engineer to the teamMembers[] array
            teamMembers.push(engineer);
            // go to addTeamMember() function for the option to add another employee or build team
            // from the items in the teamMembers[] array
            addTeamMember();
        });
}

/* ------------------------- Get intern data inputs ------------------------- */

// These are questions specific to an intern
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the Intern's name`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is the Intern's employee ID?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is the Intern's email address?`,
            },
            {
                type: 'input',
                name: 'school',
                message: `What school did the intern go to?`,
            },
        ])
        .then((val) => {
            // create a new intern from the intern class, inherited from the employee class
            const intern = new Intern(val.name, val.id, val.email, val.school);
            // go to addTeamMember() function for the option to add another employee or build team
            // from the items in the teamMembers[] array
            teamMembers.push(intern);
            addTeamMember();
        });
}

// ------------------------------------------------ BUILD HTML ------------------------------------------------

// Create the html file based on the employees in the teamMembers[] array
function createTeamFile() {
    // if the html file does NOT already exist, then create a file following the path
    // that is represented by 'DIST_DIR' (which is the ./dist/ path)
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR);
    } else {
        // if the html file DOES already exist, then write to the file following the path
        // that is represented by 'DIST_DIR' (which is the ./dist/ path) 
        fs.writeFileSync(outputPath, templateHTML(teamMembers), 'utf-8');
        console.log('HTML file created in the dist folder');
    }
}

// ------------------------------------------------ BEGIN PROGRAM ------------------------------------------------

// When the init() function is called, first prompt the user 
// to name a manager to kick off the program
function init() {
    addManager();
}

// Run the program!
init();