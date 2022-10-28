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
    createTeam();
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
  });
}

// function to
function createTeam() {
  inquirer.prompt([
    {
      type: "list",
      name: "employeeType",
      message: "Which type of employee do you want to add to the team?",
      choices: ["Manager", "Engineer", "Intern", "None"]
    }
  ]).then(function (answers) {
      
  })
} 
