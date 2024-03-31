const GetUser = require("./UserService");

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
    if (token !== null) {
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

module.exports = { saveGameSession };

