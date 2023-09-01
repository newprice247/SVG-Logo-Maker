const inquirer = require('inquirer');
const maxLength = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', maxLength)


const questions = [
    {
        type: 'maxlength-input',
        name: 'chars',
        message: 'Please type the three letters you would like on the front of your logo:',
        maxLength: 3
    },
    {
        type: 'list',
        name: 'charColorChoice',
        message: 'Would you like to choose from a list of colors for the text or type your own?',
        choices: ['Show me a list of colors!', "I'd like to type in my own color"],
    },
    {
        type: 'list',
        name: 'charKeywordOrRgb',
        message: 'Would you like to type the name of your color or use RGB Hexadecimals?',
        choices: ["I'd like to use a color keyword", "I'll use RGB Hexadecimals"],
        when: (answers) => {
            if (answers.charColorChoice === "I'd like to type in my own color") {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'charColorList',
        message: 'Choose your logo color from the options below',
        choices: ['Red', 'Blue', 'Green', 'Black', 'Yellow', 'Orange', 'Purple', 'Grey', 'Brown'],
        when: (answers) => {
            if (answers.charColorChoice === 'Show me a list of colors!') {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'charColorKeyword',
        message: 'Please type the name of the color you would like to use: ',
        when: (answers) => {
            if (answers.charKeywordOrRgb === "I'd like to use a color keyword") {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'charRGB',
        message: 'Please type the RGB Hexadecimal value for the color you would like to use, using commas to separate the numbers\n (Example : ###, ###, ###): ',
        when: (answers) => {
            if (answers.charKeywordOrRgb === "I'll use RGB Hexadecimals") {
                return true;
            }
        }   
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose which shape you would like to use for your logo background:',
        choices: ['Triangle', 'Square', 'Circle']
    },
    {
        type: 'list',
        name: 'backgroundColorChoice',
        message: 'Would you like to choose from a list of colors for your background or type your own?',
        choices: ['Show me a list of colors!', "I'd like to type in my own color"],
    },
    {
        type: 'list',
        name: 'backgroundKeywordOrRgb',
        message: 'Would you like to type the name of your color or use RGB Hexadecimals?',
        choices: ["I'd like to use a color keyword", "I'll use RGB Hexadecimals"],
        when: (answers) => {
            if (answers.backgroundColorChoice === "I'd like to type in my own color") {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'backgroundColorList',
        message: 'Choose your logo color from the options below',
        choices: ['Red', 'Blue', 'Green', 'Black', 'Yellow', 'Orange', 'Purple', 'Grey', 'Brown'],
        when: (answers) => {
            if (answers.backgroundColorChoice === 'Show me a list of colors!') {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'backgroundColorKeyword',
        message: 'Please type the name of the color you would like to use: ',
        when: (answers) => {
            if (answers.backgroundKeywordOrRgb === "I'd like to use a color keyword") {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'backgroundRGB',
        message: 'Please type the RGB Hexadecimal value for the color you would like to use, using commas to separate the numbers\n (Example : ###, ###, ###): ',
        when: (answers) => {
            if (answers.backgroundKeywordOrRgb === "I'll use RGB Hexadecimals") {
                return true;
            }
        }   
    }

]

inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data)
    })