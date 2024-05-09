# Dashboard APIS

This section provides details about the APIs specifically designed for retrieving dashboard metrics.

## 1. Popular Levels

- **Route:** /api/logs/popular-levels
- **Method:**   POST
- **Header Authentication** [Bearer Token](AuthToken.md) required
- **Details:**
    - Accepts array of days as an input e.g [1, 7, 30]
    - Retrieves the popular levels over last N days
    - Responds with 200(Ok) with top 3 levels with count for every N days
    - If [1,7, 30] is the input then it will return top 3 levels for last 1 day, last 7 days and last 30 days respectively.
    - It will return available no of levels if there are less than 3 levels played over specified days
- **Sample Input:**
    ![Popular Levels Input](https://github.com/edcsdev/api_backend/assets/113642858/e504014c-14e4-429b-a1f0-bef7e3107f83)
- **Sample Output:**
    ![Popular Levels Output](https://github.com/edcsdev/api_backend/assets/113642858/9a8f2923-72e3-48db-a188-5395f7219a85)

## 2. Longest Levels

- **Route:** /api/logs/longest-levels
- **Method:**   POST
- **Header Authentication** [Bearer Token](AuthToken.md) required
- **Details:**
    - Accepts array of days as an input e.g [1, 7, 30]
    - Retrieves the longest levels over last N days
    - Responds with 200(Ok) with top 3 levels with time taken for every N days
    - If [1,7, 30] is the input then it will return top 3 longest for last 1 day, last 7 days and last 30 days respectively.
    - It will return available no of levels if there are less than 3 levels played over specified days
- **Sample Input:**
    ![Longest Levels Input](https://github.com/edcsdev/api_backend/assets/113642858/d9a51aa3-b349-4d59-8828-c815455792f3)

- **Sample Output:**
    ![Longest Levels Output](https://github.com/edcsdev/api_backend/assets/113642858/e39600b3-e567-42d3-a844-7ed4eaae7932)

## 3. Average Game Time

- **Route:** /api/logs/average-gamesession
- **Method:**   POST
- **Header Authentication** [Bearer Token](AuthToken.md) required
- **Details:**
    - Accepts array of days as an input e.g [1, 7, 30]
    - Retrieves the average game time over last N days
    - Responds with 200(Ok) with average game time in milliseconds for every N days
    - If [1,7, 30] is the input then it will return average game time for last 1 day, last 7 days and last 30 days respectively.
    - It will return 0 if no game session played over specified days
- **Sample Input:**
    ![Average game time Input](https://github.com/edcsdev/api_backend/assets/113642858/0e97311a-4909-4cbe-91e4-f65250dd5aef)

- **Sample Output:**
    ![Average game time Output](https://github.com/edcsdev/api_backend/assets/113642858/a0fcf1c9-e9a8-492f-8df0-1ee2af23f40f)

## 4. Common Errors

- **Route:** /api/logs/common-errors
- **Method:**   POST
- **Header Authentication** [Bearer Token](AuthToken.md) required
- **Details:**
    - Accepts array of days as an input e.g [1, 7, 30]
    - Retrieves the common errors over last N days
    - Responds with 200(Ok) with the top 5 common errors for every N days
    - Every error object will contain following fields error message, error count, level names and level ids
    - If [1,7, 30] is the input then it will return top 5 error messages for last 1 day, last 7 days and last 30 days respectively.
    - It will return empty array if no error occurred over specified days
- **Sample Input:**
    ![Common Errors Input](https://github.com/edcsdev/api_backend/assets/113642858/f461ea3e-463a-4c0f-a5e9-971182dee193)

- **Sample Output:**
    ![Common Errors Output](https://github.com/edcsdev/api_backend/assets/113642858/8846fe45-9416-429f-8412-77270e09b3c6)

Relevant Classes: /controllers/GameSession.js
