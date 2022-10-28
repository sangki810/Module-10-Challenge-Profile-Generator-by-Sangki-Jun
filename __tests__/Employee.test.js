// bring in employee
const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

// test for instantiating an Employee instance
test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

// test for setters
test("Can set name via constructor arguments", () => {
    //variable for name
    const testValue = "Sangki";
    // variable for new Employee(passing in the variable for name here)
    const e = new Employee(testValue);
    // set up expect and to be
    expect(e.name).toBe(testValue);
});

test("Can set id via constructor argument", () => {
    // variable for test value
    const testValue = 100;
    // variable for new Employee
    const e = new Employee("Foo", testValue);
    // set up expect and to be
    expect(e.id).toBe(testValue); 
});

test("Can set email via constructor argument", () => {
    // variable for test value
    const testValue = "sangki810@gmail.com";
    // vaiable for new Employee
    const e = new Employee("Sangki", 100, testValue);
    // set up expect and to be
    expect(e.email).toBe(testValue);
});

// test for getters
test("Can get name via getName()", () => {
    // variable for test value
    const testValue = "Alice";
    // variable for new Employee
    const e = new Employee(testValue);
    // expect using the getter, and then to be
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    // testValue
    const testValue = 100;
    // new Employee
    const e = new Employee("Sangki", testValue);
    // expect and to be
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    // variable for test value
    const testValue = "sangki810@gmail.com";
    // vaiable for new Employee
    const e = new Employee("Sangki", 100, testValue);
    // set up expect and to be
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    // variable for new employee
    const e = new Employee("Sangki", 100, "sangki810@gmail.com");
    // set up expect and to be
    expect(e.getRole()).toBe("Employee");
});