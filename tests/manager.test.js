const Manager = require('../lib/manager');

describe("Manager", ()=> {
    describe("Initialize", ()=> {
        it("If arguements are valid, an abject of name, email address, phone number, and id is created.", () => {
            const managerInfo = new Manager("Lu Gonz",123456,"LuGonz@gmail.com","987654");
            expect(managerInfo.name).toEqual("Lu Gonz");
            expect(managerInfo.id).toEqual(123456);
            expect(managerInfo.email).toEqual("LuGonz@gmail.com");
            expect(managerInfo.number).toEqual("987654");
            expect(managerInfo.role).toEqual("Manager");
        })
    });
    describe("Number", ()=> {
        it("The employee phone number is set to input.", ()=> {
            const input = "987654";
            const managerInfo = new Manager("Lu Gonz",123456,"LuGonz@gmail.com",input).empNumber();
            expect(input).toEqual(managerInfo);
        })
    });
});