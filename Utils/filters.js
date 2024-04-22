//Filters out data for last N days based on a key of object
const lastNDaysLevelData = (data, nestingKey, nestingIndex, validationKey, days) => {
    const filteredData = data.filter(item => {
        if (item[nestingKey] && item[nestingKey].length) {
            const element = item[nestingKey][nestingIndex];
            return (new Date() - new Date(element[validationKey])) <= days * 24 * 60 * 60 * 1000; // days in milliseconds
        }
    });
    return filteredData;
};

//Filters out data for last N days based on a key of object
const lastNDaysData = (data, key, days) => {
    const filteredData = data.filter(item => {
        return (new Date() - new Date(item[key])) <= days * 24 * 60 * 60 * 1000; // days in milliseconds
    });
    return filteredData;
};

const getSortedObject = (obj, sortKey) => {
    let keyValueArray = Object.entries(obj);
    const finalArr = [];

    // Sort Obj based on sortKey
    keyValueArray.sort((a, b) => b[1][sortKey] - a[1][sortKey]);

    // Create final array of objects with level name
    keyValueArray.forEach(([key, value]) => {
        finalArr.push({ level: key, ...value });
    });

    return finalArr;
};

const getTimestamp = (level, index) => {
    return level.userInteractions[index] ? level.userInteractions[index].timestamp : null;
}

const getCountHashmap = (arr, key, keyMap) => {
    let hashmap = {};
    arr.forEach(data => {
        if (hashmap[data[key]]) {
            hashmap[data[key]].count += 1;
        } else {
            hashmap[data[key]] = { count: 1 };
            const map = Object.keys(keyMap);
            for (let i = 0; i < map.length; i++) {
                hashmap[data[key]][map[i]] = data[keyMap[map[i]]];
            }
        }
    });
    return hashmap;
};

const getLevelTimeHashmap = (arr, key, keyMap) => {
    let levelTimehashmap = {};
    arr.forEach(level => {
        const lastInteraction = level.userInteractions.length - 1;
        const start = getTimestamp(level, 0);
        const end = getTimestamp(level, lastInteraction);
        const diff = new Date(end).getTime() - new Date(start).getTime();
        if (levelTimehashmap[level[key]]) {
            levelTimehashmap[level[key]].timeDiff = Math.max(diff, levelTimehashmap[level[key]].timeDiff);
            if (diff > levelTimehashmap[level[key]].timeDiff) {
                levelTimehashmap[level[key]].levelSessionId = level._id;
            }
        } else {
            levelTimehashmap[level[key]] = { timeDiff: diff };
            const map = Object.keys(keyMap);
            for (let i = 0; i < map.length; i++) {
                levelTimehashmap[level[key]][map[i]] = level[keyMap[map[i]]];
            }
        }
    });
    return levelTimehashmap;
};
const getTopResults = (arr, topCount) => {
    return arr.length >= topCount ? arr.slice(0, topCount)
        : arr.slice(0, arr.length - 1);
};

module.exports = { lastNDaysData, lastNDaysLevelData, getTopResults, getSortedObject, getCountHashmap, getLevelTimeHashmap };
