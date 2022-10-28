// bring in employee
const Employee = require("../lib/Employee");

// test for instantiating an Employee instance
test("Can instantiate Employee instnace", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

// test for setters
test("Can set name via construcror arguments", () => {
    //variable for name
    // variable for new Employee(passing in the variable for name here)
    // set up your expect and to be
});

test("Can set id via constructor argument", () => {
    // variable for tje test value, in this case a number since it's an id
    const testValue = 100;
    // variable for new Employee ("example name as a string", testValue)\
    const e = new Employee("Foo", testValue);
    // set up your expect and to be
    expect(e.id).toBe(testValue); 
});

test("Can set email via constructor argument", () => {
    // variable for test value
    // vaiable for new Employee("example name", example number. test value)
    // set up your expect and to be
});

// test for getters
test("Can get name via getName()", () => {
    // variable for test value
    const testValue = "Alice";
    // variable for new Employee(testValue)
    const e = new Employee(testValue);
    // expect using the getter, and then your to be
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    // testValue
    // new Employee("example name", testValue)
    // expect and to be
});

test("Can get email via getEmail()", () => {
    // variable for test value
    // vaiable for new Employee("example name", example number. test value)
    // set up your expect and to be
});

test("getRole() should return \"Employey\"", () => {
    // same pattern as before
});