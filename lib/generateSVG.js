let generateSVG = (data) => {
    return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="white" />
                <circle cx="150" cy="100" r="80" fill="${data.backgroundColorList || data.backgroundColorKeyword || data.backgroundRGB}" />
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.charColorList || data.charColorKeyword || data.charRGB}">${data.chars}</text>
                </svg>
                
    `
}

module.exports = generateSVG;