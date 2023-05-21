const { generateColors } = require("../color_generator")
const { User } = require("../model/User")
const { deleteAllNotifications } = require("./notificationCreator")

exports.updateUser = async () => {
    //await User.updateMany({}, {posted: false, primaryColor: colors[0], secondaryColor: colors[1]})

    await User.find().then((users) => {
        users.forEach(async(user) => {
            var colors = generateColors()
            console.log(colors)
            await User.findByIdAndUpdate(user._id, {$set: {posted: false, primaryColor: colors[0], secondaryColor: colors[1]}})
        })
    })
}

exports.resetPosts = async () => {
    await User.updateMany({}, {posted: false, primaryColor: pcolor, secondaryColor: scolor})
    deleteAllNotifications()
}   

