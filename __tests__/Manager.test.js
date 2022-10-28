// bring in employee
const { expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

// test for instantiating a manager instance
test("Can instantiate Manager instance", () => {
    const e = new Manager();
    expect(typeof (e)).toBe("object");
});

// test for setters
test("Can set office number via constructor arguments", () => {
    // variable for test value
    const testValue = "123-456-7890";
    // vaiable for new manager
    const e = new Manager("Sangki", 100, "sangki810@gmail.com", testValue);
    // set up expect and to be
    expect(e.officeNumber).toBe(testValue);
});

// test for getters
test("Can get office number via getOfficeNumber()", () => {
    // variable for test value
    const testValue = "123-456-7890";
    // variable for new manager
    const e = new Manager("Sangki", 100, "sangki810@gmail.com", testValue);
    // expect using the getter, and then to be
    expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    // vairable for new manager
    const e = new Manager("Sangki", 100, "sangki810@gmail.com", "123-456-7890");
    // set up expect and to be
    expect(e.getRole()).toBe("Manager");
});