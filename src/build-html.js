
// create all the different team cards based off the inputs
const renderTeam = (team) => {
    // Create the manager card with the data inputs using string literals
    // Manager card reports name, role, id number, email address, and office number
    const renderManager = (manager) => `
                <div class="card employee-card me-3 mb-5">
                    <div class="card-header">
                        <h2 class="card-title">${manager.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${manager.email}">${manager.email}</a>
                            </li>
                            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
        `;


    // Create the engineer card with the data inputs using string literals
    // Engineer card reports name, role, id number, email address, and github username
    const renderEngineer = (engineer) => `
                 <div class="card employee-card me-3 mb-5">
                     <div class="card-header">
                        <h2 class="card-title">${engineer.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
                            </li>
                            <li class="list-group-item">
                                GitHub:
                                <a href="https://github.com/${engineer.gitHub}" target="_blank"
                                    rel="noopener noreferrer">${engineer.gitHub}</a>
                            </li>
                        </ul>
                    </div>
                </div>
        `;

    // Create the intern card with the data inputs using string literals
    // Intern card reports name, role, id number, email address, and name of school intern attends
    const renderIntern = (intern) => `
                <div class="card employee-card me-3 mb-5">
                     <div class="card-header">
                        <h2 class="card-title">${intern.name}</h2>
                        <h3 class="card-title"><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.id}</li>
                            <li class="list-group-item">
                                Email: <a href="mailto:${intern.email}">${intern.email}</a>
                            </li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
        `;

    /* -------------------------- Join and Render HTML -------------------------- */

    // Create an empty array for the HTML cards
    const html = [];

    // Add the manager to the empty array of HTML cards
    html.push(team.filter((employee) => employee.getRole() === 'Manager').map((manager) => renderManager(manager)));

    // Add the engineers to the array of HTML cards
    html.push(
        team
            // filter out data so it only includes engineers
            .filter((employee) => employee.getRole() === 'Engineer')
            // Map all engineer data so that it displays as a html card
            .map((engineer) => renderEngineer(engineer))
            // Join all the cards up so that they're not on separate indexes
            .join('')
    );

    // Add the interns to the array of HTML cards
    html.push(
        team
            // filter out data so it only includes interns
            .filter((employee) => employee.getRole() === 'Intern')
            // Map all intern data so that it displays as a html card
            .map((intern) => renderIntern(intern))
            // Join all the cards up so that they're not on separate indexes
            .join('')
    );

    // Return the Completed HTML
    return html.join('');
};


/* ----------------------------------------- Join and Render HTML ----------------------------------------- */
// Create main html
// call the renderTeam() function inside this main HTML body string literal to insert the cards the user
// desires based on user input to the prompts
const renderMain = (team) => `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Directory</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">Team Directory</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-around">
               ${renderTeam(team)}
            </div>
        </div>
    </div>
</body>
<script src="https://kit.fontawesome.com/cba39ebf54.js" crossorigin="anonymous"></script>
</html>
`;

// / export this file as a module to be called in the index file
module.exports = renderMain;