const Engineer = require("../lib/Engineer");


// Follow this link for an example: https://jestjs.io/docs/getting-started
// Make sure to modify the "scripts:" section to "jest" instead
// of the placeholder text

// To run tests, npm install --save-dev jest
// then, npm test
// it will run all .test.js files

// Test the base object
test('Create a new engineer', () => {
    const newEngineer = new Engineer();
    expect(typeof newEngineer).toBe('object');
});

// Test Engineer.name
test('Add property "name" to Engineer object', () => {
    const name = 'Patrick';
    const newEngineer = new Engineer(name);
    expect(newEngineer.name).toBe('Patrick');
});

// Test Engineer.id
test('Add property "id" to Employee object', () => {
    const id = 2345;
    const newEngineer = new Engineer('Patrick', id);
    expect(newEngineer.id).toBe(2345);
});

// Test Engineer.email
test('Add property "email" to Engineer object', () => {
    const email = 'pdw@outlook.com';
    const newEngineer = new Engineer('Patrick', 2345, email);
    expect(newEngineer.email).toBe('pdw@outlook.com');
});

// These test the methods within the Engineer class that extend
// BEYOND the methods described in Employee class

// Test Engineer.getRole()
test('Add property "role" to Engineer object', () => {
    const role = 'Engineer';
    const newEngineer = new Engineer('Patrick', 2345, 'pdw@outlook.com');
    expect(newEngineer.getRole()).toBe('Engineer');
});

// Test Engineer.getGitHub()
test('gitHub is from method .getGitHub', () => {
    const myGitHub = "whaler";
    const newEngineer = new Engineer('Patrick', 2345, 'pdw@outlook.com', myGitHub);
    expect(newEngineer.getGitHub()).toBe(myGitHub);
});