const log = {
    "metricsList": [
        {
            "TimeStamp": "3/1/2024 11:55:17 AM",
            "UserInteraction": "levelName:staircase.json"
        },
        {
            "TimeStamp": "3/1/2024 11:55:18 AM",
            "UserInteraction": "category:MovementCommandPaletteButton"
        },
        {
            "TimeStamp": "3/1/2024 11:55:18 AM",
            "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
        }
    ]
};

const incorrectLog = {
    "metricsLists": [
        {
            "TimeStamp": "3/1/2024 11:55:17 AM",
            "UserInteraction": "levelName:default_level.json"
        },]
};

const levels = [{
    levelName: "default_level.json",
    userInteractions: [{
        "timeStamp": "2/23/2023 11:47:20 AM",
        "action": "MovementCommandPaletteButton",
    },
    {
        "command": {
            "move": "MOVE_FORWARD",
            "leftChild": "END_OF_BRANCH",
            "rightChild": "END_OF_BRANCH",
            "parent": "MOVE_FORWARD",
            "parentAlt": "null",
            "isRemovable": true,
            "isSlot": false
        },
        "timeStamp": "2/23/2023 11:47:22 AM",
        "action": "Move",
    },]
},
{
    levelName: "staircase.json",
    userInteractions: [{
        "timeStamp": "3/1/2024 11:55:18 AM",
        "action": "MovementCommandPaletteButton",
    },]
}];

const games = [{
    startTime: "3/1/2024 11:55:17 AM",
    endTime: "3/1/2024 12:55:18 AM",
    levelSessions: [
        "65e64648c821a304c99be0e7",
        "65e64648c821a304c99be0ea"
    ]
}];

module.exports = {
    log, incorrectLog, levels, games
};