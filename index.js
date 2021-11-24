// Inports colors and inquirer module
const colors = require("colors");
const inquirer = require("inquirer");

// Inports engineer, intern, manager class module
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// Inports HTML Generator
const htmlGenerator = require("./src/htmlGenerator");

// Colored text and underlines
const terminalMessage = `\n______________________`.magenta +`\nTeam Profile Generator\n`.underline.magenta;
const errMsg = `\r\n>>> ERR: `.yellow;

// message when no information in submitted
const infoNotSubmitted = `You did not submit any information.`.cyan.bgMagenta;

// An array that holds team members
const teamMembArr = [];

// Instruction message
const instructMsg =  ()=> {
    return inquirer.prompt([
        {
            type: "input",
            name: "instructions",
            message: terminalMessage + "\nThis command-line application will prompt you for information about you team members.\nAn HTML document will be generated that displays a nicely formatted team \nroster based on the infomation you submitted.\nPress the ENTER key to continue.\n"
        }
    ])
    .then(managerInfo)
};

// Questions about manager and members
const managerInfo = ()=> {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your manager?",
            validate: name => {
                if (name) {
                    return true;
                } 
                else {console.log (
                    errMsg + infoNotSubmitted + colors.red("Please enter the name of your manager."));
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: ({name}) => `What is ${name}\'s employee ID number?`,
            validate: id => {
                if (id) {
                    return true;
                } 
                else {({name}) => console.log (
                    errMsg + infoNotSubmitted + colors.red(`Please enter ${name}\'s employee ID number.`));
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: ({name}) => `What is ${name}\'s employee email address?`, 
            validate: email => {
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
                if (valid) {
                    return true;
                } 
                else {console.log(
                    errMsg + colors.red("Not a valid employee email address. Please try again."));
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "number",
            message: ({name}) => `What is ${name}\'s employee phone number?`,
            validate: number => {
                if (number) {
                    return true;
                } 
                else {({name}) => console.log (
                        errMsg + infoNotSubmitted + colors.red(`Please enter ${name}\'s employee phone number.`));
                    return false; 
                }
            }
        },
        {
            type: "list",
            name: "moreQuest",
            message: "Are there more team members to add on the list?",
            choices: ["Y", "N"]
        }
    ])
    .then(questAnswers => {
        const {name,id,email,number} = questAnswers;
        const validManager = new Manager(name, id, email, number); 
        teamMembArr.push(validManager);
        (questAnswers.moreQuest === "Y") ? teamMemberInfo(): htmlGenerator(teamMembArr);
    })
};

// Questions about other team members
const teamMemberInfo = ()=> {
    return inquirer.prompt([
        {
            type: "list",
            name: "title",
            message: "What is the job title of the team member?", 
            choices: ["Intern", "Engineer"]
        },
        {
            type: "input",
            name: "name",
            message: ({title}) => `What is the ${title}\'s name?`,
            validate: memberName => {
                if (memberName) {
                    return true;
                } 
                else {({title}) => console.log(
                    errMsg + infoNotSubmitted + `Please enter the ${title}\'s name.`);
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: ({name}) => `What is ${name}\'s employee ID number?`,
            validate: id => {
                if (id) {
                    return true;
                } 
                else {({name}) => console.log (
                    errMsg + infoNotSubmitted + `Please enter ${name}\'s employee ID number.`);
                    return false; 
                }
            },
        },
        {
            type: "input",
            name: "email",
            message: ({name}) => `What is ${name}\'s email address?`,
            validate: email => {
                const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } 
                else {console.log(
                    errMsg + "Not a valid employee email address. Please try again.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: ({name}) => `What is ${name}\'s GitHub username?`,
            when: (input) => input.title === "Engineer",
            validate: github => {
                if (github) {
                    return true;
                }
                else {({name}) => console.log (
                    errMsg + infoNotSubmitted + `Please enter ${name}\'s GitHub username.`);
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: ({name}) => `What is ${name}\'s school name?`,
            when: (input) => input.title === "Intern",
            validate: school => {
                if (school) {
                    return true;
                } 
                else {({name}) => console.log (
                    errMsg + infoNotSubmitted + `Please enter ${name}\'s school name.`);
                    return false; 
                }
            },
        },
        {
            type: "list",
            name: "moreQuest",
            message: "Are there more team members to add on the list?",
            choices: ["Y", "N"]
        }
    ])
    .then(questAnswers => {
        if (questAnswers.title === "Engineer") {
            const {name, id, email, github} = questAnswers;
            const validEngineer = new Engineer (name, id, email, github);
            teamMembArr.push(validEngineer); 
        } 
        else if (questAnswers.title === "Intern") {
            const {name, id, email, school} = questAnswers;
            const validIntern = new Intern (name, id, email, school);
            teamMembArr.push(validIntern);
        }(questAnswers.moreQuest === "Y") ? teamMemberInfo() : htmlGenerator(teamMembArr);
    })
};

// This function initialize the application
const init = ()=> instructMsg()
init();