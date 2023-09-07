// Pulls in all required dependencies from installed node modules, as well as classes from local .js files

//Dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// Gives inquirer access to maxlength method, which allows you set a maximum length of characters for the input method
const maxLength = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', maxLength)

// Classes
const { SVG } = require('./lib/generateSVG.js');
const { Square, Triangle, Circle } = require("./lib/shapes.js");



// Inquirer prompts for the questionaire that will gather the specifications for the user's logo
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
        message: 'What color would you like your text to be? Please type the either name of the color\n or the RGB-hexadecimal(i.e. - "#333") for the color you would like to use: \n',

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

// Function to build the logo based on user-input
inquirer
    .prompt(questions)
    .then((data) => {
        //Creates a new svg object built from the SVG class
        let svg = new SVG();
        //If statement for the user's chosen shape, will build a new shape object based on the chosen shape's parent class, then sets the color
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
        //Sets the 3-character text for the logo and text color
        svg.setText(`${data.chars}`, `${data.charColor}`);
        svg.render()
        //Writes the new file as 'logo.svg' using the string that was built using SVG class methods and inquirer prompts, then logs 'Generated logo.svg' to the console
        fs.writeFile('./output/logo.svg', `${svg.generatedSVG}`, function (err) {
            err ? console.log(err) : console.log('Generated logo.svg')
        })
    })