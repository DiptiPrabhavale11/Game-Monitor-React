const mongoose = require("mongoose").set("strictQuery", true);
// Represents the data recorded during gameplay.
const gameSessionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    startTime: Date,
    endTime: Date,
    levelSessions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "LevelSession"
    }]
});

gameSessionSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.gameSessionId = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("GameSession", gameSessionSchema);