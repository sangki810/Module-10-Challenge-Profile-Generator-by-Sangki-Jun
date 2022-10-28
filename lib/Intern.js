// accepts export from Employee.js
const Employee = require("./Employee");

// extends on employee for school value and different role
class Intern extends Employee {
    // brings in values from Employee.js and adds school
    constructor(name, id, school) {
        super(name, id, email);
        this.school = school;
    }

    // returns school input
    getSchool() {
        return this.school;
    }

    // returns "Intern" as a string for type of role
    getRole()  {
        return "Intern";
    }
}

// exports for other files
module.exports = Intern;