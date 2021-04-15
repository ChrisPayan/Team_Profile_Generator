var employeeCard = ``;
const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// const Output = path.resolve(___dirname, "output");
// const OutputPath = path.join(Output, "team.html");

const TeamMember = [];
function app(){
    function getManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your Manager's name?"
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your Manager's ID?"
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your Manager's Email?"
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your Manager's Office number?"
            },
        ])
        .then(res => {
            const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOfficeNumber);
            let employeeInfo = `
            <div class="col mb-4">
            <div class="card bg-light shadow bg-white rounded">
                <div class="card-body bg-primary text-white">
                    <h4 class="card-title">${manager.name}</h4>
                    <h4 class="card-title">☕ Manager</h4>
                </div>
                <ul class="list-group list-group-flush mx-3 my-4 border">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
        `;
        employeeCard += employeeInfo;
            addingNewMember();
        })
    }
    function getEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your Engineer's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your Engineer's ID?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your Engineer's Email?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your Engineer's Github Username?"
            },
        ])
        .then(res => {
            const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.engineerGithub);
            let employeeInfo = `
            <div class="col mb-4">
            <div class="card bg-light shadow bg-white rounded">
                <div class="card-body bg-primary text-white">
                    <h4 class="card-title">${engineer.name}</h4>
                    <h4 class="card-title">👓 engineer</h4>
                </div>
                <ul class="list-group list-group-flush mx-3 my-4 border">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
        `;
        employeeCard += employeeInfo;
            addingNewMember();
        })
    }
    function getIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your Intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is your Intern's ID?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your Intern's Email?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your Intern's Schools name?"
            },
        ])
        .then(res => {
            const intern = new Intern(res.internName, res.internId, res.internEmail, res.internSchool);
            let employeeInfo = `
            <div class="col mb-4">
            <div class="card bg-light shadow bg-white rounded">
                <div class="card-body bg-primary text-white">
                    <h4 class="card-title">${intern.name}</h4>
                    <h4 class="card-title">🎓 Intern</h4>
                </div>
                <ul class="list-group list-group-flush mx-3 my-4 border">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `;
        employeeCard += employeeInfo;
            addingNewMember();
        })
    }
    function addingNewMember() {
        inquirer.prompt([
            {
                type: "list",
                name: "selectEmployee",
                message: "which Employee?",
                choices: [
                    "engineer",
                    "intern",
                    "manager",
                    "Finished"
                ]

            }
        ])
        .then(res => {
            const role = res.selectEmployee;
            if(res.selectEmployee == "manager") {
                addingNewMember();
            } else if(res.selectEmployee == "intern") {
                getIntern();
            } else if(res.selectEmployee == "engineer") {
                getEngineer();
            } else if(res.selectEmployee == "Finished") {
                let fullTeam = `<!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <link
                            rel="stylesheet"
                            href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                            integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                            crossorigin="anonymous"
                        />
                        <title>My Team</title>
                    </head>
                    <body>
                        <header>
                            <nav class="navbar navbar-expand-lg navbar-dark bg-danger p-4">
                                <h1 class="col-12 text-center text-white">Team Profile Generator</h1>
                            </nav>
                        </header>
                        <main class="p-5 d-flex justify-content-center col-12">
                            <section
                                class="col-9 row row-cols-1 row-cols-md-3 d-flex justify-content-center">
                                ${employeeCard}
                            </section>
                        </main>
                    </body>
                </html>`
                // fsWriteFIle
                fs.writeFile("./team.html", fullTeam, (err) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    console.log("Done");
                    process.exit();
                });
            } else {
                // Opps something went wrong reloading choices
            }
        })
    }
    getManager();

}
app();