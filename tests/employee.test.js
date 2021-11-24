// imports the employee module which has the parent class Employee
const Employee = require('../lib/employee');

describe("Employee", ()=> {
    describe("Initialization", ()=> {
        it("If arguements are valid, an abject of name, email address, and id is created.", () => {
            const employeeInfo = new Employee("Lu Gonz", 123456, "LuGonz@gmail.com");
            expect(employeeInfo.name).toEqual("Lu Gonz");
            expect(employeeInfo.id).toEqual(123456);
            expect(employeeInfo.email).toEqual("LuGonz@gmail.com");
        })
    });

    describe("Name", ()=> {
        it("The employee name is set to input.", ()=> {
        const input = "Lu Gonz";
        const expected = {"name": "Lu Gonz","id": 123456,"email": "LuGonz@gmail.com"};
        const employeeInfo = new Employee(input, 123456, "LuGonz@gmail.com");
        expect(employeeInfo).toEqual(expected);
        })
    });

    describe("ID", ()=> {
        it("The employee id is set to input.", ()=> {
        const input = 123456;
        const expected = {"name": "Lu Gonz","id": 123456,"email": "LuGonz@gmail.com"};
        const employeeInfo = new Employee("Lu Gonz", input, "LuGonz@gmail.com");
        expect(employeeInfo).toEqual(expected);
        });
    });

    describe("Email", ()=> {
        it("The employee email is set to input.", ()=> {
        const input = "LuGonz@gmail.com";
        const expected = {"name": "Lu Gonz","id": 123456,"email": "LuGonz@gmail.com"};
        const employeeInfo = new Employee("Lu Gonz", 123456, input);
        expect(employeeInfo).toEqual(expected);
        });
    })
});