// Create the Engineer class.
// Extend the employee class to be specific to an Engineer entry

// This class requires the parent Employee class
const Employee = require("./Employee");
// Any employee can receive a name, id number, and email address
// A manager can take in a gitHub username as an argument
class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }
    // This method returns the role of the employee
    getRole() {
        return "Engineer";
    }
    // This method returns the gitHub profile of the employee
    getGitHub() {
        return this.gitHub
    }

};

// export this file as a module to be called in the index file
module.exports = Engineer;