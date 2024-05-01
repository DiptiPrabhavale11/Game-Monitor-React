const GetUser = require("./UserService");
const Filters = require("../Utils/filters");
const APIConstants = require("../Constants/APIConstants");

const saveGameSession = async ({ request, convertedJson, response, gameSchema, levelSchema, msg }) => {
    const gameSession = new gameSchema(convertedJson.gameSessionObj);
    const levels = convertedJson.levelSessions;
    let levelList = [];
    levels.forEach(level => {
        const levelSession = new levelSchema(level);
        levelList = levelList.concat(levelSession);
    });
    const records = await levelSchema.insertMany(levelList);
    records.forEach(r => {
        gameSession.levelSessions = gameSession.levelSessions.concat(r._id);
    });
    const token = request.token;
    if (token) {
        const user = await GetUser(token);
        gameSession.user = user._id;
    }
    const gameRes = await gameSession.save();
    if(response) {
        return { "gameSessionId": gameRes._id, msg };
    } else {
        return true;
    }
};

const getMostCommonErrors=(gameSessions,days) => {
    const levels = [];
    gameSessions.forEach(game => {
        levels.push(...game.levelSessions);
    });
    const dayWiseErrors = {};
    for (let day in days) {
        const filteredData = Filters.lastNDaysLevelData(levels, "userInteractions", 0, "timeStamp", Number(days[day]));
        //Generate level object with its count
        let levelObj = Filters.getCountForAction(filteredData, "Error");
        const sortedArr = Filters.getSortedObject(levelObj, "count", "msg");
        dayWiseErrors[days[day]] = Filters.getTopResults(sortedArr,APIConstants.TOP_5);
    }
    return dayWiseErrors;
};

module.exports = { saveGameSession,getMostCommonErrors };

