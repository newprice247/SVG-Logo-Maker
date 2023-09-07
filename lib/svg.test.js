//Pulls necessary classes from local .js files
const { SVG } = require("./generateSVG.js");
const { Square } = require("./shapes.js");

//Tests the render method
test("should render a 300 x 200 svg element", () => {
  const svg = new SVG();
  expect(svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>');
});

//Tests the setText method with name of color as string
test("should append text element", () => {
  const svg = new SVG();
  svg.setText("A", "white");
  expect(svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>');
});

//Tests the setText method with hexadecimal as color choice
test("should set text message, as well as color as written as hexadecimal", () => {
  const svg = new SVG();
  svg.setText("SVG", "#333");
  expect(svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>');
});

//Tests the setShape method, represents the final product
test("should include a shape", () => {
  const svg = new SVG();
  const square = new Square();
  square.setColor("dodgerblue");
  svg.setShape(square);
  svg.setText("SVG", "#333");
  expect(svg.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="dodgerblue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="#333">SVG</text></svg>');
});
