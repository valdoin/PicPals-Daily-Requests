//genere un date aléatoire entre deux bornes (start et end)
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  
//genere la prochaine date à laquelle les utilisateurs pourront poster
const generateNextDate = () => {
    //la date actuelle
    currentDate = new Date()
    //le jour suivant a minuit pile
    nextMidnight = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 0, 0, 0)
    //le jour suivant à 23h59
    max = new Date(nextMidnight.getFullYear(), nextMidnight.getMonth(), nextMidnight.getDate(), 23, 59, 59)

    //on retourne une date aléatoire entre 00h00 et 23h59 le jour suivant 
    return randomDate(nextMidnight, max)
}

module.exports = generateNextDate