const Employee = require("../lib/Employee");

describe("Employee", () => {
    // initialization
    describe("initialization", () => {
        it("Employee should have a name assigned.", () => {
            const name = "Tom";
            const id = 1;
            const email = "TomBrady@go.com";
            const emp = new Employee(name, id, email);
            expect(emp.name).toBe(name);
            expect(emp.id).toBe(id);
            expect(emp.email).toBe(email);
        });
    });
    // group for getName()
    describe("getName()", () => {
        it("Employee name should be returned.", () => {
            const name = "Tom";
            const emp = new Employee(name, 1, "TomBrady@go.com");
            const empName = emp.getName();
            expect(empName).toBe(name);
        });
    });
    // group for getId()
    describe("getId()", () => {
        it("Employee id should be returned.", () => {
            const id = 1;
            const emp = new Employee("Tom", id, "TomBrady@go.com");
            const empId = emp.getId();
            expect(empId).toBe(id);
        });
    });
    // group for getEmail()
    describe("getEmail()", () => {
        it("Employee email should be returned.", () => {
            const email = "TomBrady@go.com";
            const emp = new Employee("Tom", 1, email);
            const empEmail = emp.getEmail();
            expect(empEmail).toBe(email);
        });
    });
    // group for getRole()—returns 'Employee'
    describe("getRole()", () => {
        it("Employee role should be returned.", () => {
            const emp = new Employee("Tom", 1, "TomBrady@go.com");
            const empRole = emp.getRole();
            expect(empRole).toBe("Employee");
        });
    });
});