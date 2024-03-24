const User = require("../models/User");

const addNewUser = async (token) => {
    const newUser = new User({
        machineId: token
    });
    return await newUser.save();
};

const getUser = async (token) => {
    const userInfo = {
        machineId: token
    };
    let user;
    await User.findOne(userInfo)
        .then(userFromDb => {
            if (userFromDb)
                user = userFromDb;
            else
                user = addNewUser(token);
        });
    return user;
};

module.exports = getUser;