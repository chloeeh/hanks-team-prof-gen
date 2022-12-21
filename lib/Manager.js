// Create the Engineer class.
// Extend the employee class to be specific to a Manager entry
const Employee = require("./Employee");

// This class requires the parent Employee class
class Manager extends Employee{
    // Any employee can receive a name, id number, and email address
    // A manager can take in an officeNumber as an argument
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // This method returns the role of the employee
    getRole() {
        return "Manager";
    }
    // This method returns the office number of the employee
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// export this file as a module to be called in the index file
module.exports = Manager;