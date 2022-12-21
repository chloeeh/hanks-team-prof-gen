// Follow this link for an example: https://jestjs.io/docs/getting-started
// Make sure to modify the "scripts:" section to "jest" instead
// of the placeholder text

// To run tests, npm install --save-dev jest
// then, npm test
// it will run all .test.js files

const Intern = require("../lib/Intern");

// Test the base object
test('Create a new intern', () => {
    const newIntern = new Intern();
    expect(typeof newIntern).toBe('object');
});

// Test Intern.name
test('Add property "name" to Intern object', () => {
    const name = 'Justin';
    const newIntern = new Intern(name);
    expect(newIntern.name).toBe('Justin');
});

// Test Intern.id
test('Add property "id" to Intern object', () => {
    const id = 3456;
    const newIntern = new Intern('Justin', id);
    expect(newIntern.id).toBe(3456);
});

// Test Intern.email
test('Add property "email" to Intern object', () => {
    const email = 'jae@outlook.com';
    const newIntern = new Intern('Justin', 3456, email);
    expect(newIntern.email).toBe('jae@outlook.com');
});

// These test the methods within the Engineer class that extend
// BEYOND the methods described in Employee class

// Test Intern.getRole()
test('Add property "role" to Intern object', () => {
    const role = 'Intern';
    const newIntern = new Intern('Justin', 3456, 'jae@outlook.com');
    expect(newIntern.getRole()).toBe('Intern');
});

// Test Intern.getSchool()
test('School is from method .getSchool()', () => {
    const mySchool = 'TAMU';
    const newIntern = new Intern('Justin', 3456, 'jae@outlook.com', mySchool);
    expect(newIntern.getSchool()).toBe(mySchool);
});