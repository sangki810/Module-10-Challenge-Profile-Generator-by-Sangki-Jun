// accepts export from Employee.js
const Employee = require("./Employee");

// extends on employee for github value and different role
class Engineer extends Employee {
    // brings in values from Employee.js and adds github
    constructor(name, id, github) {
        super(name, id, email);
        this.github = github;
    }
    
    // returns github input
    getGithub() {
        return this.github;
    }

    // returns "Engineer" as a string for type of role
    getRole()  {
        return "Engineer";
    }
}

// exports for other files
module.exports = Engineer;