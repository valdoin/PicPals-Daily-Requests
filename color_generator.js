const fs = require('fs')

file = fs.readFileSync('./color_palette.txt')

colorList = file.toString().replace(/(\r\n|\n|\r)/gm, "").split(";")

exports.generateColors = () => {
    return colorList[getRandomInt(0, colorList.length)].split(":")
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }