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
            expect(managerInfo.managerCard).toEqual(
                `<div class="col-lg-4 mb-3 mx-auto">
                    <div class="card manager border-0" style="background-color: #201C2B; border-radius: 16px; margin-bottom: 2em; box-shadow: 15px 15px 3px 1px #8a193e;">
                        <div class="card-body">
                            <h4 class="card-title text-center" style="color: #E95150;">Lu Gonz</h4>
                            <h5 class="card-title text-center" style="color: #E95150;">Manager</h5>
                            <div class="text-center" style="font-size:36px;color:#FF7287"><i class="fas fa-user-tie"></i></div>
                            <div class="card border-0" style="background-color: #201C2B; margin-top: .5em;">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item" style="background-color: #670F4C; color: #E88BC3; border-top-left-radius: 8px; border-top-right-radius: 8px;">Employee ID:&nbsp 123456</li>
                                    <li class="list-group-item" style="background-color: #E88BC3; color: #201C2B;">Employee Email:&nbsp <a href="mailto:LuGonz@gmail.com">LuGonz@gmail.com</a></li>
                                    <li class="list-group-item" style="background-color: #E88BC3; color: #201C2B; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">Employee Phone Number:&nbsp 987654</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>`
            )
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