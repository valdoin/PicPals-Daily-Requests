const { User } = require("../model/User")

//quand l'utilisateur poste, cette fonction est appelée pour mettre a jour les notifs de tous ses amis
exports.createHasPostedNotification = async(token) =>{
    User.findById(token.id).populate("friends").then((user) => {
        user.friends.forEach((friend) => {
            friend.notifications.push(`hasposted:${token.id}`)
        })
    })
}

exports.createTimeToPostNotification = async() => {
   /*User.find().then((users) => {
        users.forEach((user) => {
            user.notifications.push("timetopost")
            user.save()
            //User.findByIdAndUpdate(user._id, {$push: {notifications: "timetopost"}})
        })
    })*/

   await User.updateMany({}, {$push: {notifications: "timetopost"}})
   //User.find().then((user)=>{console.log(typeof(user[0].notifications))})
}

exports.deleteAllNotifications = async() => {
    await User.updateMany({}, {notifications: []})

}

exports.deleteUserNotifications = async (phone) => {
    User.findOne({phone: phone}).then((user) => {
        user.notifications = []
        user.save()
    })
}