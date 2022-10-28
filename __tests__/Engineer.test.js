// bring in employee
const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

// test for instantiating an engineer instance
test("Can instantiate Engineer instance", () => {
    const e = new Engineer();
    expect(typeof (e)).toBe("object");
});

// test for setters
test("Can set github via contructor arguments", () => {
    // variable for test value
    const testValue = "sangki810";
    // vaiable for new engineer
    const e = new Engineer("Sangki", 100, "sangki810@gmail.com", testValue);
    // set up expect and to be
    expect(e.github).toBe(testValue);
});

// test for getters
test("Can get github via getGithub()", () => {
    // variable for test value
    const testValue = "sangki810";
    // variable for new egineer
    const e = new Engineer("Sangki", 100, "sangki810@gmail.com", testValue);
    // expect using the getter, and then to be
    expect(e.getGithub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    // vairable for new engineer
    const e = new Employee("Sangki", 100, "sangki810@gmail.com", "sangki810");
    // set up expect and to be
    expect(e.getRole()).toBe("Engineer");
});