// imports the employee module which has the parent class Employee
const Employee = require("./employee");

// create class Engineer that inherits from Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //The keyword super calls the parent method's constructor
        // it will set name, id, and email as properties for Engineer
        super(name, id, email);
        this.role = "Engineer";
        this.github = github;
        this.cardEngineer = 
            `<div class="col-lg-4 mb-3 mx-auto">
                <div class="card engineer border-0" style="background-color: #201C2B; border-radius: 16px; margin-bottom: 2em; box-shadow: 15px 15px 3px 1px #8a193e;">
                    <div class="card-body">
                        <h4 class="card-title text-center" style="color: #E95150;">${name}</h4>
                        <h5 class="card-title text-center" style="color: #E95150;">Engineer</h5>
                        <div class="text-center" style="font-size:36px;color:#FF7287"><i class="fas fa-laptop-code"></i></div>
                        <div class="card border-0" style="background-color: #201C2B; margin-top: .5em;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" style="background-color: #670F4C; color: #E88BC3; border-top-left-radius: 8px; border-top-right-radius: 8px;">Employee ID:&nbsp ${id}</li>
                                <li class="list-group-item" style="background-color: #E88BC3; color: #201C2B;">Employee Email:&nbsp <a href="mailto:${email}">${email}</a></li>
                                <li class="list-group-item" style="background-color: #E88BC3; color: #201C2B; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">Employee Github Username:&nbsp <a href="https://github.com/${this.github}">${this.github}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
    }
    empRole() { 
        return this.role 
    };
    empGithub() { 
        return this.github 
    };
}
// exports Engineer
module.exports = Engineer;