const connectDB = require("./db")
const { createPhrase, getCurrentPhrase } = require("./db_requests/crud_phrase")
const { setPostedFalse } = require("./db_requests/user_update")
const { generateRandomPhrase } = require("./phrase_generator")
generateNextDate = require('./time_generator')

/*
nextDate = generateNextDate()*/
nextDate = new Date()
nextDate.setMinutes(nextDate.getMinutes()+1)
console.log(`la prochaine phrase sera générée le ${nextDate.toString()}`)

connectDB()


setInterval(timeToPost, 60000)


console.log(generateRandomPhrase())



async function updatePhrase()  {
    
    //genere la phrase 
    phrase = generateRandomPhrase()
    
    //update la bd
    await createPhrase(phrase)

    //update les notifs

    //update User.posted à false
    await setPostedFalse()

    //genere la prochaine date
    nextDate = await generateNextDate()
    console.log(`la prochaine phrase sera générée le ${nextDate.toString()}`)
}

function timeToPost(){
    if(isTimeToPost()){
        updatePhrase()
    }
}


//retourn true si l'heure actuel (à la minute près) est egale à l'heure de la prochaine generation de phrase
function isTimeToPost(){
    currentDate = new Date()

    return currentDate.getFullYear() === nextDate.getFullYear() && 
            currentDate.getMonth() === nextDate.getMonth() &&
            currentDate.getDate() === nextDate.getDate() &&
            currentDate.getHours() === nextDate.getHours() &&
            currentDate.getMinutes() === nextDate.getMinutes()
            
}
