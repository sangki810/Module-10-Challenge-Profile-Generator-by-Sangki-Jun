// brings in lib folder content, inquirer, path, and fs
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// uses path to direct html page into dist folder
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

// brings in src folder content
const render = require('./src/page-template.js');

// empty array to push in newly created employees
const teamMembers = [];

// function for creating manager
function createManager() {
  // inquirer questions
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the name of your manager?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the ID number of your manager?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the email address of your manager?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the office number of your manager?",
    },
    // once user answers all questions, then takes the answers
  ]).then(answers => {
    // feeds user answers into new manager 
    const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
    // pushes new manager into empty array
    teamMembers.push(manager);
    // calls function to add more employee types to team
    addEmployeeTypes();
  });
}

// function for creating engineer
function createEngineer() {
  // inquirer questions
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the name of your engineer?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the ID number of your engineer?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the email address of your engineer?",
    },
    {
      type: "input",
      name: "engineerGithub",
      message: "What is the github username of your engineer?",
    },
    // once user answers all questions, then takes the answers
  ]).then(answers => {
    // feeds user answers into new engineer
    const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
    // pushes new engineer into empty array
    teamMembers.push(engineer);
    // calls function to add more employee types to team
    addEmployeeTypes();
  });
}

// function for creating intern
function createIntern() {
  // inquirer questions
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the name of your intern?",
    },
    {
      type: "input",
      name: "internId",
      message: "What is the ID number of your intern?",
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the email address of your intern?",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What is the school name of your intern?",
    },
    // once user answers all questions, then takes the answers
  ]).then(answers => {
    // feeds user answers into new intern
    const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
    // pushes new intern into empty array
    teamMembers.push(intern);
    // calls function to add more employee types to team
    addEmployeeTypes();
  });
}

// function to add team members
function addEmployeeTypes() {
  // inquirer question
  inquirer.prompt([
    {
      type: "list",
      name: "addEmployeeTypes",
      message: "Which type of employee do you like to add to the team next?",
      choices: ["Engineer", "Intern", "Finish building team"],
    },
  // takes user choice
  ]).then(function (userChoice) {
    switch(userChoice.addEmployeeTypes) {
      // if use chooses engineer, run function
      case "Engineer":
        createEngineer();
        break;
      // if user choose intern, run function
      case "Intern":
        createIntern();
        break;
      // if user choose to finish the profile, run function
      case "Finish building team":
        writeFile();
        break;
    };
  });
} 

// function to create finished html file
function writeFile() {
  // informs user the file has been created
  console.log("Your team has been created!");
  // uses path to create file in dist folder named team.html, takes in array with user input employee pushed in
  fs.writeFile(distPath, render(teamMembers), "UTF-8")
}

// calls create manager to initialize app
createManager();