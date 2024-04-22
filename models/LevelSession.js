const mongoose = require("mongoose").set("strictQuery", true);

const commandTree = new mongoose.Schema({
    moves: [{
        command: String,
        leftChild: String,
        rightChild: String,
        parent: String
    }],
    funcDefs: [{
        funcName: String,
        funcMoves: [{
            command: String,
            leftChild: String,
            rightChild: String,
            parent: String
        }]
    }]
});
// Represents the user interaction data recorded at each level.
const levelSessionSchema = new mongoose.Schema({
    levelName: {
        type: String,
        required: true
    },
    userInteractions: [{
        timeStamp: {
            type: Date,
            required: true,
        },
        action: {
            type: String,
            required: true
        },
        command: {
            move: String,
            leftChild: String,
            rightChild: String,
            parent: String,
            parentAlt: String,
            isRemovable: Boolean,
            isSlot: Boolean
        },
        msg: String,
        commandTree: {
            type: commandTree,
            required: false
        }
    }],
});

levelSessionSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.levelSessionId = returnedObject._id.toString();
        let userInteractions = returnedObject.userInteractions;
        if (userInteractions && Array.isArray(userInteractions)) {
            userInteractions = userInteractions.map(obj => ({
                ...obj,
                timeStamp: obj.timeStamp.toUTCString(),
            }));
            returnedObject.userInteractions = userInteractions;
        }
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("LevelSession", levelSessionSchema);