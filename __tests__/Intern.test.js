const Intern = require("../lib/Intern");

describe("Intern", () => {
    // School
    describe("getSchool", () => {
        it("Intern should have a School account assigned", () => {
            const school = "TGS Tech";
            const int = new Intern("Tom", 1, "TomBrady@go.com", school);
            const intSchool = int.getSchool();
            expect(intSchool).toBe(school);
        });
    });
    //Change Role to Intern
    describe("getRole", () => {
        it("Intern Role should return", () => {
            const int = new Intern("Tom", 1, "TomBrady@go.com", "TGS Tech");
            const intRole = int.getRole();
            expect(intRole).toBe("Intern");
        });
    });
});
