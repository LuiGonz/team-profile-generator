const Intern = require('../lib/intern');

describe("Intern", ()=> {
    describe("Initialization", ()=> {
        it("Should create an object with a name, id, email address and school if provided valid arguments", () => {
            const internInfo = new Intern("Lu Gonz", 123456, "LuGonz@gmail.com", "NCC");
            expect(internInfo.name).toEqual("Lu Gonz");
            expect(internInfo.id).toEqual(123456);
            expect(internInfo.email).toEqual("LuGonz@gmail.com");
            expect(internInfo.school).toEqual("NCC");
            expect(internInfo.role).toEqual("Intern");
        })
    });

    describe("School", ()=> {
        it("The employee school name is set to input", ()=> {
            const input = "NCC";
            const internInfo = new Intern("Name", 123456, "LuGonz@gmail.com", input).empSchool();
            expect(input).toEqual(internInfo);
        })
    });
});