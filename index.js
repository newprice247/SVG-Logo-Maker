const inquirer = require('inquirer');
const maxLength = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const { SVG } = require('./lib/generateSVG.js');
const { Square, Triangle, Circle } = require("./lib/shapes.js");
inquirer.registerPrompt('maxlength-input', maxLength)



const questions = [
    {
        type: 'maxlength-input',
        name: 'chars',
        message: 'Please type the three letters you would like on the front of your logo:',
        maxLength: 3
    },
    {
        type: 'input',
        name: 'charColor',
        message: 'What color would you like your text to be? Please type the either name of the color or the RGB hexadecimal for the color you would like to use: \n',

    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose which shape you would like to use for your logo background:',
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: 'input',
        name: 'backgroundColor',
        message: 'What color would you like your background to be? Please type the either name of the color or the RGB hexadecimal for the color you would like to use: \n',

    }


]

inquirer
    .prompt(questions)
    .then((data) => {
        let svg = new SVG();
        if (data.shape === `Triangle`) {
            const triangle = new Triangle();
            triangle.setColor(data.backgroundColor)
            svg.setShape(triangle);
        } else if (data.shape === `Circle`) {
            const circle = new Circle();
            circle.setColor(data.backgroundColor)
            svg.setShape(circle);
        } else if (data.shape === `Square`) {
            const square = new Square();
            square.setColor(data.backgroundColor)
            svg.setShape(square);
        }
        svg.setText(`${data.chars}`, `${data.charColor}`);
        svg.render()
        fs.writeFile('./examples/logo.svg', `${svg.generatedSVG}`, function (err) {
            err ? console.log(err) : console.log('Generated logo.svg')
        })
    })