const { generateColors } = require("./color_generator")
const connectDB = require("./db")
const { createPhrase, getCurrentPhrase } = require("./db_requests/crud_phrase")
const { createTimeToPostNotification, deleteAllNotifications } = require("./db_requests/notificationCreator")
const { resetPosts, setPostedFalse, updateUser } = require("./db_requests/user_update")
const { generateRandomPhrase } = require("./phrase_generator")
generateNextDate = require('./time_generator')

/*
nextDate = generateNextDate()*/
nextDate = new Date()
nextDate.setSeconds(nextDate.getSeconds()+10)
console.log(`la prochaine phrase sera générée le ${nextDate.toString()}`)

connectDB()

setInterval(timeToPost, 1000)

async function updatePhrase()  {
    
    //genere la phrase 
    phrase = generateRandomPhrase()
    console.log(phrase)

    //update la bd
    await createPhrase(phrase)

    //update User.posted à false et remet a 0 les notifs
    await updateUser()

    await deleteAllNotifications()

    //genere la notif de post
    await createTimeToPostNotification()

    //genere la prochaine date
    nextDate = await generateNextDate()
    console.log(`la prochaine phrase sera générée le ${nextDate.toString()}`)
}

function timeToPost(){
    if(isTimeToPost()){
        console.log("c lheure")
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
