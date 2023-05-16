const { User } = require("../model/User")
const { deleteAllNotifications } = require("./notificationCreator")

exports.setPostedFalse = async () => {
    await User.updateMany({}, {posted: false})
}

exports.resetPosts = async () => {
    await User.updateMany({}, {posted: false})
    deleteAllNotifications()
}