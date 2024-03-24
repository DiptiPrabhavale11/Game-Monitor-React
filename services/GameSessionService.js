const GameSession = require("../models/GameSession");
const LevelSession = require("../models/LevelSession");
const GetUser = require("./UserService");

const saveGameSession = async (request, convertedJson, response) => {
    const gameSession = new GameSession(convertedJson.gameSessionObj);
    const levels = convertedJson.levelSessions;
    let levelList = [];
    levels.forEach(level => {
        const levelSession = new LevelSession(level);
        levelList = levelList.concat(levelSession);
    });
    const records = await LevelSession.insertMany(levelList);
    records.forEach(r => {
        gameSession.levelSessions = gameSession.levelSessions.concat(r._id);
    });
    const token = request.body.token;
    if (token !== null) {
        const user = await GetUser(token);
        gameSession.user = user._id;
    }
    const gameRes = await gameSession.save();
    return response.status(201).json({ "gameSessionId": gameRes._id });
};

module.exports = { saveGameSession };

