//Pulls necessary shape classes from shapes.js
const { Square, Triangle, Circle } = require("./shapes.js");

//Tests Circle class 
describe("Circle", () => {
  //Tests setColor method with color as string
  test("should render svg for a green circle element", () => {
    const circle = new Circle();
    circle.setColor("green");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
  //Tests setColor method with hexadecimal
  test("should accept a hexadecimal", () => {
    const circle = new Circle();
    circle.setColor("#333");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#333" />');
  });
});

//Tests Triangle class
describe("Triangle", () => {
  //Tests setColor method
  test("should render svg for a green polygon element", () => {
    const triangle = new Triangle();
    triangle.setColor("bisque");
    expect(triangle.render()).toEqual( '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />');
  });
  //Tests setColor method with hexadecimal
  test("should accept a hexadecimal", () => {
    const triangle = new Triangle();
    triangle.setColor("#333");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#333" />');
  });
});

//Tests Square class
describe("Square", () => {
  //Tests setColor method
  test("should render svg for a blue polygon element", () => {
    const square = new Square();
    square.setColor("dodgerblue");
    expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />');
  });
  //Tests setColor method with hexadecimal
  test("should accept a hexadecimal", () => {
    const square = new Square();
    square.setColor("#333");
    expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="#333" />');
  });
});
