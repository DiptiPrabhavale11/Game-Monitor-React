const Constants = require("./ConversionConstants");

const convertCommand = (log) => {
    let commandStr = log.UserInteraction.replace(Constants.COMMAND, "").trim();
    return {
        timeStamp: convertToDateObj(log.TimeStamp),
        action: "Move",
        command: JSON.parse(commandStr)
    };
};
//Converts Special actions such as Win, Error that has some alert message for the user
const convertAction = (action, log, constant) => {
    return {
        action,
        msg: log.UserInteraction.replace(constant, "").trim(),
        timeStamp: convertToDateObj(log.TimeStamp)
    };
};
const convertError = (log) => {
    return convertAction("Error", log, Constants.ERROR);
};

const convertWin = (log) => {
    return convertAction("Win", log, Constants.WIN);
};

const convertLevel = (index, levelSessions, levelSessionObj, log) => {
    if (index !== 0) {
        levelSessions = [...levelSessions, ...[levelSessionObj]];
        levelSessionObj = { levelName: "", userInteractions: [] };
    }
    levelSessionObj.levelName = log.UserInteraction.replace(Constants.LEVEL_NAME, "").trim();
    levelSessionObj.userInteractions = [];
    return { levelSessions, levelSessionObj };
};

const convertCategory = (log) => {
    return {
        action: log.UserInteraction.replace(Constants.CATEGORY, "").trim(),
        timeStamp: convertToDateObj(log.TimeStamp)
    };
};

//Converts interactions such as menu or any other button clicks (All interactions without any labels like CATEGORY, COMMAND etc)
const convertInteraction = (log) => {
    return {
        action: log.UserInteraction,
        timeStamp: convertToDateObj(log.TimeStamp)
    };
};

const  convertPlayAndCommandTree = (log,nextInteraction) => {
    let commandTreeStr = nextInteraction.UserInteraction.replace(Constants.COMMAND_TREE, "").trim();
    return {
        action: log.UserInteraction,
        timeStamp: convertToDateObj(log.TimeStamp),
        commandTree:JSON.parse(commandTreeStr),
    };
};

const conversionMap = {
    [Constants.CATEGORY]: convertCategory,
    [Constants.COMMAND]: convertCommand,
    [Constants.ERROR]: convertError,
    [Constants.WIN]: convertWin,
};

const convertToDateObj =(timestamp) => {
    return new Date(timestamp);

};
const convertJson = (obj) => {
    const logs = obj.metricsList;
    const gameSessionObj = {
        "gameSessionId": "",
        "startTime": "",
        "endTime": "",
        "token": "",
    };
    let levelSessions = [];

    if (logs && logs.length) {
        gameSessionObj.startTime = convertToDateObj(logs[0].TimeStamp);
        gameSessionObj.endTime = convertToDateObj(logs.slice(-1)[0].TimeStamp);
        let levelSessionObj = { levelName: "", userInteractions: [] };
        let recentCommandTreeIndex = null;
        logs.forEach((log, index, arr) => {
            let shouldInsertAction = true;
            if (log.UserInteraction.includes(Constants.LEVEL_NAME)) {
                ({ levelSessions, levelSessionObj } = convertLevel(index, levelSessions, levelSessionObj, log));
            } else {
                if (log.UserInteraction === Constants.PLAY) {
                    //The next interaction after Play is always commandTree;
                    // Appending commandTree with Play action here
                    recentCommandTreeIndex = index + 1;
                    const convertedObj = convertPlayAndCommandTree(log, arr[recentCommandTreeIndex]);
                    levelSessionObj.userInteractions = levelSessionObj.userInteractions.concat(convertedObj);
                } else if (index === recentCommandTreeIndex) {
                    // Skipping the commandTree interaction as we have
                    // previously recorded in the Play interaction
                    return;
                } else {
                    for (const key in conversionMap) {
                        if (log.UserInteraction.includes(key)) {
                            const convertedObj = conversionMap[key](log, levelSessionObj);
                            shouldInsertAction = false;
                            levelSessionObj.userInteractions = levelSessionObj.userInteractions.concat(convertedObj);
                            break;
                        }
                    }
                    if (shouldInsertAction) {
                        const action = convertInteraction(log, levelSessionObj);
                        levelSessionObj.userInteractions = levelSessionObj.userInteractions.concat(action);
                    }
                }
            }
            if (index === arr.length - 1) {
                levelSessions = [...levelSessions, ...[levelSessionObj]];
            }
        });
        return { gameSessionObj, levelSessions };
    }
};
module.exports = convertJson;
