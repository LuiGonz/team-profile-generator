const Engineer = require('../lib/engineer');

describe("Engineer", ()=> {
    describe("Initialization", ()=> {
        it("If arguements are valid, an abject of name, id, email address, GitHub Username, role, and cardHTML is created", () => {
            const engineerInfo = new Engineer("Lu Gonz", 123456, "LuGonz@gmail.com", "LuGonz");
            expect(engineerInfo.name).toEqual("Lu Gonz");
            expect(engineerInfo.id).toEqual(123456);
            expect(engineerInfo.email).toEqual("LuGonz@gmail.com");
            expect(engineerInfo.github).toEqual("LuGonz");
            expect(engineerInfo.role).toEqual("Engineer");
        })
    });
    describe("GitHub", ()=> { 
        it("The gitHub username LuGonz is set to input.", ()=> {
            const input = "LuGonz";
            const engineerInfo = new Engineer("Lu Gonz", 123456, "LuGonz@gmail.com", input).empGithub();
            expect(input).toEqual(engineerInfo);
        })
    });
});