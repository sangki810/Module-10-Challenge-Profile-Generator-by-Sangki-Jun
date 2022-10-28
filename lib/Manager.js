// accepts export from Employee.js
const Employee = require("./Employee");

// extends on employee for office number value and different role
class Manager extends Employee {
    // brings in values from Employee.js and adds office number
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // returns office number input
    getOfficeNumber() {
        return this.officeNumber;
    }

    // returns "Manager" as a string for type of role
    getRole()  {
        return "Manager";
    }
}

// exports for other files
module.exports = Manager;