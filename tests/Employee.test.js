const Employee = require("../lib/Employee");


// Follow this link for an example: https://jestjs.io/docs/getting-started
// Make sure to modify the "scripts:" section to "jest" instead
// of the placeholder text

// To run tests, npm install --save-dev jest
// then, npm test
// it will run all .test.js files

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

// Test Employee.getRole()
test('Add property "role" to Employee object', () => {
    const role = 'Employee';
    const newEmployee = new Employee('Gary', 1234, 'gdb@outlook.com');
    expect(newEmployee.getRole()).toBe('Employee');
});