# API Details

To know more about how the schema are defined refer [here](Documentation/SchemaDesign.md).

To know more about the format of logs refer [here](Documentation/JSONFormat.md)

## 1. Fetch Logs (GET Logs)

- **Route:** /api/logs
- **Method:**   GET
- **Details:**
    - Retrieves the stored log information from the database.
    - Responds with 200(Ok) with log information as JSON
- **Sample Input Output:**
     ![Postman showing output](https://github.com/edcsdev/api_backend/assets/113642858/f35f5990-248f-4e15-95ed-879435ce9898)

## 2. Store Logs (POST Logs)
  
- **Route:** /api/logs
- **Method:**   POST
- **Details:**
    - Validates the input log data
    - Processes and convert the input dat to a valid log data
    - Stores the processed data in the database
    - Responds with 201(Created) and a gameSessionId on success
    - Responds with 400(Bad Request) if incorrect or empty reqiuest data is passed
- **Sample Input:**
      ![API Reuest Format](https://github.com/edcsdev/api_backend/assets/113642858/ee84998d-e5ab-4389-9e3b-2ab1b0550b84)

- **Sample Output:**
      ![API Response Format](https://github.com/edcsdev/api_backend/assets/113642858/08b8545c-fbe8-4224-91d2-2648be67e1e8)
