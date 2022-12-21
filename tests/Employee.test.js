// Follow this link for an example: https://jestjs.io/docs/getting-started
// Make sure to modify the "scripts:" section to "jest" instead
// of the placeholder text

// To run tests, npm install --save-dev jest
// then, npm test
// it will run all .test.js files

const Employee = require("../lib/Employee");


// Test the base object
test('Create a new employee', () => {
    const newEmployee = new Employee();
    expect(typeof newEmployee).toBe('object');
});

// Test Employee.name
test('Add property "name" to Employee object', () => {
    const name = 'Gary';
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe('Gary');
});

// Test Employee.id
test('Add property "id" to Employee object', () => {
    const id = 1234;
    const newEmployee = new Employee('Gary', id);
    expect(newEmployee.id).toBe(1234);
});

// Test Employee.email
test('Add property "email" to Employee object', () => {
    const email = 'gdb@outlook.com';
    const newEmployee = new Employee('Gary', 1234, email);
    expect(newEmployee.email).toBe('gdb@outlook.com');
});

// --------------------------- These are the methods within Employee class ---------------------------

// Test Employee.getRole()
test('role is from method .getRole()', () => {
    const role = 'Employee';
    const newEmployee = new Employee('Gary', 1234, 'gdb@outlook.com');
    expect(newEmployee.getRole()).toBe('Employee');
});

// Test Employee.getName()
test('name is from method .getName()', () => {
    const myName = 'Gary';
    const newEmployee = new Employee(myName, 1234, 'gdb@outlook.com');
    expect(newEmployee.getName()).toBe(myName);
});

// Test Employee.getId()
test('id is from method .getId()', () => {
    const myId = 9876;
    const newEmployee = new Employee('Gary', myId, 'gdb@outlook.com');
    expect(newEmployee.getId()).toBe(myId);
});

// Test Employee.getEmail()
test('email is from method .getEmail()', () => {
    const myEmail = 'gdb@outlook.com';
    const newEmployee = new Employee('Gary', 1234, myEmail);
    expect(newEmployee.getEmail()).toBe(myEmail);
});