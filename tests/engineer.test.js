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
            expect(engineerInfo.engineerCard).toEqual(
                `<div class="col-lg-4 mb-3 mx-auto">
                    <div class="card engineer border-0" style="background-color: #201C2B; border-radius: 16px; margin-bottom: 2em; box-shadow: 15px 15px 3px 1px #8a193e;">
                        <div class="card-body">
                        <h4 class="card-title text-center" style="color: #E95150;">Lu Gonz</h4>
                        <h5 class="card-title text-center" style="color: #E95150;">Engineer</h5>
                        <div class="text-center" style="font-size:36px;color:#FF7287"><i class="fas fa-laptop-code"></i></div>
                            <div class="card border-0" style="background-color: #201C2B; margin-top: .5em;">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item" style="background-color: #670F4C; color: #E88BC3; border-top-left-radius: 8px; border-top-right-radius: 8px;>Employee ID:&nbsp 123456</li>
                                    <li class="list-group-item" style="background-color: #E88BC3; color: #201C2B;">Employee Email:&nbsp <a href="mailto:LuGonz@gmail.com">LuGonz@gmail.com</a></li>
                                    <li class="list-group-item" style="background-color: #E88BC3; color: #201C2B; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">Employee Github Username:&nbsp<a href="https://github.com/LuGonz">LuGonz</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`
            )
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