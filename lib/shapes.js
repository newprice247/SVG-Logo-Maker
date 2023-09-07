//Shape parent class with methods all shapes will utilize
class Shape {
    constructor() {
        this.fillColor = ``
    }
    setColor(color) {
        this.fillColor = color
        this.generatedShape += ` fill="${this.fillColor}" />`
    }
    render() {
        return this.generatedShape
    }
}

//Square class with correct specifications set as string
class Square extends Shape {
    constructor() {
        super();
        this.generatedShape = `<rect x="90" y="40" width="120" height="120"`
    }
}

//Triangle class with correct specifications set as string
class Triangle extends Shape {
    constructor(){
        super();
        this.generatedShape = `<polygon points="150, 18 244, 182 56, 182"`
    }
}

//Circle class with correct specifications set as string
class Circle extends Shape {
    constructor(){
        super();
        this.generatedShape = `<circle cx="150" cy="100" r="80"`
    }
}

//Exports classes for use in tests and index.js
module.exports = { Square, Triangle, Circle }