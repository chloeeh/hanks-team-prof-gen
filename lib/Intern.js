// Create the Engineer class.
// Extend the employee class to be specific to an Intern entry
const Employee = require("./Employee");
// Any employee can receive a name, id number, and email address
// A manager can take in a school as an argument
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    // This method returns the role of the employee
    getRole() {
        return "Intern"
    }
    // This method returns the school of the employee
    getSchool() {
        return this.school;
    }
};

// export this file as a module to be called in the index file
module.exports = Intern;