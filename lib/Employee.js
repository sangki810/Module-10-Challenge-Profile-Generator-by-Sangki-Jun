// constructor and get functions for employee
class Employee {
  // object container for user inputs
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  
  // returns name from input
  getName() {
    return this.name;
  }
  
  // returns id from input
  getId() {
    return this.id;
  }
  
  // returns email from input
  getEmail() {
    return this.email;
  }
  
  // returns "Employee" as a string for type of role
  getRole() {
    return "Employee";
  }
  
}

// exports for other files
module.exports = Employee;