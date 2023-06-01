const fs = require('fs')

exports.generateRandomPhrase = () =>{

    file = fs.readFileSync('./phrases.txt')

    phrases = file.toString().split(";")
    phrases = phrases.slice(0, phrases.length -1)

    return phrases[getRandomInt(0, phrases.length)].split("\"")[1]
}   

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }