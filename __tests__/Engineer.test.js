const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    // GitHub
    describe("getOfficeNumber", () => {
        it("Engineer should have a Github account assigned", () => {
            const github = "TomB";
            const eng = new Engineer("Tom", 1, "TomBrady@go.com", github);
            const engGitHub = eng.getGitHub();
            expect(engGitHub).toBe(github);
        });
    });
    //Change Role to Engineer
    describe("getRole", () => {
        it("Engineer Role should return", () => {
            const eng = new Engineer("Tom", 1, "TomBrady@go.com", "TomB");
            const engRole = eng.getRole();
            expect(engRole).toBe("Engineer");
        });
    });
});
