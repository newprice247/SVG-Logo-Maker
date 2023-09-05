

class SVG {
    constructor() {
        this.generatedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">'
    }
    setText(text, textColor){
        this.generatedSVG += `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
    }
    setShape(shapeObject) {
        this.generatedSVG += `${shapeObject.generatedShape}`
    }
    render() {
        return this.generatedSVG += `</svg>`
    }
}

module.exports = { SVG };