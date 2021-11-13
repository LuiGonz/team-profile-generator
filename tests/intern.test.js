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
            expect(internInfo.internCard).toEqual(
            `<div class="col-lg-4 mb-3 mx-auto">
                <div class="card intern border-0" style="background-color: #201C2B; border-radius: 16px; margin-bottom: 2em; box-shadow: 15px 15px 3px 1px #8a193e;">
                    <div class="card-body">
                    <h4 class="card-title text-center" style="color: #E95150;">Lu Gonz</h4>
                    <h5 class="card-title text-center" style="color: #E95150;">Intern</h5>
                    <div class="text-center" style="font-size:36px;color:#FF7287"><i class="fas fa-graduation-cap"></i></div>
                        <div class="card border-0" style="background-color: #201C2B; margin-top: .5em;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item" style="background-color: #670F4C; color: #E88BC3; border-top-left-radius: 8px; border-top-right-radius: 8px;">Employee ID:&nbsp 123456</li>
                                <li class="list-group-item" style="background-color: #E88BC3; color: #201C2B;">Employee Email:&nbsp <a href="mailto:LuGonz@gmail.com">LuGonz@gmail.com</a></li>
                                <li class="list-group-item" style="background-color: #E88BC3; color: #201C2B; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">Employee School:&nbsp NCC</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>`
            )
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