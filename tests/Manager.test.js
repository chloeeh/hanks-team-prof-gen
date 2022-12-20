const Manager = require("../lib/Manager");


// Follow this link for an example: https://jestjs.io/docs/getting-started
// Make sure to modify the "scripts:" section to "jest" instead
// of the placeholder text

// To run tests, npm install --save-dev jest
// then, npm test
// it will run all .test.js files

// Test the base object
test('Create a new Manager', () => {
    const newManager = new Manager();
    expect(typeof newManager).toBe('object');
});

// Test Manager.name
test('Add property "name" to Manager object', () => {
    const name = 'Gary';
    const newManager = new Manager(name);
    expect(newManager.name).toBe('Gary');
});

// Test Manager.id
test('Add property "id" to Manager object', () => {
    const id = 1234;
    const newManager = new Manager('Gary', id);
    expect(newManager.id).toBe(1234);
});

// Test Manager.email
test('Add property "email" to Manager object', () => {
    const email = 'gdb@outlook.com';
    const newManager = new Manager('Gary', 1234, email);
    expect(newManager.email).toBe('gdb@outlook.com');
});


// These test the methods within the Engineer class that extend
// BEYOND the methods described in Employee class

// Test Employee.getRole()
test('Add property "role" to Manager object', () => {
    const role = 'Manager';
    const newManager = new Manager('Gary', 1234, 'gdb@outlook.com');
    expect(newManager.getRole()).toBe(role);
});

// Test Manager.getOfficeNumber()
test('officeNumber is from method .getOfficeNumber', () => {
    const myOfficeNumber = 1234;
    const newManager = new Manager('Gary', 1234, 'gdb@outlook.com', myOfficeNumber);
    expect(newManager.getOfficeNumber()).toBe(myOfficeNumber);
});