// creates html for all employee types
const generateTeam = team => {

    // create the html for manager 
    const generateManager = manager => {
        return `<div class="card p-0 mx-3 shadow shadow-offset-down-md shadow-offset-left-sm" style="max-width: 18rem;">
                    <div class="card-header text-light bg-primary">
                        ${manager.getName()}<br />
                        <i class="fas fa-mug-hot"></i> ${manager.getRole()}
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>`;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `
                <div class="card p-0 mx-3 shadow shadow-offset-down-md shadow-offset-left-sm" style="max-width: 18rem;">
                    <div class="card-header text-light bg-primary">
                        ${engineer.getName()}<br />
                        <i class="fas fa-glasses"></i> ${engineer.getRole()}
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                        </ul>
                    </div>
                </div>`;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `
                <div class="card p-0 mx-3 shadow shadow-offset-down-md shadow-offset-left-sm" style="max-width: 18rem;">
                    <div class="card-header text-light bg-primary">
                        ${intern.getName()}<br />
                        <i class="fas fa-user-graduate"></i> ${intern.getRole()}
                    </div>
                    <div class="card-body bg-light">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>`;
    };

    // joins the pieces of html created from user input into one
    const htmlArr = [];

    htmlArr.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    htmlArr.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    htmlArr.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return htmlArr.join("");
}

module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/2f8e9dc640.js" crossorigin="anonymous"></script>
        <title>Team Profile</title>
    </head>

    <body>
        <header>
            <h1 class="text-center text-light bg-danger pb-4 p-3 mb-5" >My Team</h1>
        </header>
    
        <main class="container">
            <section class="row justify-content-center">
                ${generateTeam(team)}
            </section>
        </main>
    </body>
    </html>`;
};