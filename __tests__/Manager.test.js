const Manager = require("../lib/Manager");


describe("Manager", () => {
    // Office Number
    describe("getOfficeNumber", () => {
        it("Manager should have an office number assigned", () => {
            const officeNumber = "5005005000";
            const man = new Manager("Tom", 1, "TomBrady@go.com", officeNumber);
            const manOfficeNumber = man.getOfficeNumber();
            expect(manOfficeNumber).toBe(officeNumber);
        });
    });
    //Change Role to Manager
    describe("getRole", () => {
        it("Manager Role should return", () => {
            const man = new Manager("Tom", 1, "TomBrady@go.com", "5005005000");
            const manRole = man.getRole();
            expect(manRole).toBe("Manager");
        });
    });
});