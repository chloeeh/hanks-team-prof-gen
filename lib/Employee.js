// Create the Employee class.
// Any employee can receive a name, id number, and email address
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // This method returns the name of the employee
    getName() {
        return this.name;
    };
    // This method returns the id number of the employee
    getId() {
        return this.id;
    };
    // This method returns the email address of the employee
    getEmail() {
        return this.email;
    }
    // This method returns the role of the employee
    getRole() {
        return "Employee";
    }
};

// export this file as a module to be called in the index file
module.exports = Employee;