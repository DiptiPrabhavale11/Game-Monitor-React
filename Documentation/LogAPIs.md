# API Details

This document provides details about the RESTful API endpoints used in the Logs Monitor application.

---

## Authentication

All API endpoints except POST logs require authentication using a valid token. When making requests to these endpoints, ensure that the Authorization header is included with a valid token.

More details about how to retrieve Bearer Token can be found [here](AuthToken.md).  

---

## Log Endpoints

### 1. Retrieve Logs (GET Logs)

- **Route:** /api/logs
- **Method:**   GET
- **Header Authentication** [Bearer Token](AuthToken.md) required
- **Details:**
    - Retrieves the stored log information from the database.
    - Responds with 200(Ok) with log information as JSON
- **Sample Input Output:**
     ![Postman showing output](https://github.com/edcsdev/api_backend/assets/113642858/305e76da-8090-459c-9ac5-cd24674367fa)

### 2. Store Logs (POST Logs)
  
- **Route:** /api/logs
- **Method:**   POST
- **Header Authentication** Not required
- **Details:**
    - Validates the input log data
    - Processes and convert the input data to a valid log data
    - If there is any error in the input data such as Invalid dates, missing level etc.
        then it will store these logs inside error tables (errorGameSessions, errorLevelSession)
    - If there is no error in the input data,
        it will store the processed data in the database (GameSessions, LevelSession)
    - Responds with 201(Created), a gameSessionId and message string on success.
        It will contain different messages to indicate error in the input logs data.
    - Responds with 400(Bad Request) if incorrect or empty request data is passed
- **Sample Input:**
      ![API Reuest Format](https://github.com/edcsdev/api_backend/assets/113642858/ee84998d-e5ab-4389-9e3b-2ab1b0550b84)

- **Sample Output:**

  *Correct Log*
  ![API Response Format - Correct Log](https://github.com/edcsdev/api_backend/assets/113642858/88a3bcb2-f314-40f3-a58b-d3d6f9e8806b)

  *Error Log*
  ![API Response Format - Error Log](https://github.com/edcsdev/api_backend/assets/113642858/d598a1b6-2558-49b9-8fdc-43d35a0a9f37)

### 3. Fetch Error Logs (GET Error Logs)

- **Route:** /api/logs/errors
- **Method:**   GET
- **Header Authentication** [Bearer Token](AuthToken.md) required
- **Details:**
    - Retrieves the stored error log information from the database.
    - Responds with 200(Ok) with error log information as JSON
- **Sample Input Output:**
      ![Postman Request Error logs](https://github.com/edcsdev/api_backend/assets/113642858/39bfca42-f656-4f3e-81e4-b90938478516)

Relevant Class: /controllers/GameSession.js
