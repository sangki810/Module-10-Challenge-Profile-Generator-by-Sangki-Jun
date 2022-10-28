// bring in employee
const { expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

// test for instantiating an intern instance
test("Can instantiate Intern instance", () => {
    const e = new Intern();
    expect(typeof (e)).toBe("object");
});

// test for setters
test("Can set school via constructor arguments", () => {
    // variable for test value
    const testValue = "UCF";
    // vaiable for new intern
    const e = new Intern("Sangki", 100, "sangki810@gmail.com", testValue);
    // set up expect and to be
    expect(e.school).toBe(testValue);
});

// test for getters
test("Can get school via getSchool()", () => {
    // variable for test value
    const testValue = "UCF";
    // variable for new intern
    const e = new Intern("Sangki", 100, "sangki810@gmail.com", testValue);
    // expect using the getter, and then to be
    expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    // vairable for new intern
    const e = new Employee("Sangki", 100, "sangki810@gmail.com", "UCF");
    // set up expect and to be
    expect(e.getRole()).toBe("Intern");
});