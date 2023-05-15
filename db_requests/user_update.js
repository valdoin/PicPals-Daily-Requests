const { User } = require("../model/User")

exports.setPostedFalse = async () => {
    await User.updateMany({}, {posted: false})
}