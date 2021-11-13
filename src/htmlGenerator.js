// Inports colors, file system and index module
const index = require("../index");
const colors = require("colors");
const fs = require("fs");

// This generates html for each team member role in the roster
const rosterGen = (rosterArray) => {
    // These functions organizes employess by their roles, and creates employee card arrays
    function managerGenerator(members) {
        for (j = 0; j < members.length; j++) {
            if (members[j].role === "Manager") {
                managerHtmlCard.push(members[j].cardManager);
            }
        }
    }
    function engineerGenerator(members) {
        for (j = 0; j < members.length; j++) {
            if (members[j].role === "Engineer") {
                engineerHtmlCard.push(members[j].cardEngineer);
            }
        }
    }
    function internGenerator(members) {
        for (j = 0; j < members.length; j++) {
            if (members[j].role === "Intern") {
                internHtmlCard.push(members[j].cardIntern);
            }
        }
    }

    // These arrays store and organize the html for each member employee card by job role
    let managerHtmlCard = [];
    let engineerHtmlCard = [];
    let internHtmlCard = [];

    // An arrays is generated for each member employee card
    managerGenerator(rosterArray);
    engineerGenerator(rosterArray);
    internGenerator(rosterArray);

    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
            <title>Team Roster</title>
        </head>
        <body style="background-color: #CE225A;">
            <header class="jumbotron p-2 mx-auto" style="background-color: #201C2B; margin-bottom: 3em; margin-top: 20px; border-radius: 16px; width: 360px; box-shadow: 15px 15px 3px 1px #8a193e;">
                <div class="container" style="background-color: #670F4C; border-radius: 8px; width: 320px; height: 100px; margin-bottom: 10px; margin-top: 10px;">
                    <div class="row align-items-center" style="display: inline;">
                        <h1 class="text-center" style="color: #E95150;">Team Roster</h1>
                    </div>
                </div>
            </header>
            <main>
                <section class="container">
                    <div class="row">
                        ${managerHtmlCard.join(" ")}
                    </div>
                </section>
                <section class="container">
                    <div class="row">
                        ${engineerHtmlCard.join(" ")}
                    </div>
                </section>
                <section class="container">
                    <div class="row">
                        ${internHtmlCard.join(" ")}
                    </div>
                </section>
            </main>
        </body>
    </html>`
}
// This writes above html code into TeamRoster.html file in the the dist folder
const htmlGenerator = (rosterArray)=> {
    fs.writeFile("./dist/TeamRoster.html", rosterGen(rosterArray), function(err, result) {
        (err) ? console.log("error", err): console.log(`\r\nThe TeamRoster.html file has been writen to the dist folder.`.underline.blue);
        }
    );
};
// exports htmlGenerator
module.exports = htmlGenerator;