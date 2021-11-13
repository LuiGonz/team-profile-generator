class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    empRole(){ 
        return `Employee`
    };
    empName(){ 
        return this.name 
    };
    empId() { 
        return this.id 
    };
    empEmail() { 
        return this.email 
    };
}
// exports Employee
module.exports = Employee;