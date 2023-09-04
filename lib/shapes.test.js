const { Square, Triangle, Circle } = require("./shapes.js");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const circle = new Circle();
    circle.setColor("green");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
  });
  test("should accept a fillColor param", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe("Triangle", () => {
  test("should render svg for a green polygon element", () => {
    const triangle = new Triangle();
    triangle.setColor("bisque");
    expect(triangle.render()).toEqual( '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />');
  });
  test("should accept a fillColor param", () => {
    const triangle = new Triangle();
    triangle.setColor("purple");
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="purple" />');
  });
});

describe("Square", () => {
  test("should render svg for a green polygon element", () => {
    const square = new Square();
    square.setColor("dodgerblue");
    expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />');
  });
  test("should accept a fillColor param", () => {
    const square = new Square();
    square.setColor("red");
    expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="red" />');
  });
});
